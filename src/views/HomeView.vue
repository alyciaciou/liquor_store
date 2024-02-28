<template>
  <div class="bg-black">
    <div class="mx-auto p-6 bg-black opacity-90 text-white sticky top-0 z-10">
        <nav class="flex items-center justify-between">
          <a>首頁</a>
          <ul class="flex items-center justify-between">
            <li class="mr-1">商品列表</li>
            <li class="mr-1">購物車</li>
            <li class="mr-1">搜尋</li>
          </ul>
        </nav>
      </div>
    <header>
      
      <div class="h-screen bg-cover bg-center  text-white flex flex-col items-center justify-center text-center text-6xl" style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709103904637.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WIWlX1Ve23%2F8FCP%2BJR1SjtxZAmbkR1%2FGY04vgllWEU1vOxmRb1J6w%2FIUhRN9z7ed%2BSBejwk%2FkPZvsMKAIDzWDN6xqvA3PPp2doF1Uywtc5y%2B1ywUyk2fDBsx8RC2sS058mWBFep1UfFW%2FtF0BLxKtZy8Bsu5fG0LEIBiEShEATVc4Ht5UVCgHUoHtz6MufZvtA5Rsp95bMt5XtSizoHPXiGjUMqaZdqxGhAIuQYMlvWaN0Qt7A%2BCplRFxwYuq%2FC%2F3y8jRm7u7D8MtY5qFrWnaW2C0InH1BegZuabrek%2F6vzYOIV9PEFxNhLlYpclp%2BlTpOCxm%2BXVuZ0OmZmxJHArfQ%3D%3D);">
        <div class="">
          <h1>品味生活 享受人生</h1>
          <a>more</a>
        </div>
      
      </div>
    </header>
    
    <main class="container mx-auto p-6">
      <section class="my-6">
        <div class=" text-white text-center">
        <h2 class="text-4xl mb-4">系列商品</h2>

        <swiper :navigation="true" :modules="navigation" class="mySwiper" :slidesPerView="4" :spaceBetween="40" :style="{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff','--swiper-pagination-bullet-inactive-color': '#fff', '--swiper-pagination-bullet-inactive-opacity':'0.5'}" 
        :pagination="{ clickable: true}" :autoplay="{delay: 5000, disableOnInteraction: false}"
        >
          <swiper-slide v-for="item in liquorList" :key="item.type" class="bg-zinc-900">
            <img :src="item.url" alt="">
            {{item.type}}
          </swiper-slide>
        </swiper>
        </div>
      </section>

      <section class="my-6">
        <div class="text-white text-center">
        <h2 class="text-4xl mb-4">系列商品</h2>
        </div>
      </section>
      
    </main>

    <footer class="p-6 bg-[#242424f0] text-white">
      321
    </footer>
    
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css';

  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  import { Navigation, Autoplay, Pagination } from 'swiper/modules'

  const navigation  = [Navigation, Autoplay, Pagination]

  const liquorList = [
    {type: '威士忌', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '葡萄酒', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '香檳', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '氣泡酒', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '梅酒', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '利口', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '蘭姆', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '琴酒', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '白蘭地', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '高粱', url: 'https://plus.unsplash.com/premium_photo-1695224389396-0cb2047bd8a7?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
  ]

</script>

<style>
  /* .swiper-button-next{
    color: brown;
  }
  .swiper-button-prev{
    color: brown;
  } */
</style>
