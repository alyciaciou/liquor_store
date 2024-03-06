<template>
    <div class="bg-[#070707f0] text-white">
        <NavBar/>

        <header>
            <div class="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://images.unsplash.com/photo-1552844418-3d618ca9af68?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="">
                    <h2 class="text-6xl font-bold mb-4">
                        購物車
                    </h2>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 mb-6">
            <table class="border-t-2 w-full py-8">
                <thead class="bg-[#272626e8] border-b-2 text-center">
                    <tr>
                        <th class="p-4"></th>
                        <th class="p-4">品項</th>
                        <th class="p-4">單價</th>
                        <th class="p-4">數量</th>
                        <th class="p-4">小計</th>
                        <th class="p-4"></th>
                    </tr>
                </thead>
                <tbody class="text-center">
                    <tr class="border-b-2" v-for="(item, index) in info.carts">
                        <td class="w-[14%]">
                            <img :src="item.product.imageUrl" alt="">
                        </td>
                        <td class="w-[14%]">{{ item.product.title }}</td>
                        <td class="w-[14%]">{{ item.product.price }}</td>
                        <td class="">
                            <div class="w-[80%] border-2 rounded-lg mb-4 md:mb-0">
                                <button :disabled="item.qty === 1" @click="minusNum(item)" class="duration-500 hover:bg-white hover:text-black font-extrabold text-white py-2 rounded-l-lg w-[20%] text-center" type="button">-</button>
                                <input :value="item.qty" type="text" class=" text-center bg-gray-800  p-2 w-[60%]">
                                <button @click="addNum(item)" class="duration-500 hover:bg-white hover:text-black font-extrabold text-white py-2 rounded-r-lg w-[20%] text-center" type="button">+</button>
                            </div>
                        </td>
                        <td class="w-[10%]">{{ item.total }}</td>
                        <td @click="deleteItem(item.id)" class="w-[10%]">垃圾桶</td>
                    </tr>
                </tbody>
                <tfoot class="text-right">
                    <tr>
                        <td colspan="6" class="p-6 text-3xl"><strong>總計：</strong>{{ info. final_total}}</td>
                    </tr>
                </tfoot>
            </table>
                
            <div class="py-8 text-center flex flex-col md:flex-row items-center justify-between">
                <router-link to="/products" class="border-2 p-2 rounded-lg duration-500 hover:bg-white hover:text-black w-[50%] md:w-[20%] mb-4">
                    繼續購物
                </router-link>
                <router-link to="/order" class="border-2 p-2 rounded-lg duration-500 hover:bg-white hover:text-black w-[50%] md:w-[20%] mb-4">
                    下一步
                </router-link>
            </div>

            <div class="py-8">
                <p class="p-2">目前沒有商品</p>
                <router-link to="/products" class="border-2 p-2 rounded-lg duration-500 hover:bg-white hover:text-black w-[50%] md:w-[20%] mb-4">
                    前往購物
                </router-link>
            </div>
        </main>
        
        <FooTer/>
    </div>
</template>


<script setup>
    //components
    import NavBar from '@/components/NavBar.vue'
    import FooTer from '@/components/FooTer.vue'

    import { useRouter } from 'vue-router'
    import { ref, onMounted } from 'vue'

    //api
    import { getCartInfo, updateCartItem, deleteCartItem } from '@/apis/cartApi'

    import Swal from 'sweetalert2'

    const router = useRouter()

    const info = ref('')

    const addNum = async (item) => {
        item['qty'] +=1
        const data = {
            "data": {
                "product_id": item['product_id'],
                "qty": item['qty']
            }
        }

        try {
            const res = await updateCartItem(item['id'], data)
            console.log(res)
            const res2 = await getCartInfo()
            info.value = res2.data
        } catch (error) {
            console.log(item)
        }
    }

    const minusNum = async (item) => {
        item['qty'] === 1 ? null : item['qty'] -=1
        const data = {
            "data": {
                "product_id": item['product_id'],
                "qty": item['qty']
            }
        }

        try {
            const res = await updateCartItem(item['id'], data)
            console.log(res)
            const res2 = await getCartInfo()
            info.value = res2.data
        } catch (error) {
            console.log(error)
        }
    }

    const deleteItem = async (cartId) => {
        try {
            const res = await deleteCartItem(cartId)
            console.log(res)
            const res2 = await getCartInfo()
            info.value = res2.data
        } catch (error) {
            console.log(error)
        }
        
    }


    onMounted( async () => {
        try {
            const res = await getCartInfo()
            console.log(res)
            info.value = res.data
        } catch (error) {
            console.log(error)
        }
        
    })

</script>
