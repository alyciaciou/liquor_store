<template>
    <div class="bg-black text-white">
        <NavBar/>

        <header>
            <div class="h-[500px] bg-cover bg-center  text-white flex flex-col items-center justify-center text-center opacity-85" style="background-image: url(https://images.unsplash.com/photo-1552844418-3d618ca9af68?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);">
                <div class="">
                    <p class="text-6xl font-bold mb-4">
                        系列酒藏
                    </p>
                </div>
            </div>
        </header>
        <main class="container mx-auto p-6 md:p-24 my-6 bg-[#292828f0]">
            <ul class="py-8 text-white text-center flex items-center justify-between w-full">
                <li class="w-[33%] ">
                    <select class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option v-for="item in selectType" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
                <li class="w-[33%] ">
                    <select class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option v-for="item in selectType" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
                <li class="w-[33%] ">
                    <select class="bg-[#535252f2] w-[80%] md:w-[50%] p-2 rounded-lg">
                        <option v-for="item in selectType" :key="item" :value="item">{{ item }}</option>
                    </select>
                </li>
            </ul>

            <div class="py-8 text-white text-center flex items-center justify-between w-full flex-col md:flex md:flex-row flex-wrap">
                <div v-for="item in liquorList" :key="item.type" class="md:w-[30%] lg:w-[24%] w-full mb-6">
                        <div class="p-2 bg-[#535252f2] rounded-lg hover:bg-[#535252ab] hover:opacity-75">
                            <img class="object-cover rounded-lg h-[200px] w-full " :src="item.url" alt="">
                            <p class="p-1">{{item.type}}</p>
                            <p class="p-1">原價：NT$.144,70  <del class="text-sm ml-2">NT$.144,700</del></p>
                            
                            <div class="flex items-center justify-around">
                                <router-link to="/products" class="border-2 border-[#292828f0] p-2 rounded-lg cursor-pointer hover:bg-white hover:text-[#535252f2]">瞭解更多</router-link>
                                <router-link to="/cart" class="border-2 border-[#292828f0] p-2 rounded-lg cursor-pointer hover:bg-white hover:text-[#535252f2]">加入購物車</router-link>
                            </div>
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

    const selectType = ['威士忌', '葡萄酒', '香檳', '氣泡酒', '利口', '蘭姆', '琴酒', '白蘭地', '梅酒', ]
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

