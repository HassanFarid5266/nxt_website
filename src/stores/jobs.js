import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useJobsStore = defineStore('jobs', () => {
  // State
  const jobs = ref([])
  const testimonials = ref([
    {
      id: 1,
      full_name: 'Sarah Ahmed',
      designation: 'Senior Developer',
      image: '/src/assets/images/team/iqra.jpg',
      feedback: 'Working at NexTash has been an incredible journey. The team is supportive, the projects are challenging, and the growth opportunities are endless.',
      stars: 5
    },
    {
      id: 2,
      full_name: 'Ahmed Hassan',
      designation: 'UI/UX Designer',
      image: '/src/assets/images/team/muzmal.jpg',
      feedback: 'The collaborative culture here is amazing. Everyone is willing to help and share knowledge. It feels like a second family.',
      stars: 5
    },
    {
      id: 3,
      full_name: 'Fatima Khan',
      designation: 'Project Manager',
      image: '/src/assets/images/team/tania.webp',
      feedback: 'NexTash provides excellent work-life balance and career growth opportunities. The management truly cares about employee well-being.',
      stars: 5
    },
    {
      id: 4,
      full_name: 'Omar Sheikh',
      designation: 'DevOps Engineer',
      image: '/src/assets/images/team/rizvan.jpg',
      feedback: 'The technical challenges here keep me engaged and learning. The team is talented and the work environment is fantastic.',
      stars: 5
    }
  ])
  const loading = ref(false)
  const currentPage = ref(1)
  const totalCount = ref(0)
  const hasNextPage = ref(false)

  // Getters
  const getJobs = computed(() => jobs.value)
  const getTestimonials = computed(() => testimonials.value)
  const getJobCount = computed(() => totalCount.value)
  const isLoading = computed(() => loading.value)

  // Actions
  const fetchJobs = async (page = 1, search = '', sort = 'DESC', append = false) => {
    loading.value = true
    try {
      // Simulate API call - in real app this would be actual API
      const mockJobs = [
        {
          id: 1,
          name: 'senior-frontend-developer',
          company: 'NexTash',
          job_title: 'Frontend Developer',
          job_intro: 'We are seeking a talented and passionate Front-End Web Developer with expertise in CSS to join our dynamic team. This role is ideal for individuals who are creative, detail-oriented, and have a strong commitment to crafting seamless user experiences. As a Front-End Web Developer, you will play a crucial role in transforming our web designs into stunning, responsive, and user-friendly websites.',
          status: 'Open',
          description: `
          <ol>
            <li data-list="bullet">Develop and maintain frontend applications using Vue.js</li>
            <li data-list="bullet">Collaborate with cross-functional teams</li>
            <li data-list="bullet">Write clean, maintainable code</li>
            <li data-list="bullet">3+ years of experience with modern JS frameworks</li>
            <li data-list="bullet">Strong understanding of HTML/CSS/JS</li>
            <li data-list="bullet">Experience with Vite, Pinia, and REST APIs</li>
          </ol>`,
          location: 'Karachi, Pakistan',
          type: 'Full-time',
          experience: '3-5 years',
          posted_date: '2024-01-15'
        },
        {
          id: 2,
          name: 'ui-ux-designer',
          company: 'NexTash',
          job_title: 'UI/UX Designer',
          job_intro: 'Join our design team to create beautiful and intuitive user experiences. You will work on various projects from concept to final implementation.',
          status: 'Open',
          description: `
          <ol>
            <li data-list="bullet">Create wireframes, prototypes, and high-fidelity designs</li>
            <li data-list="bullet">Conduct user research and usability testing</li>
            <li data-list="bullet">Work closely with developers to ship features</li>
            <li data-list="bullet">2+ years in product design</li>
            <li data-list="bullet">Strong portfolio demonstrating design process</li>
            <li data-list="bullet">Figma/Sketch expertise</li>
          </ol>`,
          location: 'Karachi, Pakistan',
          type: 'Full-time',
          experience: '2-4 years',
          posted_date: '2024-01-10'
        },
      ]

      // Filter jobs based on search
      let filteredJobs = mockJobs
      if (search) {
        filteredJobs = mockJobs.filter(job => 
          job.job_title.toLowerCase().includes(search.toLowerCase()) ||
          job.job_intro.toLowerCase().includes(search.toLowerCase()) ||
          job.company.toLowerCase().includes(search.toLowerCase())
        )
      }

      // Sort jobs
      if (sort === 'ASC') {
        filteredJobs.sort((a, b) => new Date(a.posted_date) - new Date(b.posted_date))
      } else {
        filteredJobs.sort((a, b) => new Date(b.posted_date) - new Date(a.posted_date))
      }

      // Pagination
      const limit = 2
      const startIndex = (page - 1) * limit
      const endIndex = startIndex + limit
      const paginatedJobs = filteredJobs.slice(startIndex, endIndex)

      totalCount.value = filteredJobs.length
      currentPage.value = page
      hasNextPage.value = endIndex < filteredJobs.length

      if (append) {
        jobs.value = [...jobs.value, ...paginatedJobs]
      } else {
        jobs.value = paginatedJobs
      }

    } catch (error) {
      console.error('Error fetching jobs:', error)
    } finally {
      loading.value = false
    }
  }

  const searchJobs = (searchTerm) => {
    fetchJobs(1, searchTerm, 'DESC', false)
  }

  const sortJobs = (sortOrder) => {
    fetchJobs(1, '', sortOrder, false)
  }

  const loadMoreJobs = () => {
    if (hasNextPage.value) {
      fetchJobs(currentPage.value + 1, '', 'DESC', true)
    }
  }

  const getJobById = (id) => {
    return jobs.value.find(job => job.id === id)
  }

  return {
    // State
    jobs,
    testimonials,
    loading,
    currentPage,
    totalCount,
    hasNextPage,
    
    // Getters
    getJobs,
    getTestimonials,
    getJobCount,
    isLoading,
    
    // Actions
    fetchJobs,
    searchJobs,
    sortJobs,
    loadMoreJobs,
    getJobById
  }
})
