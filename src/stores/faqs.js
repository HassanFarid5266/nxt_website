import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { apiGet, apiPost } from '../utils/api.js'

export const useFaqsStore = defineStore('faqs', () => {
  // State
  const faqs = ref([])
  const loading = ref(false)
  const submitting = ref(false)
  const feedbackMessage = ref('')
  const feedbackType = ref('')

  // Getters
  const getFaqs = computed(() => faqs.value)
  const isLoading = computed(() => loading.value)
  const isSubmitting = computed(() => submitting.value)

  // Actions
  const fetchFaqs = async () => {
    loading.value = true
    try {
      // Replace with real API when available
      // Example: const data = await apiGet('/faqs')
      // Map to { name, title, description }
      // For now, keep empty and rely on backend when wired
      faqs.value = faqs.value
    } catch (error) {
      console.error('Error fetching FAQs:', error)
    } finally {
      loading.value = false
    }
  }

  const submitQuestion = async ({ fullname, email, subject, message }) => {
    feedbackMessage.value = ''
    feedbackType.value = ''
    if (!fullname || !email || !subject || !message) {
      feedbackType.value = 'error'
      feedbackMessage.value = 'Please fill out all fields before submitting.'
      return { success: false }
    }

    submitting.value = true
    try {
      // Backend expects Frappe endpoint similar to: nextash_v2.events.faq.create
      // If proxied, define endpoint accordingly; otherwise use full path when available
      await apiPost('/nextash_v2.events.faq.create/', {
        fullname,
        email,
        subject,
        message
      })
      feedbackType.value = 'success'
      feedbackMessage.value = 'Thanks for contacting us, please expect reply from us on your given email in 1 business day.'
      return { success: true }
    } catch (error) {
      feedbackType.value = 'error'
      feedbackMessage.value = 'Oh Snap! something went wrong :-('
      return { success: false }
    } finally {
      submitting.value = false
      // Auto-clear feedback after 10s like original
      setTimeout(() => {
        feedbackMessage.value = ''
      }, 10000)
    }
  }

  return {
    // State
    faqs,
    loading,
    submitting,
    feedbackMessage,
    feedbackType,

    // Getters
    getFaqs,
    isLoading,
    isSubmitting,

    // Actions
    fetchFaqs,
    submitQuestion
  }
})


