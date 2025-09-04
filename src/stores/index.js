// Main store index file - exports all stores
export { useSidebarStore } from './sidebar.js'
export { useEmployeesStore } from './employees.js'
export { useJobsStore } from './jobs.js'
export { useBlogsStore } from './blogs.js'
export { useProjectsStore } from './projects.js'
export { useTestimonialsStore } from './testimonials.js'
export { useClientsStore } from './clients.js'
export { useUIStore } from './ui.js'

// You can also create a combined store if needed
// This allows you to access multiple stores from one place
export const useMainStore = () => {
  return {
    sidebar: useSidebarStore(),
    employees: useEmployeesStore(),
    jobs: useJobsStore(),
    blogs: useBlogsStore(),
    projects: useProjectsStore(),
    testimonials: useTestimonialsStore(),
    clients: useClientsStore(),
    ui: useUIStore()
  }
}
