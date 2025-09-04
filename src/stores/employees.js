import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useEmployeesStore = defineStore('employees', () => {
  // Leadership Team (CTO, CIO, COO)
  const leadership = ref([
    { 
      id: 1, 
      firstName: 'Abdullah', 
      lastName: 'Arshad', 
      designation: 'Chief Operating Officer (COO)', 
      image: '/src/assets/images/team/abdullah.webp',
      bio: 'Leading operational excellence and strategic execution across all business units.',
      experience: '8+ years in operations management',
      linkedin: 'https://linkedin.com/in/abdullah-arshad',
      email: 'abdullah@nextash.com',
      isLeadership: true
    },
    { 
      id: 2, 
      firstName: 'Shahid', 
      lastName: 'Mehmood', 
      designation: 'Chief Technology Officer (CTO)', 
      image: '/src/assets/images/team/shahid.webp',
      bio: 'Driving technological innovation and leading our development teams to create cutting-edge solutions.',
      experience: '10+ years in software development and architecture',
      linkedin: 'https://linkedin.com/in/shahid-mehmood',
      email: 'shahid@nextash.com',
      isLeadership: true
    },
    { 
      id: 3, 
      firstName: 'Tania', 
      lastName: 'Khan', 
      designation: 'Chief Information Officer (CIO)', 
      image: '/src/assets/images/team/tania.webp',
      bio: 'Overseeing information technology strategy and ensuring seamless digital transformation.',
      experience: '12+ years in IT strategy and digital transformation',
      linkedin: 'https://linkedin.com/in/tania-khan',
      email: 'tania@nextash.com',
      isLeadership: true
    }
  ])

  // Regular Employees
  const employees = ref([
    { 
      id: 4, 
      firstName: 'Faisal', 
      lastName: 'Zahoor', 
      designation: 'CEO & Founder', 
      image: '/src/assets/images/faisal.webp',
      isLeadership: false
    },
    { 
      id: 5, 
      firstName: 'Irfan', 
      lastName: 'Ahmed', 
      designation: 'Lead Developer', 
      image: '/src/assets/images/team/irfan.webp',
      isLeadership: false
    },
    { 
      id: 6, 
      firstName: 'Iqra', 
      lastName: 'Khan', 
      designation: 'Senior Developer', 
      image: '/src/assets/images/team/iqra.jpg',
      isLeadership: false
    },
    { 
      id: 7, 
      firstName: 'Muzmal', 
      lastName: 'Hassan', 
      designation: 'UI/UX Designer', 
      image: '/src/assets/images/team/muzmal.jpg',
      isLeadership: false
    },
    { 
      id: 8, 
      firstName: 'Rizvan', 
      lastName: 'Ali', 
      designation: 'Project Manager', 
      image: '/src/assets/images/team/rizvan.jpg',
      isLeadership: false
    },
    { 
      id: 9, 
      firstName: 'Sinza', 
      lastName: 'Malik', 
      designation: 'DevOps Engineer', 
      image: '/src/assets/images/team/sinza.jpg',
      isLeadership: false
    }
  ])

  // Getters
  const getEmployees = computed(() => employees.value)
  const getLeadership = computed(() => leadership.value)
  const getAllTeamMembers = computed(() => [...leadership.value, ...employees.value])
  const getEmployeeById = computed(() => (id) => employees.value.find(emp => emp.id === id))
  const getLeaderById = computed(() => (id) => leadership.value.find(leader => leader.id === id))
  const getEmployeesByDesignation = computed(() => (designation) => 
    employees.value.filter(emp => emp.designation.toLowerCase().includes(designation.toLowerCase()))
  )
  const getLeadershipByDesignation = computed(() => (designation) => 
    leadership.value.find(leader => leader.designation.toLowerCase().includes(designation.toLowerCase()))
  )

  // Actions
  const addEmployee = (employee) => {
    const newId = Math.max(...employees.value.map(emp => emp.id)) + 1
    employees.value.push({ ...employee, id: newId, isLeadership: false })
  }

  const addLeader = (leader) => {
    const newId = Math.max(...leadership.value.map(l => l.id)) + 1
    leadership.value.push({ ...leader, id: newId, isLeadership: true })
  }

  const updateEmployee = (id, updates) => {
    const index = employees.value.findIndex(emp => emp.id === id)
    if (index !== -1) {
      employees.value[index] = { ...employees.value[index], ...updates }
    }
  }

  const updateLeader = (id, updates) => {
    const index = leadership.value.findIndex(leader => leader.id === id)
    if (index !== -1) {
      leadership.value[index] = { ...leadership.value[index], ...updates }
    }
  }

  const removeEmployee = (id) => {
    const index = employees.value.findIndex(emp => emp.id === id)
    if (index !== -1) {
      employees.value.splice(index, 1)
    }
  }

  const removeLeader = (id) => {
    const index = leadership.value.findIndex(leader => leader.id === id)
    if (index !== -1) {
      leadership.value.splice(index, 1)
    }
  }

  const fetchEmployees = async () => {
    // Simulate API call
    try {
      // In real app, this would be an API call
      // const response = await api.getEmployees()
      // employees.value = response.data
      console.log('Employees and Leadership loaded from store')
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  return {
    // State
    employees,
    leadership,
    
    // Getters
    getEmployees,
    getLeadership,
    getAllTeamMembers,
    getEmployeeById,
    getLeaderById,
    getEmployeesByDesignation,
    getLeadershipByDesignation,
    
    // Actions
    addEmployee,
    addLeader,
    updateEmployee,
    updateLeader,
    removeEmployee,
    removeLeader,
    fetchEmployees
  }
})
