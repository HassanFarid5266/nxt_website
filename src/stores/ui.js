import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // State
  const isLazyLoadingInitialized = ref(false)

  // Actions
  const initLazyLoading = () => {
    if (isLazyLoadingInitialized.value) return
    
    const lazyImages = document.querySelectorAll('.lazy-load')
    if (!('IntersectionObserver' in window)) {
      // Fallback for older browsers
      lazyImages.forEach(img => {
        const dataSrc = img.getAttribute('data-src')
        if (dataSrc) {
          img.src = dataSrc
          img.classList.remove('lazy-load')
        }
      })
      return
    }

    const options = { threshold: 0.1 }
    const onIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          const dataSrc = img.getAttribute('data-src')
          if (dataSrc) {
            img.src = dataSrc
            img.classList.remove('lazy-load')
          }
          observer.unobserve(img)
        }
      })
    }

    const observer = new IntersectionObserver(onIntersect, options)
    lazyImages.forEach(img => observer.observe(img))
    
    isLazyLoadingInitialized.value = true
  }

  const resetLazyLoading = () => {
    isLazyLoadingInitialized.value = false
  }

  const addLazyLoadingToElement = (element) => {
    if (!('IntersectionObserver' in window)) return

    const options = { threshold: 0.1 }
    const onIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target
          const dataSrc = img.getAttribute('data-src')
          if (dataSrc) {
            img.src = dataSrc
            img.classList.remove('lazy-load')
          }
          observer.unobserve(img)
        }
      })
    }

    const observer = new IntersectionObserver(onIntersect, options)
    observer.observe(element)
  }

  return {
    // State
    isLazyLoadingInitialized,
    
    // Actions
    initLazyLoading,
    resetLazyLoading,
    addLazyLoadingToElement
  }
})
