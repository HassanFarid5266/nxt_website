import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    {
      id: 1,
      name: 'Multan University of Science & Technology Pakistan',
      category: 'Business Portfolio',
      description: 'Our team ensures the seamless functioning of their website, offering technical assistance and maintenance to uphold their online presence. Through continuous support, we help the Multan University of Science & Technology effectively communicate with students, faculty, and stakeholders, facilitating smooth information dissemination and enhancing their digital presence in the education sector.',
      images: ['/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp', '/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp'],
      isShowHome: true,
    },
    {
      id: 2,
      name: 'Project Management SaaS',
      category: 'SaaS',
      description: 'Our team provides comprehensive project management services, helping teams stay on track and achieve their goals. We offer expert guidance, streamlined processes, and robust tools to ensure successful project execution. Our services include project planning, resource allocation, risk management, and continuous monitoring to keep projects moving forward.',
      images: ['/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp', '/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp' ],
      isShowHome: true,
    },
    {
      id: 3,
      name: 'Another Project',
      category: 'Business Portfolio',
      description: 'Our team ensures the seamless functioning of their website, offering technical assistance and maintenance to uphold their online presence. Through continuous support, we help the Multan University of Science & Technology effectively communicate with students, faculty, and stakeholders, facilitating smooth information dissemination and enhancing their digital presence in the education sector.',
      images: ['/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp', '/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp'],
      isShowHome: false,
    },
    {
      id: 4,
      name: 'ERP SaaS',
      category: 'SaaS',
      description: 'Our team provides comprehensive project management services, helping teams stay on track and achieve their goals. We offer expert guidance, streamlined processes, and robust tools to ensure successful project execution. Our services include project planning, resource allocation, risk management, and continuous monitoring to keep projects 2oving forward.',
      images: ['/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp', '/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp'],
      isShowHome: false,
    },
    {
      id: 5,
      name: 'ERP SaaS',
      category: 'SaaS',
      description: 'Our team ensures the seamless functioning of their website, offering technical assistance and maintenance to uphold their online presence. Through continuous support, we help the Multan University of Science & Technology effectively communicate with students, faculty, and stakeholders, facilitating smooth information dissemination and enhancing their digital presence in the education sector.',
      images: ['/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp', '/src/assets/images/projects/1.webp', '/src/assets/images/projects/2.webp'],
      isShowHome: false,
    },
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
  const getHomeProjects = computed(() => 
    projects.value.filter(project => project.isShowHome)
  )

  // Actions
  const addProject = (project) => {
    const newId = Math.max(...projects.value.map(p => p.id)) + 1
    projects.value.push({ ...project, id: newId })
  }

  const fetchProjects = async () => {
    try {
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
    getHomeProjects,
    
    // Actions
    addProject,
    fetchProjects
  }
})
