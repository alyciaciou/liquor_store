import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCartInfo } from '@/apis/cartApi'


export const useCartNumStore = defineStore('cartNum', () => {
  const cartNum = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  const getCartNum = async () => {
    const info = await getCartInfo()
    cartNum.value = info.data.carts.length
  }

  return { cartNum, getCartNum }
})
