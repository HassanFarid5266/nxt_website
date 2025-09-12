// import PartnerSwiper from '../components/PartnerSwiper.vue'

// Main store index file - exports all stores
export { useSidebarStore } from './sidebar.js'
export { useEmployeesStore } from './employees.js'
export { useJobsStore } from './jobs.js'
export { useBlogsStore } from './blogs.js'
export { useProjectsStore } from './projects.js'
export { useProductsStore } from './products.js'
export { useTestimonialsStore } from './testimonials.js'
export { useClientsStore } from './clients.js'
export { useUIStore } from './ui.js'
export { useFaqsStore } from './faqs.js'
export { usePartnersStore } from './partner.js'
export { usePartnerSwiperStore } from './partnerSwiper.js'

export const useMainStore = () => {
  return {
    sidebar: useSidebarStore(),
    employees: useEmployeesStore(),
    jobs: useJobsStore(),
    blogs: useBlogsStore(),
    projects: useProjectsStore(),
    products: useProductsStore(),
    testimonials: useTestimonialsStore(),
    clients: useClientsStore(),
    ui: useUIStore(),
    faqs: useFaqsStore(),
    partner: usePartnersStore(),
    PartnerSwiper: usePartnerSwiperStore(),
  }
}
