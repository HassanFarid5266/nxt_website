import { defineStore } from 'pinia/dist/pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isOpen: false
  }),
  
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    
    open() {
      this.isOpen = true
    },
    
    close() {
      this.isOpen = false
    }
  }
})
