import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useEmployeesStore = defineStore('employees', () => {
  // State
  const employees = ref([
    { 
      id: 1, 
      firstName: 'Abdullah', 
      lastName: 'Arshad', 
      designation: 'Chief Operating Officer (COO)', 
      image: '/src/assets/images/team/abdullah.webp' 
    },
    { 
      id: 2, 
      firstName: 'Faisal', 
      lastName: '', 
      designation: 'CEO & Founder', 
      image: '/src/assets/images/faisal.webp' 
    },
    { 
      id: 3, 
      firstName: 'Team', 
      lastName: 'Lead', 
      designation: 'Lead Developer', 
      image: '/src/assets/images/team/3.webp' 
    }
  ])

  // Getters
  const getEmployees = computed(() => employees.value)
  const getEmployeeById = computed(() => (id) => employees.value.find(emp => emp.id === id))
  const getEmployeesByDesignation = computed(() => (designation) => 
    employees.value.filter(emp => emp.designation.toLowerCase().includes(designation.toLowerCase()))
  )

  // Actions
  const addEmployee = (employee) => {
    const newId = Math.max(...employees.value.map(emp => emp.id)) + 1
    employees.value.push({ ...employee, id: newId })
  }

  const updateEmployee = (id, updates) => {
    const index = employees.value.findIndex(emp => emp.id === id)
    if (index !== -1) {
      employees.value[index] = { ...employees.value[index], ...updates }
    }
  }

  const removeEmployee = (id) => {
    const index = employees.value.findIndex(emp => emp.id === id)
    if (index !== -1) {
      employees.value.splice(index, 1)
    }
  }

  const fetchEmployees = async () => {
    // Simulate API call
    try {
      // In real app, this would be an API call
      // const response = await api.getEmployees()
      // employees.value = response.data
      console.log('Employees loaded from store')
    } catch (error) {
      console.error('Error fetching employees:', error)
    }
  }

  return {
    // State
    employees,
    
    // Getters
    getEmployees,
    getEmployeeById,
    getEmployeesByDesignation,
    
    // Actions
    addEmployee,
    updateEmployee,
    removeEmployee,
    fetchEmployees
  }
})
