<template>
    <div class="bg-[#070707f0] text-white">
        <NavBar/>

        <header>
            <div class="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://images.unsplash.com/photo-1552844418-3d618ca9af68?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="">
                    <h2 class="text-6xl font-bold mb-4">
                        商品細節
                    </h2>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 mb-6">
            <div class="py-8 text-center flex flex-col md:flex-row items-center justify-between">
                <img class="object-cover w-[70%] md:w-[50%]" :src="info.imageUrl" alt="">

                <div class="w-[70%] md:w-[50%]">
                    <p class="text-4xl mb-10 font-bold">{{ info.title }}</p>
                    <p class="mb-2">{{ info.description }}</p>
                    <ul class="mb-2">
                        <li v-for="item in content">{{ item }}</li>
                    </ul>
                    <p class="mb-8"><strong>售價:{{ info.price }}</strong> <del>原價:{{ info.origin_price }}</del></p>

                    <div class="cart-item flex flex-col md:flex-row justify-center md:justify-between items-center border-b pb-4">
                        <div class="w-[60%] md:w-[40%] border-2 rounded-lg mb-4 md:mb-0">
                            <button @click="minusNum" class="hover:bg-white hover:text-black duration-500 font-extrabold text-white py-2 rounded-l-lg w-[20%] text-center" type="button">-</button>
                            <input v-model="currentNum" type="text" class="text-center bg-gray-800  p-2 w-[60%]">
                            <button @click="addNum" class="hover:bg-white hover:text-black duration-500 font-extrabold text-white py-2 rounded-r-lg w-[20%] text-center" type="button">+</button>
                        </div>
                        <button @click="addProduct" type="button" class="w-[60%] md:w-[40%] item-name border-2 p-2 rounded-lg duration-500 hover:bg-white hover:text-black">
                            加入購物車
                        </button>
                    </div>

        
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

    import { useRoute } from 'vue-router'
    import { ref, onMounted } from 'vue'

    //api
    import { getProductInfo } from '@/apis/productApi'
    import { addTocart } from '@/apis/cartApi'

    import Swal from 'sweetalert2'

    const route = useRoute()

    const info = ref('')
    const content = ref('')
    const currentNum = ref(1)

    const addNum = () => {
        currentNum.value +=1
    }

    const minusNum = () => {
        currentNum.value === 1 ? null : currentNum.value -=1
    }

    const addProduct = async () => {
        const info = {
            data:{
                product_id: route.params.id,
                qty: currentNum.value
            }
        }
        console.log(info)
        try {
            const res = await addTocart(info) 
            console.log(res)
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                background:'#070707f0',
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
        try {
            const res = await getProductInfo(route.params.id)
            info.value = res.product
            content.value = info.value.content.split(';')
        } catch (error) {
            console.log(error)
        }
        
    })

</script>
