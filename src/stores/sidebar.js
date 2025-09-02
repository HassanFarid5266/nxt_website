import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  // State
  const isOpen = ref(false)
  
  // Actions
  const toggle = () => {
    isOpen.value = !isOpen.value
  }
  
  const open = () => {
    isOpen.value = true
  }
  
  const close = () => {
    isOpen.value = false
  }

  return {
    // State
    isOpen,
    
    // Actions
    toggle,
    open,
    close
  }
})
