<template>
    <div class="mx-auto p-6 bg-black opacity-90 text-white sticky top-0 z-10 font-bold">
        <nav class="flex items-center justify-between">
            <router-link to="/" class="cursor-pointer flex items-center duration-300 md:hover:text-2xl">
                <img class="w-14 h-10 object-cover" src="https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709969615623.png?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=O9P3brrkqKpvUD6eQ8kOCh6rg3A19ONH5kShkNYDhn87lkb4t7%2BzpbKNmEM9xsUjxAFfvtGbzNjuaC0DiaWrFwL672FcjZ24zh2ogBF8RJ5FoN3Xj7e9VzbLqeWMBXQK264bsZvFSnEx0kar8bVeWKBTTaHp%2BqpeFOBnJy510Z%2BscElS0u%2FgbKXAOTWZI6WbUEl1uDGjiLrgPK8tZra0j%2BQxvozT23lm3QNemUBH4stAyS1w0%2BlKXV72o0P%2FvMvaI%2F8X%2FWf9qWf%2FjmFxOtUjs5AFsXy%2FdvM%2BkdiJhzvAyS09LP4gw6vD5HPse2C7H4axQuyRt2tlY25so1NLAZqvtw%3D%3D" alt="">
                <p>Liquor Store</p>
            </router-link>
            <ul class="flex items-center justify-between">
                <li class="mr-2 cursor-pointer duration-300 md:hover:text-xl">
                    <router-link to="/about">品牌故事</router-link>
                </li>
                <li class="mr-2 cursor-pointer duration-300 md:hover:text-xl">
                    <router-link to="/products">系列酒藏</router-link>
                </li>
                <li class="mr-2 cursor-pointer hover:font-bold">
                    <router-link class="relative" to="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class=" bi bi-cart-plus w-6 h-6 duration-300 hover:scale-150" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                        </svg>
                        <span class="absolute bottom-4 right-[-6px] bg-red-600 px-[4px] rounded-full text-sm">0</span>
                    </router-link>
                </li>
                <!-- <li class="mr-2 cursor-pointer ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search w-5 h-5" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                  </svg>
                </li> -->
            </ul>
        </nav>
    </div>
</template>

