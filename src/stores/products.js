import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref([
    {
      id: 1,
      name: 'NexTash ERP',
      category: 'Software',
      description: 'Modular ERP to manage accounting, HR, sales, and operations.',
      image: '/public/images/products/erp.jpg',
      link: '/services/erp-development',
    },
    {
      id: 2,
      name: 'Project Management Suite',
      category: 'SaaS',
      description: 'Plan, track, and collaborate with a delightful project experience.',
      image: '/public/images/products/2.webp',
      link: '/services/web-development',
    },
    {
      id: 3,
      name: 'E‑commerce Platform',
      category: 'Commerce',
      description: 'Scalable storefront, payments, inventory, and analytics out of the box.',
      image: '/public/images/products/1.webp',
      link: '/services/web-development',
    },
    {
      id: 4,
      name: 'Helpdesk & Support',
      category: 'Support',
      description: 'Ticketing, SLAs, and knowledge base to elevate customer care.',
      image: '/public/images/products/3.webp',
      link: '/services/technical-support',
    }
  ])

  const getProducts = computed(() => products.value)
  const getProductById = computed(() => (id) => products.value.find(p => p.id === id))

  return {
    products,
    getProducts,
    getProductById,
  }
})


