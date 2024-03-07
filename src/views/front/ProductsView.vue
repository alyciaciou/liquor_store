<template>
    <div class="bg-[#070707f0] text-white">
        <NavBar/>

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
                        <button @click="changePage('firstPage', $event)" class="py-2 px-4 border-2 duration-500 hover:bg-white hover:text-black" type="button">
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
    const queryInfo = ref(
        {
            page:1,
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

    watch(selectedType, async (newValue, oldValue) => {
        queryInfo.value.category = newValue
        try {
            const res = await getProducts(queryInfo.value)
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
        try {
            const res = await addTocart(info) 
            console.log(res)
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
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

    // const changePage = () =
    const totalPages = ref(null)
    onMounted( async () => {
        const res = await getProducts(queryInfo.value)
        products.value = res.products
        productsList.value = res.products
        totalPages.value = res.pagination.total_pages
        console.log(res)
    })
</script>

<style>
    .swal2-popup{
        position: absolute;
        top: 12%;
    }
</style>

