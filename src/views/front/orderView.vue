<template>
    <div class="bg-[#070707f0] text-white">
        <NavBar/>

        <header>
            <div class="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://images.unsplash.com/photo-1552844418-3d618ca9af68?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="">
                    <p class="text-6xl font-bold mb-4">
                        購物車
                    </p>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 mb-6">
            <div class="flex flex-col justify-center items-center md:flex-row md:justify-between">
                <div class="w-[100%] md:w-[48%]">
                    <p>訂單內容</p>
                    <table class="border-t-2 w-full">
                        <thead class="bg-[#272626e8] border-b-2 text-center">
                            <tr>
                                <th class="p-4"></th>
                                <th class="p-4">品項</th>
                                <th class="p-4">數量</th>
                                <th class="p-4">價格</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr class="border-b-2" v-for="(item, index) in info.carts">
                                <td class="w-[30%]">
                                    <img :src="item.product.imageUrl" alt="">
                                </td>
                                <td class="w-[30%]">{{ item.product.title }}</td>
                                <td class="w-[20%]">{{ item.qty }}</td>
                                <td class="w-[20%]">{{ item.total }}</td>
                            </tr>
                        </tbody>
                        <tfoot class="text-right">
                            <tr>
                                <td colspan="4" class="p-4 text-2xl"><strong>總計：</strong>{{ info. final_total}}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>

                <div class="w-[100%] md:w-[48%]">
                    <p>訂購人資訊</p>
                    <table class="border-t-2 w-full">
                        <thead class="bg-[#272626e8] border-b-2 text-center">
                            <tr>
                                <th class="p-4"></th>
                                <th class="p-4">品項</th>
                                <th class="p-4">數量</th>
                                <th class="p-4">價格</th>
                            </tr>
                        </thead>
                        <tbody class="text-center">
                            <tr class="border-b-2" v-for="(item, index) in info.carts">
                                <td class="w-[14%]">
                                    <img :src="item.product.imageUrl" alt="">
                                </td>
                                <td class="w-[14%]">{{ item.product.title }}</td>
                                <td class="">{{ item.qty }}</td>
                                <td class="w-[10%]">{{ item.total }}</td>
                            </tr>
                        </tbody>
                        <tfoot class="text-right">
                            <tr>
                                <td colspan="4" class="p-4 text-2xl"><strong>總計：</strong>{{ info. final_total}}</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
            
            <div class="py-8 text-center flex flex-col md:flex-row items-center justify-between">
                <router-link to="/cart" class="border-2 p-2 rounded-lg hover:bg-white hover:text-black w-[50%] md:w-[20%] mb-4">
                    上一步
                </router-link>
                <router-link to="/order" class="border-2 p-2 rounded-lg hover:bg-white hover:text-black w-[50%] md:w-[20%] mb-4">
                    下一步
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
