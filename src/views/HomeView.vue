<template>
  <div class="bg-[#070707f0] text-white">
    <div v-if="isLoading" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <img class="h-16 w-16" src="/Rolling-1s-150px.gif" alt="loading">
    </div>
    <NavBar/>
    <header>
      <div class="relative flex flex-col items-center justify-center text-center opacity-85">
        <img @load="handleImg" class="h-screen w-full object-cover object-center" src="https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709103904637.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=WIWlX1Ve23%2F8FCP%2BJR1SjtxZAmbkR1%2FGY04vgllWEU1vOxmRb1J6w%2FIUhRN9z7ed%2BSBejwk%2FkPZvsMKAIDzWDN6xqvA3PPp2doF1Uywtc5y%2B1ywUyk2fDBsx8RC2sS058mWBFep1UfFW%2FtF0BLxKtZy8Bsu5fG0LEIBiEShEATVc4Ht5UVCgHUoHtz6MufZvtA5Rsp95bMt5XtSizoHPXiGjUMqaZdqxGhAIuQYMlvWaN0Qt7A%2BCplRFxwYuq%2FC%2F3y8jRm7u7D8MtY5qFrWnaW2C0InH1BegZuabrek%2F6vzYOIV9PEFxNhLlYpclp%2BlTpOCxm%2BXVuZ0OmZmxJHArfQ%3D%3D">
        <div class="absolute">
          <h1 class="text-6xl font-bold mb-4 leading-relaxed">
            <p class="pr-20">品味生活</p>
            <p class="pl-20">享受人生</p>
          </h1>
          <router-link :to="{ path: '/products', query: { type: '威士忌' }}" class="text-3xl border-2 p-1 rounded duration-500 hover:bg-slate-100 hover:text-black cursor-pointer">
            立即前往商品頁 
          </router-link>
        </div>
      </div>
    </header>
    
    <main class="container mx-auto p-6 md:p-24 mb-6">
      <section class="py-12">
        <div class=" text-center">
          <h3 class="text-4xl mb-10 font-bold">Liquor Store</h3>
          <p class="leading-relaxed">
            尋找美酒的最佳去處。從葡萄酒到威士忌，我們提供多樣選擇。品酒指南和專業建議，讓您品味生活的美好。讓我們一起品味生活的美好，一杯酒、一段故事。
          </p>
        </div>
      </section>

      <section class="py-12">
        <div class="text-center">
          <h3 class="text-4xl mb-10 font-bold ">系列商品</h3>

          <swiper :navigation="true" :modules="navigation" class="mySwiper" :slidesPerView="4" :spaceBetween="20" :style="{'--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff','--swiper-pagination-bullet-inactive-color': '#fff', '--swiper-pagination-bullet-inactive-opacity':'0.5', '--swiper-navigation-size': '50px'}" 
          :pagination="{ clickable: true}" :autoplay="{delay: 5000, disableOnInteraction: false}"
          >
            <swiper-slide v-for="item in liquorList" :key="item.type">
              <router-link :to="{ path: '/products', query: { type: item.type }}" class="duration-500 hover:text-lg bg-zinc-900 rounded-lg  hover:opacity-65 cursor-pointer">
                <img class="object-cover rounded-t-lg" :src="item.url" :alt="item.type">
                <p class="p-2 bg-[#535252f2] rounded-b-lg">{{ item.type }}</p>
              </router-link>
            </swiper-slide>
          </swiper>
        </div>
      </section>

      <section class="py-12">
        <div class="text-center">
          <h3 class="text-4xl mb-10 font-bold">品酒指南</h3>
          <ul class="leading-relaxed list-decimal list-inside">
            <li>
              觀察外觀：倒入杯中，觀察酒的色澤，從深到淺可以看出酒的年份和成熟度。傾斜杯子，觀察酒液在杯中的黏度和顏色，濃厚度和透明度可暗示著酒的口感。
            </li>
            <li>
              嗅覺：輕輕搖晃杯中酒，讓酒液與空氣接觸，讓香氣釋放。用鼻子深深吸一口氣，辨識出酒中的果香、香料、木質氣息等。
            </li>
            <li>
              品嘗口感：將酒慢慢品嘗，感受它在口中的質地和結構。注意酒的酸度、甜度、單寧等要素，這些將影響您的感官體驗。
            </li>
            <li>
              餘韻：品嘗完後，感受酒的餘韻，它能告訴您酒的品質和層次感。
            </li>
            <li>
              配對美食：最後，試著將酒與不同的美食搭配，發現它們的化學反應和互相提升的風味。
            </li>
          </ul>
        </div>
      </section>

      <section class="py-12">
        <div class="text-center">
          <h3 class="text-4xl mb-10 font-bold">熱銷系列</h3>
          <ul class=" flex flex-row items-center justify-between flex-wrap">
            <li v-for="item in liquorList.slice(0,4)" :key="item.type" class="hover:opacity-65 duration-500 hover:text-lg cursor-pointer md:w-[24%] w-[46%] mb-6">
              <router-link :to="{ path: '/products', query: { type: item.type }}">
                <img class="object-cover rounded-t-lg  w-full" :src="item.url" :alt="item.type">
                <p class="p-2 bg-[#535252f2] rounded-b-lg">{{ item.type }}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </section>

      <section class="py-12">
        <div class="text-center">
          <h3 class="text-4xl mb-10 font-bold">釀造過程</h3>
          <ul>
            <li class="flex-col items-center justify-center  md:flex md:flex-row  md:justify-between mb-12">
              <img class="h-[400px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709968032516.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=BA%2F0SMViOzCnPde%2FqbnRinr7hCu44baYGEH1mYUgB3c09X9ZMESZkmqw1Reundgb%2FInARvQJRjYBm%2FOVKazv9ee9tpnWayJaGd4ZPTZxBKLHg7KfUOTVazLULOZbkPUZzf9eqSc0%2BMUuzF9uUz8UwrNEjTOligTnls9Mi4%2BkwPX0DZdX7ONMzZrQqZ%2B4wM8b%2B3qnQK9tFVGRdfOglqDV9jbr8xjklg3XN7VMHSlB4vX2nfiFLcV%2Fyc9To7mxEAtzfnz1wY3vM4pkfbIFQsan%2FjEykOM3AXKDAVq3HJb3OW4fH%2Fpetst6nafb%2Bmu8um5%2BamweriezOqRH47ev%2BJJXUg%3D%3D">
              <div class="md:w-[48%] w-full inline-block leading-relaxed mt-4 md:mt-0">
                <h4 class="mb-2 text-xl">葡萄酒陳釀</h4>
                <ul class="list-disc list-inside">
                  <li>紅葡萄酒：通常是將葡萄皮和果汁一起發酵，這樣可以提取出色素和單寧，使酒具有濃郁的口感和顏色。</li>
                  <li>白葡萄酒：通常是只用果汁發酵，不加入葡萄皮，使酒保持清澈的顏色和輕盈的口感。</li>
                  <li>氣泡酒：通常是在發酵過程中添加二氧化碳，或者將已經發酵的酒再次進行二次發酵，使氣泡形成。</li>
                  <li>甜酒：通常是在發酵過程中停止發酵，使酒中保留一部分的糖分，使其具有甜味。</li>
                </ul>
              </div>
            </li>
            <li class="flex-col items-center justify-center  md:flex md:flex-row-reverse  md:justify-between mb-12">
              <img class="h-[400px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709967953555.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=YWzxuU%2FKe2vfBNgDh%2B9dbimkC8kF3JF%2FVtGLjyeqCYj15YcQ61OZNhkr4FqcZAnZ8r%2F%2BlL4V02CcrPs5FerBw%2Bu3wPBb%2FyRKlX1laevrtnjjfnx2WfDx%2FO6emZEBBUMuZt7xpO08a86Z03W2eKBTlFzK7fsKH0AmSIECvV3BjlXhwrPn4zLZjJYoQwj5xxog%2FAEVv5vKEJafyqISYsVvDjo%2BkniJnnO2yu7i1LR0NRbUR5svDNCgZ22ej2vS5NwKkZB9WXCYdAJYZvhideBi2ka5V%2FAcCcF3JWBhOcX%2FQnwkEm%2BPiZBRsdXVchylwXClXsYeUGzDUSHKCDrQel4jXA%3D%3D">
              <div class="md:w-[48%] w-full inline-block leading-relaxed mt-4 md:mt-0">
                <h4 class="mb-2 text-xl">木桶陳釀</h4>
                <ul class="list-disc list-inside">
                  <li>酒液與木桶的互動：酒液在木桶中陳釀的過程中，會與木頭互相作用。酒液會透過木頭的微孔吸收木頭中的化合物，同時也會釋放酒液中的成分到木桶中。</li>
                  <li>風味的提取：木桶陳釀可以讓酒液吸收木頭的香氣、焦糖、香料等成分，使得酒液更加豐富和複雜。</li>
                  <li>氧化和蒸發：木桶是透氧的，所以酒液在陳釀過程中會與空氣接觸，進行氧化，使酒液的風味變化。同時，酒液也會透過木桶的微孔慢慢蒸發，這被稱為“天使之份”。</li>
                </ul>
              </div>
            </li>
            <li class="flex-col items-center justify-center  md:flex md:flex-row  md:justify-between mb-12">
              <img class="h-[400px] w-[80%] md:w-[48%] object-cover rounded-lg inline-block" src="https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709967996730.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pJXt8N6a6TP%2BbuXfMUcVEn4wu%2FA3zLbY1YsRq%2FQg16NL2accq05sF9LjvduMjpl050F%2BAKp8Cm6CMEkG4OALvWrrhT7NAh%2Fnzl4teWa%2FyCy0iNkrJtoMdE%2BYlnWM6iH8%2FSnn15hlFErVxLf6Wr1PMdOE5%2BHaO%2FlGnhBKxoME7ZsMJF8p34uBnQoqmyGwe5Yb%2BP5BkrQNmyYMXDDyL1afx9wbG3UtlSH1FULFIwWPClKpDuSZYV3s17%2FbFFhAiv38hAdvn1%2Fel8SjmHb77kOW4tBLYzTMQDyU0a0t9FXsApsv8OIMApb1QUjaqmRtEpbJMfpHFwd86MZUl8QoNDIvsA%3D%3D" alt="">
              <div class="md:w-[48%] w-full inline-block leading-relaxed mt-4 md:mt-0">
                <h4 class="mb-2 text-xl">不同酒款陳釀</h4>
                <ul class="list-disc list-inside">
                  <li>威士忌：橡木桶陳釀是威士忌酒最重要的步驟之一，橡木桶能夠賦予威士忌酒的香氣、木質味、香料味等。</li>
                  <li>白蘭地：陳釀在橡木桶中可以使白蘭地酒顏色變深，質地更加柔軟，並帶來橡木桶的香氣和味道。</li>
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
    

    <FooTer/>
  </div>
</template>

<script setup>
  //Swiper
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import { Navigation, Autoplay, Pagination } from 'swiper/modules'

  //components
  import NavBar from '@/components/NavBar.vue'
  import FooTer from '@/components/FooTer.vue'

  import { ref } from 'vue'

  const navigation  = [Navigation, Autoplay, Pagination]

  const liquorList = [
    {type: '威士忌', url: 'https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709968612209.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=SA21m%2B%2FgLEPcUC9NlXX4lqQICXoNF53zgzKi4RH2qNSgdlxDsC9NwfDJdFER6V3ciDB62LIqLvGmi%2FOpcPnUTkcvt8unNvTfNXAAnrmGSbXloqKWVY41HmE5aDZsiqi32cSLDZc4Qkq9%2FWzvmX9XPcjnJ3kwyyHKO8iojvMspTmo7fA9o4h6Kmny8FDb%2Fuxhe6p3lYvAbhwTpehAKU2BX%2BkofwQFAquOMH%2BnXgAIiP1PKOfMfYtPL1omp4oJEyQf8CHM5yFHxAMj%2BFxVg0G%2FgkR1yILeoNDVaWMYxceR1Avl6vBxM16yf7UPLNhhJcAy%2FyDEaImzdZ6ok1zhwQMUtw%3D%3D'},
    {type: '葡萄酒', url: 'https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709968834316.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=cIRLb0o%2F3ImlvCMOIz3mR5Y8p5sZc6dj9%2FTClPaqmjbEYyzEKjN9xncGwAmjI42TEz85tF0oBjDM2HGDeuY7svzDCcMXzBy3uI%2BuPIO7eeKQ%2B0BI4tKGrLp2HwcVplxreeLEC7rpiLxd%2Fgzbeeq68T1CGhmSmV%2BDcThwUlK%2B1uWPO0fZE7MufCsykFdxFZXIC1U0aL4%2BM1o5b3wge%2Fhb1gtg%2BDA5hjPWmaNr7CIMKqFUeikZ2MeCSUimWfvMbN7oDNMxOg3qDot%2FuqIc6rnlV5aY7NwcUtltqAL58j30Y8ZtnJNEnmKRCEzW9OPlOyv0KfrbNXhKy6p8g4tMkYjEhg%3D%3D'},
    {type: '香檳', url: 'https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709968637727.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=pHYiBapkYQOs8Q0CLc0DYKaQ0UreDGWvta2Eju4QgQ%2FYiYqQAGz1eV8mZvbHmgpdGimksDhwUra%2BLmvGJi8Vy3ieCD7muGl8pHzi61tlTRADcGChrXfcUaNO%2BXOYKExtV5FmZkleppnBSS2r2jisqeHR%2BrGTStY5ChKwAL70RJofFbze7TNE9JuAMIpeu860isn7zxd9FnnRlyaFT5ZtpvvjMZ5wArtVnDX2Ng0xlL%2FFwFyyESUORQ11wUj4LbXets4sQm%2FLw6Wf2cpfkSyjrYHCJVBCgJ%2BEV%2FcP%2FoDItW7osVFmvhzJ2Oj6X2S7vuZ8OdJ06i95olU%2F53NbUnRD8w%3D%3D'},
    {type: '氣泡酒', url: 'https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709968661689.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=RxjwlMN6k7OWbagu7HZlBP%2FqjDlaqyJNrKuWQTMTkUXbkW2VQManmZvexv2bFq03rkRr%2FOhiuC%2B627h9LDYg29qBPDzfZgaSagT%2BgeNA8%2FgSq4SCgzGalkTImBUVtlHP%2Foi93%2BS9QUv3p%2BOvBMedxQksmqphSjXpm3F1uf1%2F00C%2Bn2N%2Bh4L6q%2BKsaDB4vd3cm0mJRw3vur8BfUAJBGwweQ8bKQ4NXA9T7plRcuKWG%2FIESZY8v3x%2Bi8rRW8niV5VDR2yJ%2F3KXEQOclZbFXkMb2Jdb%2FexqdPPwzQuchvJUl3Ts%2FAvlGNkD2AHBAR4UPstCOc%2F0AMITSYTr%2BxTm4SaMOQ%3D%3D'},
    {type: '利口', url: 'https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709968585530.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=KCSs6W46mQ6QBwKfg2983Uj6Qk6eW6XG%2FMAIViwBEbwDcE0giC9Rg2ED6JP73abDesxAoxxJUvwjUVBDel4f2wn%2FM7r%2Bw7OG66q0tu6YeBTUA7FTdFdb%2Fbty5mFCLiv5c7O%2BMYcMXwJdqnHb3dfLe%2FkBgpbuiRhfeFT0DLGIjfLAbOGJZagTkF1MwjSm%2BBnt8CrBllqRnQZvT5QwUjMXoaHxSL%2B1t8L7h1jyXZiiRbOFVeW7A6w9LuTpkATPbDfbqVsswodH%2FiNfUYPtqV77OTqqqyaGFuLfhpwfxABfuO6ojMKRPdaAWKBOpEYt0oha2SYP34q3qxlZsxzobks25g%3D%3D'},
    {type: '白蘭地', url: 'https://storage.googleapis.com/vue-course-api.appspot.com/liquor_store/1709968551710.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=PvymgMl9YDu5COu6SUur13DTkwhlsm8avWPHVml10YMQRKscADVEcnAJtCQN7tSme0Yflnsv%2Bn8uQTzxZm8FtYr%2FGbrOOeg3%2FUTzF0Ui515mm84rwC8jm4OMmEAAoiUVSjd4z7PlaTNYmXsgobTksQoD0JLeXUDMPxSpeiAhr%2FfDQhgepy7vYDN5lJ9IeAnEfCJ6ivN7EeFZKQrey3FrelUUOFKKTfpHJMwJnM9rFjIz8koi8oa%2F5SigZNhkpLz4cfAU7fn5zA52MVPgdf%2BLyqmaBtyCmRTpW%2BRyAd8%2FdOyc1YcRq%2BZJK8p%2BbebY9otUWMQtLi9Axjt8%2BcDIwjkLoQ%3D%3D'},
  ]

  const isLoading = ref(true)
  const handleImg = () =>{
    isLoading.value = false
  }

</script>

