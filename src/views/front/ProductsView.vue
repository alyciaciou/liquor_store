<template>
    <div class="bg-[#070707f0] text-white">
        <NavBar/>
        <div v-if="isLoading" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <img class="h-16 w-16" src="/Rolling-1s-150px.gif" alt="loading">
        </div>
        <header>
            <div class="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709969444587.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=TLcowNbSLr6wkPjSQ8rl7qmeXsDLtUB6AAKGVgCzmva2k2StqABYDh3cNedzze4Fw%2F%2F%2FdHT19wuZUL9h1V9gNfrZAiWSgPnulPM06NC7hpMLx3RLFW9rK7QislEBFqDWE%2FBZoaJsiL6hXdRGVAM6TfK%2FJ%2BKB%2BnnXtnwZuxvKM9bF1YBImix%2BDkBRknyvoKMuDWTvg1zj4YpMV1lrnp5QWhI0gNGx6Z6mljjDaW6yHRdq8g%2BoZJxiQlU60MRfvalsrdK4f9l6aSAY6qwcXbMlBDvUfmDKfLWRHinNaWmnQZCQA7grV3kHpH0%2BuKZehQNEj%2FLo7%2BSdu0m6cuR8MTiNLg%3D%3D);">
                <div class="">
                    <h2 class="text-6xl font-bold mb-4">
                        系列酒藏
                    </h2>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 mb-6">
            <ul class="py-8 text-center flex items-center justify-center w-full">
                <li class="w-[40%] ">
                    <select @change="changeType" class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option :selected="selectedType === item" v-for="item in type" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
                <li class="w-[40%] ">
                    <select @change="changeBrand" class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option selected value="全部">全部</option>
                        <option v-for="item in selectType[selectedType]" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
            </ul>

            <div class="py-8 text-center flex items-center justify-between w-full flex-col md:flex md:flex-row flex-wrap">
                <div v-for="item in productsList" :key="item.id" class="md:w-[30%] lg:w-[24%] w-[80%] mb-6">
                    <router-link :to="{ path: `/product/${ item.id }`, query: { type: item.category }}">
                        <div class="flex flex-col items-center justify-between p-2 bg-[#272626e8] rounded-lg duration-500 hover:bg-[#535252ab] hover:opacity-75 h-[400px] ">
                            <img class="object-cover rounded-lg h-[200px] w-[150px]" :src="item.imageUrl" alt="">
                            <div>
                                <p class="p-1">{{item.title}}</p>
                                <p class="p-1">售價：NT$.{{ item.price }}  <del class="text-sm ml-2">原價：NT$.{{ item.origin_price }}</del></p>
                            </div>
                            <div class="flex items-center justify-between">
                                <router-link :to="{ path: `/product/${ item.id }`, query: { type: item.category }}" class="block border-2  p-2 rounded-lg cursor-pointer duration-500 hover:bg-white hover:text-black">
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

            <div class="pagination py-8">
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
                        <button @click="changePage('currentPage', page)" class="py-2 px-4 border-2 duration-500 hover:bg-white hover:text-black" type="button" :class="{'bg-stone-300':clickedPage === page, 'text-black':clickedPage === page}">
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
    import { useRoute, useRouter } from 'vue-router'
    import { useCartNumStore } from '@/stores/counter'
    import { useAllProductsStore } from '@/stores/getProducts'

    //sweetalert2
    import Swal from 'sweetalert2'

    const route = useRoute()
    const router = useRouter()
    const cartStore = useCartNumStore()
    const productsStore = useAllProductsStore()
    
    const isLoading = ref(true)
    const products = ref(null)
    const productsList = ref(null)
    const selectType = {
        '威士忌':['麥卡倫', '蘇格登', '亞伯樂', '布萊迪'], 
        '葡萄酒':['漢彌根', '樂花園', '富飛'], 
        '香檳':['酩悅', '路易侯德爾', '凱歌', '保羅傑', '杜瓦樂華'], 
        '氣泡酒':['羅卡酒莊', 'TOSO', '米娜多'], 
        '利口':['安丘瑞耶斯', '吉拿', '芙內', '義大利庫司', '貝禮詩', 'MB'], 
        '白蘭地':['皮耶費朗', '軒尼詩'], 
    }
    
    const type = ['威士忌', '葡萄酒', '香檳', '氣泡酒', '利口', '白蘭地' ]
    const selectedType = ref('')
    const page = ref(1)
    const queryInfo = ref(
        {
            page:page.value,
            category:selectedType.value
        }
    )
    const changeType = (e) => {
        selectedType.value = e.target.value
        router.replace({ path: '/products', query: { type: `${e.target.value}` } })
    }

    const brand = ref('全部')
    const clickedPage = ref(1)
    const totalPages = ref(null)
    const changeBrand = async (e) => {
        brand.value = e.target.value
        if(e.target.value === '全部'){
            if(page.value === 1){
                await queryProducts()
            }else{
                page.value = 1
                clickedPage.value = page.value
            }
            
        } else {
            const data = productsStore.allProducts.filter((item)=>{
                return item.brand === e.target.value
            })
            productsList.value = data
            totalPages.value = Math.ceil(data.length / 10)
            clickedPage.value = 1
        }
    }

    const queryProducts = async () => {
        isLoading.value = true
        try {
            const res = await getProducts(queryInfo.value)
            isLoading.value = false
            products.value = res.products
            productsList.value = res.products
            totalPages.value = res.pagination.total_pages
        } catch (error) {
            console.log(error)
        }
    }

    watch(page, async (newPage) => {
        queryInfo.value.page = newPage
        await queryProducts()
        window.scrollTo({top:500})
        if(brand.value !== '全部'){
            productsList.value = products.value.filter((item)=>{
                return item.brand === brand.value
            })
        }else {
            productsList.value = products.value
        }
    })

    watch(selectedType, async (newSelectedType) => {
        queryInfo.value.category = newSelectedType
        queryInfo.value.page = 1
        await queryProducts()
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
            isLoading.value = false
            cartStore.getCartNum()
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
    
    
    const changePage = async (type, currentPage) => {
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
        clickedPage.value = page.value
    }

    router.beforeEach((to, from, next) => {
        if (to.path === from.path && to.query.type !== from.query.type) {
            selectedType.value = to.query.type
            queryInfo.value.category = selectedType.value
            next()
        }else {
            next()
        }
    })

    onMounted( async () => {
        selectedType.value = route.query.type 
        queryInfo.value.category = selectedType.value
        try {
            const res = await getProducts(queryInfo.value)
            isLoading.value = false
            products.value = res.products
            productsList.value = res.products
            totalPages.value = res.pagination.total_pages
        } catch (error) {
            console.log(error)
        }

        try {
            await productsStore.getProducts()
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

