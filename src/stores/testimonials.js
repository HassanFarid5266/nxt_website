import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTestimonialsStore = defineStore('testimonials', () => {
  // State
  const testimonials = ref([
    { 
      full_name: 'John Smith', 
      designation: 'CEO, TechCorp', 
      image: '/src/assets/images/feedbacks/1.webp', 
      animation: 'fade-up', 
      feedback: 'Thanks to NexTash, our organization underwent a seamless digital transformation, enhancing efficiency and accelerating our reporting processes. Their expertise in digitalization not only streamlined our operations but also provided us with valuable insights for strategic decision-making. NexTash\'s solutions have truly revolutionized the way we operate, allowing us to stay ahead in today\'s fast-paced business environment.', 
      stars: 5 
    },
    { 
      full_name: 'Sarah Johnson', 
      designation: 'Marketing Director, GrowthCo', 
      image: '/src/assets/images/feedbacks/2.webp', 
      animation: 'zoom-in', 
      feedback: 'NexTash\'s comprehensive server management and database optimization services have been instrumental in enhancing our IT infrastructure\'s performance and reliability. With their meticulous approach and attention to detail, NexTash ensured that our servers were effectively managed and our databases were optimized for optimal performance. Their proactive monitoring and troubleshooting capabilities have minimized downtime and ensured seamless operations across our systems.', 
      stars: 5 
    },
    { 
      full_name: 'Mike Chen', 
      designation: 'CTO, InnovationLabs', 
      image: '/src/assets/images/feedbacks/3.webp', 
      animation: 'fade-down', 
      feedback: 'Thanks to NexTash, our organization underwent a seamless digital transformation, enhancing efficiency and accelerating our reporting processes. Their expertise in digitalization not only streamlined our operations but also provided us with valuable insights for strategic decision-making. NexTash\'s solutions have truly revolutionized the way we operate, allowing us to stay ahead in today\'s fast-paced business environment.', 
      stars: 5 
    },
    { 
      full_name: 'Emily Davis', 
      designation: 'Product Manager, SoftWorks', 
      image: '/src/assets/images/feedbacks/4.webp', 
      animation: 'fade-right', 
      feedback: 'Thanks to NexTash, our organization underwent a seamless digital transformation, enhancing efficiency and accelerating our reporting processes. Their expertise in digitalization not only streamlined our operations but also provided us with valuable insights for strategic decision-making. NexTash\'s solutions have truly revolutionized the way we operate, allowing us to stay ahead in today\'s fast-paced business environment.', 
      stars: 5 
    }
  ])

  // Getters
  const getTestimonials = computed(() => testimonials.value)
  const getTestimonialById = computed(() => (id) => testimonials.value.find(testimonial => testimonial.id === id))
  const getTestimonialsByRating = computed(() => (rating) => 
    testimonials.value.filter(testimonial => testimonial.stars === rating)
  )
  const getRandomTestimonial = computed(() => () => {
    const randomIndex = Math.floor(Math.random() * testimonials.value.length)
    return testimonials.value[randomIndex]
  })

  // Actions
  const addTestimonial = (testimonial) => {
    const newId = Math.max(...testimonials.value.map(t => t.id || 0)) + 1
    testimonials.value.push({ ...testimonial, id: newId })
  }

  const updateTestimonial = (id, updates) => {
    const index = testimonials.value.findIndex(testimonial => testimonial.id === id)
    if (index !== -1) {
      testimonials.value[index] = { ...testimonials.value[index], ...updates }
    }
  }

  const removeTestimonial = (id) => {
    const index = testimonials.value.findIndex(testimonial => testimonial.id === id)
    if (index !== -1) {
      testimonials.value.splice(index, 1)
    }
  }

  const fetchTestimonials = async () => {
    // Simulate API call
    try {
      // In real app, this would be an API call
      // const response = await api.getTestimonials()
      // testimonials.value = response.data
      console.log('Testimonials loaded from store')
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    }
  }

  return {
    // State
    testimonials,
    
    // Getters
    getTestimonials,
    getTestimonialById,
    getTestimonialsByRating,
    getRandomTestimonial,
    
    // Actions
    addTestimonial,
    updateTestimonial,
    removeTestimonial,
    fetchTestimonials
  }
})
