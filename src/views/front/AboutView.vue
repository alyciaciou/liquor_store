<template>
    <div class="bg-black text-white">
        <NavBar/>
        <!-- https://images.unsplash.com/photo-1573551565922-aec98de55802?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D -->
        <!-- https://images.unsplash.com/photo-1573551565922-aec98de55802?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D -->
        <header>
            <div class="h-[500px] bg-cover bg-center text-white flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://images.unsplash.com/photo-1550113711-48d525f192e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="">
                    <p class="text-6xl font-bold mb-4">
                        品牌故事
                    </p>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 my-6 bg-[#292828f0]">
            <section class="py-8">
        <div class="text-white text-center">
          <h2 class="text-4xl mb-10 font-bold">釀造過程</h2>
          <ul>
            <li class="flex-col items-center justify-center  md:flex md:flex-row  md:justify-between mb-6">
              <img class="h-[500px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://images.unsplash.com/photo-1573551565922-aec98de55802?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
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
              <img class="h-[500px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://images.unsplash.com/photo-1551792727-ddecb99019d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
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
              <img class="h-[500px] w-full md:w-[48%] object-cover rounded-lg inline-block" src="https://images.unsplash.com/photo-1581717070062-e388aba6f27a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
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
        
        <FooTer/>
    </div>
</template>


<script setup>
    //components
    import NavBar from '@/components/NavBar.vue'
    import FooTer from '@/components/FooTer.vue'
</script>