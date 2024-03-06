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
                <li class="w-[33%] ">
                    <select class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option v-for="item in selectType" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
                <li class="w-[33%] ">
                    <select class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option v-for="item in selectType" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
                <li class="w-[33%] ">
                    <select class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option v-for="item in selectType" :key="item" :value="item">{{ item }}</option>
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
                                <router-link :to="`/product/${ item.id }`" class="border-2  p-2 rounded-lg cursor-pointer duration-500 hover:bg-white hover:text-black">
                                    瞭解更多
                                </router-link>
                                <button @click.prevent="addProduct(item.id)" type="button" class="border-2 p-2 rounded-lg cursor-pointer duration-500 hover:bg-white hover:text-black">
                                    加入購物車
                                </button>
                            </div>
                        </div>
                    </router-link>
                </div>
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

    import { onMounted, ref } from 'vue'

    import Swal from 'sweetalert2'

    const selectType = ['威士忌', '葡萄酒', '香檳', '氣泡酒', '利口', '蘭姆', '琴酒', '白蘭地', '梅酒', ]
    
    const productsList = ref(null)

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
    onMounted( async () => {
        const res = await getProducts()
        productsList.value = res.products
        console.log(res)
    })
</script>

<style>
    .swal2-popup{
        position: absolute;
        top: 12%;
    }
</style>

