<template>
    <div class="bg-[#070707f0] text-white">
        <NavBar/>
        <div v-if="isLoading" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <img class="h-16 w-16" src="/Rolling-1s-150px.gif" alt="loading">
        </div>
        <header>
            <div class="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://images.unsplash.com/photo-1552844418-3d618ca9af68?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="">
                    <h2 class="text-6xl font-bold mb-4">
                        系列酒藏
                    </h2>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 mb-6">
            <ul class="py-8 text-center flex items-center justify-between w-full">
                <li class="w-[30%] ">
                    <select @change="changeType" class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option v-for="item in type" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
                <li class="w-[36%] ">
                    <select @change="changeBrand" class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option selected value="全部">全部</option>
                        <option v-for="item in selectType[selectedType]" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
                <li class="w-[33%] ">
                    <select class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option v-for="item in type" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
            </ul>

            <div class="py-8 text-center flex items-center justify-between w-full flex-col md:flex md:flex-row flex-wrap">
                <div v-for="item in productsList" :key="item.id" class="md:w-[30%] lg:w-[24%] w-[80%] mb-6">
                    <router-link :to="`/product/${ item.id }`">
                        <div class="flex flex-col items-center justify-between p-2 bg-[#272626e8] rounded-lg duration-500 hover:bg-[#535252ab] hover:opacity-75 h-[380px] ">
                            <img class="object-cover rounded-lg h-[200px] " :src="item.imageUrl" alt="">
                            <div>
                                <p class="p-1">{{item.title}}</p>
                                <p class="p-1">售價：NT$.{{ item.price }}  <del class="text-sm ml-2">原價：NT$.{{ item.origin_price }}</del></p>
                            </div>
                            <div class="flex items-center justify-between">
                                <router-link :to="`/product/${ item.id }`" class="block border-2  p-2 rounded-lg cursor-pointer duration-500 hover:bg-white hover:text-black">
                                    瞭解更多
                                </router-link>
                                <button @click.prevent="addProduct(item.id)" type="button" class=" border-2 p-2 rounded-lg cursor-pointer duration-500 hover:bg-white hover:text-black">
                                    加入購物車
                                </button>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>

            <div class="pagination">
                <ul class="flex items-center justify-center">
                    <li>
                        <button @click="changePage('firstPage')" class="py-2 px-4 border-2 duration-500 hover:bg-white hover:text-black" type="button">
                            <<
                        </button>
                    </li>
                    <li>
                        <button @click="changePage('previousPage')" class="py-2 px-4 border-2 duration-500 hover:bg-white hover:text-black" type="button">
                            <
                        </button>
                    </li>
                    <li v-for="(page, index) in totalPages" :key="index + 'page'">
                        <button @click="changePage('currentPage', page)" class="py-2 px-4 border-2 duration-500 hover:bg-white hover:text-black" type="button">
                            {{ page }}
                        </button>
                    </li>
                    <li>
                        <button @click="changePage('nextPage')" class="py-2 px-4 border-2 duration-500 hover:bg-white hover:text-black" type="button">
                            >
                        </button>
                    </li>
                    <li>
                        <button @click="changePage('lastPage')" class="py-2 px-4 border-2 duration-500 hover:bg-white hover:text-black" type="button">
                            >>
                        </button>
                    </li>
                </ul>
            </div>
        </main>
        
        <FooTer/>
    </div>
</template>


<script setup>
    //components
    import NavBar from '@/components/NavBar.vue'
    import FooTer from '@/components/FooTer.vue'

    //api
    import { getProducts } from '@/apis/productApi'
    import { addTocart } from '@/apis/cartApi'

    import { onMounted, ref, watch } from 'vue'

    import Swal from 'sweetalert2'

    const isLoading = ref(true)
    const products = ref(null)
    const productsList = ref(null)
    const selectType = {
        '威士忌':['麥卡倫', '蘇格登', '亞伯樂'], 
        '葡萄酒':['杜瓦樂華', '蘇格登', '亞伯樂'], 
        '香檳':['杜瓦樂華', '保羅傑'], 
        '氣泡酒':['米娜多', 'TOSO', '羅卡酒莊'], 
        '利口':['安丘瑞耶斯', '吉拿', '芙內', '義大利庫司'], 
        '蘭姆':['麥卡倫', '杜瓦樂華', '亞伯樂'], 
        '琴酒':['杜瓦樂華', '蘇格登', '亞伯樂'], 
        '白蘭地':['皮耶費朗', '軒尼詩', '杜瓦樂華'], 
        '梅酒':['麥卡倫', '蘇格登', '亞伯樂'],
    }
    
    const type = ['威士忌', '葡萄酒', '香檳', '氣泡酒', '利口', '蘭姆', '琴酒', '白蘭地', '梅酒' ]
    const selectedType = ref('威士忌')
    const page = ref(1)
    const queryInfo = ref(
        {
            page:page.value,
            category:selectedType.value
        }
    )
    const changeType = (e) => {
        selectedType.value = e.target.value
    }

    const changeBrand = (e) => {
        if(e.target.value === '全部'){
            productsList.value = products.value
        } else {
            const data = products.value.filter((item)=>{
                return item.brand === e.target.value
            })
            productsList.value = data
        }
        
    }

    watch([selectedType, page], async ([newSelectedType, newPage]) => {
        console.log()
        queryInfo.value.category = newSelectedType
        queryInfo.value.page = newPage
        isLoading.value = true
        try {
            const res = await getProducts(queryInfo.value)
            isLoading.value = false
            products.value = res.products
            productsList.value = res.products
            totalPages.value = res.pagination.total_pages
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    })

    const addProduct = async (id)=>{
        const info = {
            data:{
                product_id: id,
                qty: 1
            }
        }
        isLoading.value = true
        try {
            const res = await addTocart(info) 
            console.log(res)
            isLoading.value = false
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
                width: '250',
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            })
            Toast.fire({
                icon: "success",
                title: "成功加入購物車"
            })
        } catch (error) {
            console.log(error)
        }
        

    }
    const totalPages = ref(null)
    const changePage = async (type, currentPage) => {
        console.log(type, currentPage)
        if(type === 'firstPage'){
            page.value = 1
        }else if(type === 'previousPage'){
            page.value === 1 ? null : page.value -= 1
        }else if(type === 'currentPage'){
            page.value = currentPage 
        }else if(type === 'nextPage'){
            page.value === totalPages.value ? null : page.value += 1
        }else if(type === 'lastPage'){
            page.value = totalPages.value
        }
        console.log(page.value)
        console.log(queryInfo.value)
    }

    
    
    onMounted( async () => {
        try {
            const res = await getProducts(queryInfo.value)
            isLoading.value = false
            products.value = res.products
            productsList.value = res.products
            totalPages.value = res.pagination.total_pages
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        
    })
</script>

<style>
    .swal2-popup{
        position: absolute;
        top: 12%;
    }
</style>

