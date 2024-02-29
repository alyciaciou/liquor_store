<template>
  <div class="bg-black">
    <div class="mx-auto p-6 bg-black opacity-90 text-white sticky top-0 z-10">
        <nav class="flex items-center justify-between">
          <a class="cursor-pointer">
            <img class="w-14 h-10 object-cover" src="/wedding-1.1s-200px.png" alt="">
          </a>
          <ul class="flex items-center justify-between">
            <li class="mr-2 cursor-pointer">商品列表</li>
            <li class="mr-2 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg"  fill="currentColor" class="bi bi-cart-plus w-6 h-6" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>
            </li>
            <li class="mr-2 cursor-pointer ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search w-5 h-5" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
              </svg>
            </li>
          </ul>
        </nav>
      </div>
    <header>
      
      <div class="h-screen bg-cover bg-center  text-white flex flex-col items-center justify-center text-center" style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709103904637.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WIWlX1Ve23%2F8FCP%2BJR1SjtxZAmbkR1%2FGY04vgllWEU1vOxmRb1J6w%2FIUhRN9z7ed%2BSBejwk%2FkPZvsMKAIDzWDN6xqvA3PPp2doF1Uywtc5y%2B1ywUyk2fDBsx8RC2sS058mWBFep1UfFW%2FtF0BLxKtZy8Bsu5fG0LEIBiEShEATVc4Ht5UVCgHUoHtz6MufZvtA5Rsp95bMt5XtSizoHPXiGjUMqaZdqxGhAIuQYMlvWaN0Qt7A%2BCplRFxwYuq%2FC%2F3y8jRm7u7D8MtY5qFrWnaW2C0InH1BegZuabrek%2F6vzYOIV9PEFxNhLlYpclp%2BlTpOCxm%2BXVuZ0OmZmxJHArfQ%3D%3D);">
        <div class="">
          <h1 class="text-6xl font-bold mb-4">
            <span>品味生活</span>
            <span>享受人生</span>
          </h1>
          <a class="text-3xl border-2 p-1 rounded hover:bg-slate-100 hover:text-black cursor-pointer">前往商品頁</a>
        </div>
      
      </div>
    </header>
    
    <main class="container mx-auto p-6 my-6 bg-[#292828f0]">
      <section class="py-8">
        <div class=" text-white text-center">
        <h2 class="text-4xl mb-10">系列商品</h2>

        <swiper :navigation="true" :modules="navigation" class="mySwiper" :slidesPerView="4" :spaceBetween="20" :style="{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff','--swiper-pagination-bullet-inactive-color': '#fff', '--swiper-pagination-bullet-inactive-opacity':'0.5'}" 
        :pagination="{ clickable: true}" :autoplay="{delay: 5000, disableOnInteraction: false}"
        >
          <swiper-slide v-for="item in liquorList" :key="item.type" class="bg-zinc-900 rounded-lg hover:opacity-65 cursor-pointer">
            <img class="object-cover rounded-t-lg" :src="item.url" alt="">
            <p class="p-2">{{item.type}}</p>
          </swiper-slide>
        </swiper>
        </div>
      </section>

      <section class="py-8">
        <div class="text-white text-center">
          <h2 class="text-4xl mb-10">釀造過程</h2>
          <ul>
            <li class="flex-col items-center justify-center  md:flex md:flex-row  md:justify-between mb-6">
              <img class="h-[500px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://images.unsplash.com/photo-1578911373434-0cb395d2cbfb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
              <div class="md:w-[48%] w-full inline-block">
                <h4>葡萄酒陳釀</h4>
                <ul class="text-justify ">
                  <li>紅葡萄酒：通常是將葡萄皮和果汁一起發酵，這樣可以提取出色素和單寧，使酒具有濃郁的口感和顏色。</li>
                  <li>白葡萄酒：通常是只用果汁發酵，不加入葡萄皮，使酒保持清澈的顏色和輕盈的口感。</li>
                  <li>氣泡酒：通常是在發酵過程中添加二氧化碳，或者將已經發酵的酒再次進行二次發酵，使氣泡形成。</li>
                  <li>甜酒：通常是在發酵過程中停止發酵，使酒中保留一部分的糖分，使其具有甜味。</li>
                </ul>
              </div>
            </li>
            <li class="flex-col items-center justify-center  md:flex md:flex-row-reverse  md:justify-between mb-6">
              <img class="h-[500px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://images.unsplash.com/photo-1561906814-23da9a8bfee0?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
              <div class="md:w-[48%] w-full inline-block">
                <h4>木桶陳釀</h4>
                <ul class="text-justify ">
                  <li>酒液與木桶的互動：酒液在木桶中陳釀的過程中，會與木頭互相作用。酒液會透過木頭的微孔吸收木頭中的化合物，同時也會釋放酒液中的成分到木桶中。</li>
                  <li>風味的提取：木桶陳釀可以讓酒液吸收木頭的香氣、焦糖、香料等成分，使得酒液更加豐富和複雜。</li>
                  <li>氧化和蒸發：木桶是透氧的，所以酒液在陳釀過程中會與空氣接觸，進行氧化，使酒液的風味變化。同時，酒液也會透過木桶的微孔慢慢蒸發，這被稱為“天使之份”。</li>
                </ul>
              </div>
            </li>
            <li class="flex-col items-center justify-center  md:flex md:flex-row  md:justify-between mb-6">
              <img class="h-[500px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://images.unsplash.com/photo-1572095755816-4a48d680f864?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
              <div class="md:w-[48%] w-full inline-block">
                <h4>不同酒款陳釀</h4>
                <ul class="text-justify ">
                  <li>威士忌：橡木桶陳釀是威士忌酒最重要的步驟之一，橡木桶能夠賦予威士忌酒的香氣、木質味、香料味等。</li>
                  <li>白蘭地：陳釀在橡木桶中可以使白蘭地酒顏色變深，質地更加柔軟，並帶來橡木桶的香氣和味道。</li>
                  <li>蘭姆：蘭姆酒通常會在木桶中陳釀一段時間，木桶的風味會讓蘭姆酒更加柔順和複雜。</li>
                  <li>琴酒：琴酒的陳釀通常在法國橡木桶中進行，賦予琴酒獨特的木質和香料風味。</li>
                  <li>利口酒：利口酒的陳釀可以增加甜味和香氣，通常使用橡木桶或其他香料桶進行陳釀。</li>
                  <li>梅酒：梅酒的陳釀可以增添梅子的香氣和風味，通常使用橡木桶或陶罐進行陳釀。</li>
                  <li>氣泡酒和香檳：氣泡酒和香檳的陳釀會在瓶內進行，使酒液與酵母和酒渣接觸，獲得更多的複雜性和風味。</li>
                </ul>
              </div>
            </li>
          </ul>
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
    {type: '威士忌', url: 'https://images.unsplash.com/photo-1522877341927-e5dc72935d29?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '葡萄酒', url: 'https://images.unsplash.com/photo-1630369160812-26c7604cbd8c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '香檳', url: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '氣泡酒', url: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '利口', url: 'https://images.unsplash.com/photo-1520880205996-43e8ed079873?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '蘭姆', url: 'https://images.unsplash.com/photo-1514359652734-6205dd477a1e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '琴酒', url: 'https://images.unsplash.com/photo-1578664182930-39d6469c49bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '白蘭地', url: 'https://images.unsplash.com/photo-1500217052183-bc01eee1a74e?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {type: '梅酒', url: 'https://images.unsplash.com/photo-1575023782549-62ca0d244b39?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
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
