<template>
    <div class="bg-[#070707f0] text-white">
        <NavBar/>
        <div v-if="isLoading" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <img class="h-16 w-16" src="/Rolling-1s-150px.gif" alt="loading">
        </div>
        <header>
            <div class="h-[500px] bg-cover bg-center flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709969238747.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cf7R7FTjO7bjanZME5zI21bLcinUDFk4jR8x%2FuPEbI63T6Vk2nejIyt2IjdtBMmKDVp2kBT9ICTQMnSTYyikMpEp1tYJrWnFbsfSknDt6hGfQph64zdLsIhARPbA89GRE3DCVrRinllDW3VkEPA5IWgw8NGA07gqyQoTNWfW1FK9gXRLcYeTwrQzCrlxAZd7PLzFnBuChl3EJaYqhulMsgJ3wVbC6FCk7PRGPB143IXpiPrk2ugIcU3paDvjfz65R56zFna9YYzPPGCEEEY1v%2Bpk6yr2fws9nX2binBwjSFlJNP4IbEHxP3WagXndgbUDF3cxBx6%2Fulhz0u5Wu0QOQ%3D%3D );">
                <div class="">
                    <h2 class="text-6xl font-bold mb-4">
                        品牌故事
                    </h2>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 mb-6">
              <div class="text-center py-8">
                <h3 class="text-4xl mb-10 font-bold">關於我們</h3>
                <ul>
                  <li class="flex-col items-center justify-center  md:flex md:flex-row  md:justify-between mb-6">
                    <img @load="handleImg" class="h-[400px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709969259688.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=Ph9Frrcz6p8rNj9kv7cMMXN2CSZWJNdalYW3lOuA9OCnJTHvg1wPYIplHiYGZqRhI4LQKNOvfdiwvN5ZQSRuG7gGa8KyLCd%2FAq9Rhu%2FCXFQF6ubzqP8MmmtRs5bF3nsHQZCLuUWcUhmMbBPBCNWTbfrVSeZdkIN%2BP94Cjz5x1f4KsA49cZwASwSsCbzUFHNN7Y5mXyqnEe5LivZSwsZynTPxOO2ZhVQW8kxhzR5KEEZUlvgZ90uHKQIQCKvnH6WlAHdaqs7oVDj94eW%2BRwoyp4zrt2Iw2S%2BkDYsrIzpXG4itrQmrtZB0MWHIiy6gEJCvRCEmUilSA4EtwFUumMNVWA%3D%3D" alt="">
                    <div class="md:w-[48%] w-full inline-block leading-relaxed mt-4 md:mt-0">
                      <h4 class="mb-2 text-xl">使命</h4>
                      <p>Liquor Store的使命是將世界各地最精彩的葡萄酒和烈酒帶給您的門前。透過精心挑選的品牌和風格多樣的產品，我們希望成為您品酒旅程的良伴，無論是探索新的口味還是深入了解酒類文化，我們都在這裡為您提供支持和專業建議。</p>
                    </div>
                  </li>
                  <li class="flex-col items-center justify-center  md:flex md:flex-row-reverse  md:justify-between mb-6">
                    <img class="h-[400px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709969285389.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=P5uXwvbcK3SzP7d%2Bw%2F6p18wbrdM%2FfmKs2Qd1u2agZp3xPz0XRgXTL%2BI%2FT4uDOdxEGNXuaXbRvR4nl%2F5pErENsTCbXJ5bMv0xa1oQxru9GkUSqXLiMtttt%2F5uZ5GmXPzgsAi4T%2BXTvt9bOd%2FBg8NagFgd8Yxq8LG48J7I5JUxLselLVaz8gWoW6x4SzeUTNluaH%2FpeS260j7PbrfDgTmZl2yUScv%2BmQYkCcle9TT6GOCLYwGTJIEwrz0YiZ8Ek8X62jVjDa8rOYonbrSftXEb56G0WxNSXjME%2BGaE3IpcypTN3LTU2AtElvj4IHxT3ndLECj8YnJM0PGcrbnnuOmw4Q%3D%3D" alt="">
                    <div class="md:w-[48%] w-full inline-block leading-relaxed mt-4 md:mt-0">
                      <h4 class="mb-2 text-xl">品質</h4>
                      <p>Liquor Store引以為傲的不僅是產品，更是它們背後的故事和品質。Liquor Store的酒款來自世界各地最優秀的生產者。我們與這些生產者建立了緊密的合作關係，確保每一瓶酒都代表著最高的品質標準和獨特的風格。無論您是尋找一瓶特別的禮物，還是想要為自己的私人收藏添置新的寶藏，我們的產品都能滿足您的需求。</p>
                    </div>
                  </li>
                  <li class="flex-col items-center justify-center  md:flex md:flex-row  md:justify-between mb-6">
                    <img class="h-[400px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709969306190.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cwvkM7M4Nr1kHY6upbB7hWEEn4YzMKR4qC2JLpYFExsVm9joGC5Pvzt%2Fwv8dym4gCb8h2rL9qM%2BynIR%2FYZU9%2BScIy49q3uctQNBMHm0IZt%2FzDgVxiPZKRZ4X9TZFroyjDWkrDFBaZcUwlvefGObImrwA7TAOvaW%2Fe%2BGjgvdZa1QRKdO1R4FnxGl4OQq6d86B6lmMfZy7jpBoTxdiN8qH50omCZDRYu07aB2Wk2ivIds%2B%2FCiAD4o7MCuE0InmWwI0w1MME9NTSt4iGzn%2BRdecdo1wWUgADh5F%2BX1x%2FCjP8Ahx4cbSNwzx%2Bu7eKE8Cj6fCff0lcCe5B3LUHG8GLoT47w%3D%3D" alt="">
                    <div class="md:w-[48%] w-full inline-block leading-relaxed mt-4 md:mt-0">
                      <h4 class="mb-2 text-xl">承諾</h4>
                      <p>作為您信任的選擇，Liquor Store承諾為您提供卓越的客戶服務和無與倫比的購物體驗。無論您對酒類知識的了解程度如何，我們的團隊都將竭誠為您提供支持和建議。我們也非常重視您的意見和反饋，因為這將幫助我們不斷改進，成為您的首選酒類購物平台。感謝您選擇與我們一起探索美好的葡萄酒和烈酒世界！</p>
                    </div>
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

    import { ref } from 'vue'

    const isLoading = ref(true)
    const handleImg = () => {
      isLoading.value = false
    }
</script>