import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  // State
  const projects = ref([
    {
      id: 1,
      name: 'Multan University of Science & Technology Pakistan',
      category: 'Business Portfolio',
      description: 'Our team ensures the seamless functioning of their website, offering technical assistance and maintenance to uphold their online presence. Through continuous support, we help the Multan University of Science & Technology effectively communicate with students, faculty, and stakeholders, facilitating smooth information dissemination and enhancing their digital presence in the education sector.',
      images: ['/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp', '/src/assets/images/projects/3.webp', '/src/assets/images/projects/4.webp']
    },
    {
      id: 2,
      name: 'Project Management SaaS',
      category: 'SaaS',
      description: 'Comprehensive project management tool for teams',
      images: ['/src/assets/images/projects/5.webp', '/src/assets/images/projects/6.webp', '/src/assets/images/projects/7.webp', '/src/assets/images/projects/8.webp']
    }
  ])

  // Getters
  const getProjects = computed(() => projects.value)
  const getProjectById = computed(() => (id) => projects.value.find(project => project.id === id))
  const getProjectsByCategory = computed(() => (category) => 
    projects.value.filter(project => project.category.toLowerCase() === category.toLowerCase())
  )
  const getFeaturedProjects = computed(() => (limit = 2) => 
    projects.value.slice(0, limit)
  )

  // Actions
  const addProject = (project) => {
    const newId = Math.max(...projects.value.map(p => p.id)) + 1
    projects.value.push({ ...project, id: newId })
  }

  const updateProject = (id, updates) => {
    const index = projects.value.findIndex(project => project.id === id)
    if (index !== -1) {
      projects.value[index] = { ...projects.value[index], ...updates }
    }
  }

  const removeProject = (id) => {
    const index = projects.value.findIndex(project => project.id === id)
    if (index !== -1) {
      projects.value.splice(index, 1)
    }
  }

  const fetchProjects = async () => {
    // Simulate API call
    try {
      // In real app, this would be an API call
      // const response = await api.getProjects()
      // projects.value = response.data
      console.log('Projects loaded from store')
    } catch (error) {
      console.error('Error fetching projects:', error)
    }
  }

  return {
    // State
    projects,
    
    // Getters
    getProjects,
    getProjectById,
    getProjectsByCategory,
    getFeaturedProjects,
    
    // Actions
    addProject,
    updateProject,
    removeProject,
    fetchProjects
  }
})
