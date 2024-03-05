<template>
    <div class="bg-[#070707f0] text-white">
        <NavBar/>

        <header>
            <div class="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://images.unsplash.com/photo-1552844418-3d618ca9af68?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="">
                    <h2 class="text-6xl font-bold mb-4">
                        訂單內容
                    </h2>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 mb-6">
            <div class="flex flex-col justify-center md:flex-row md:justify-between">
                <div class="w-[100%] md:w-[48%]">
                    <h3 class="mb-6 font-bold text-2xl">
                        訂單內容
                    </h3>
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
                        <h3 class="mb-6 font-bold text-2xl">
                            填寫訂購資訊
                            <small class="text-red-500"> ( * 為必填資訊)</small>
                        </h3>
                        <form>
                            <div class="mb-4">
                                <label for="email" class="mb-1">
                                    Email
                                    <span class="text-red-500">*</span>
                                </label>
                                <input v-model="orderInfo.email" id="email" type="email" class="w-full rounded p-1 text-black " placeholder="請輸入 Email" name="email">
                            </div>
                            <div class="mb-4">
                                <label for="name" class="mb-1">
                                    收件人姓名
                                    <span class="text-red-500">*</span>
                                </label>
                                <input v-model="orderInfo.name" id="name" type="text" class="w-full rounded p-1 text-black" placeholder="請輸入姓名" name="姓名">
                            </div>
                            <div class="mb-4">
                                <label for="tel" class="mb-1">
                                    收件人電話
                                    <span class="text-red-500">*</span>
                                </label>
                                <input v-model="orderInfo.tel" id="tel" type="text" class="w-full rounded p-1 text-black" placeholder="請輸入電話" name="電話">
                            </div>
                            <div class="mb-4">
                                <label for="address" class="mb-1">
                                    收件人地址
                                    <span class="text-red-500">*</span>
                                </label>
                                <input v-model="orderInfo.address" id="address" type="text" class="w-full rounded p-1 text-black" placeholder="請輸入地址" name="地址">
                            </div>
                            <div class="mb-4">
                                <label for="message" class="mb-1">
                                    留言
                                </label>
                                <textarea v-model="orderInfo.message" id="message" class="w-full rounded-lg p-1 text-black" cols="30" rows="10"></textarea>
                            </div>
                        </form>
                </div>
            </div>
            
            <div class="py-8 text-center flex flex-col md:flex-row items-center justify-between">
                <router-link to="/cart" class="border-2 p-2 rounded-lg hover:bg-white hover:text-black w-[50%] md:w-[20%] mb-4">
                    上一步
                </router-link>
                <button @click="confirmOrden" type="button" class="border-2 p-2 rounded-lg hover:bg-white hover:text-black w-[50%] md:w-[20%] mb-4">
                    送出訂單
                </button>
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
    import { getCartInfo,  } from '@/apis/cartApi'
    import { submitOrder, getOrder } from '@/apis/order'

    const router = useRouter()
    const info = ref('')

    const orderInfo = ref({
        email:'',
        name:'',
        tel:'',
        address:'',
        message:''
    })

    const confirmOrden = async () => {
        const data = {
            "data": {
                "user": {
                    "name": orderInfo.value.name,
                    "email": orderInfo.value.email,
                    "tel": orderInfo.value.tel,
                    "address": orderInfo.value.address
                },
                "message": orderInfo.value.message
          }
        }   
        console.log(orderInfo.value)
        try {
            const res = await submitOrder(data)
            console.log(res)
            router.push(`/checkout/${res.orderId}`)
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
