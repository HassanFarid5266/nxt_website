import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useClientsStore = defineStore('clients', () => {
  // State
  const clients = ref([
    '/src/assets/images/logos/lab_system_c.png', 
    '/src/assets/images/logos/chaintusker_c.png', 
    '/src/assets/images/logos/BS_c.png', 
    '/src/assets/images/logos/chaintusker_c.png', 
    '/src/assets/images/logos/chaintusker_c.png', 
    '/src/assets/images/logos/chaintusker_c.png', 
    '/src/assets/images/logos/chaintusker_c.png', 
    '/src/assets/images/logos/chaintusker_c.png', 
    '/src/assets/images/logos/chaintusker_c.png', 
    '/src/assets/images/logos/chaintusker_c.png'
  ])

  // Getters
  const getClients = computed(() => clients.value)
  const getClientByIndex = computed(() => (index) => clients.value[index])
  const getClientCount = computed(() => clients.value.length)
  const getFeaturedClients = computed(() => (limit = 10) => 
    clients.value.slice(0, limit)
  )

  // Actions
  const addClient = (clientLogo) => {
    clients.value.push(clientLogo)
  }

  const updateClient = (index, newLogo) => {
    if (index >= 0 && index < clients.value.length) {
      clients.value[index] = newLogo
    }
  }

  const removeClient = (index) => {
    if (index >= 0 && index < clients.value.length) {
      clients.value.splice(index, 1)
    }
  }

  const reorderClients = (fromIndex, toIndex) => {
    if (fromIndex >= 0 && fromIndex < clients.value.length && 
        toIndex >= 0 && toIndex < clients.value.length) {
      const [movedClient] = clients.value.splice(fromIndex, 1)
      clients.value.splice(toIndex, 0, movedClient)
    }
  }

  const fetchClients = async () => {
    // Simulate API call
    try {
      // In real app, this would be an API call
      // const response = await api.getClients()
      // clients.value = response.data
      console.log('Clients loaded from store')
    } catch (error) {
      console.error('Error fetching clients:', error)
    }
  }

  return {
    // State
    clients,
    
    // Getters
    getClients,
    getClientByIndex,
    getClientCount,
    getFeaturedClients,
    
    // Actions
    addClient,
    updateClient,
    removeClient,
    reorderClients,
    fetchClients
  }
})
