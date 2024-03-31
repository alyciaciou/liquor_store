import { defineStore } from 'pinia'
import Swal from 'sweetalert2'


export const useSwalStore = defineStore('Swal', () => {
  const successMsg = () => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        width: '250',
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer
            toast.onmouseleave = Swal.resumeTimer
        }
    })
    Toast.fire({
        icon: "success",
        title: "成功加入購物車"
    })    
  }

  return { successMsg }
})
