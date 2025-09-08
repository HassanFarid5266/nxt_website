import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useBlogsStore = defineStore('blogs', () => {
  // State
  const blogs = ref([
    { 
      id: 1, 
      slug: 'blog-1', 
      title: 'How to scale your product', 
      meta_image: '/src/assets/images/blogs/1.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Strategies for scaling...', 
      category: 'Product', 
      published_on: '2024-06-01',
      content: '<h3>Scaling the right way</h3><p>Here is some detailed content for the blog post...</p>',
      showOnHome: true
    },
    { 
      id: 2, 
      slug: 'blog-2', 
      title: 'UI/UX patterns in 2024', 
      meta_image: '/src/assets/images/blogs/2.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Design trends to watch...', 
      category: 'Design', 
      published_on: '2024-07-10',
      content: '<h3>Design patterns</h3><p>Detailed content goes here...</p>',
      showOnHome: true
    },
    { 
      id: 3, 
      slug: 'blog-3', 
      title: 'Cloud cost optimization', 
      meta_image: '/src/assets/images/blogs/3.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Reduce spend with best practices...', 
      category: 'Cloud', 
      published_on: '2024-08-05',
      content: '<h3>Optimize cloud spend</h3><p>Detailed content goes here...</p>',
      showOnHome: true
    },
    { 
      id: 4, 
      slug: 'blog-4', 
      title: 'How to scale your product', 
      meta_image: '/src/assets/images/blogs/1.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Strategies for scaling...', 
      category: 'Product', 
      published_on: '2024-06-01',
      showOnHome: false
    },
    { 
      id: 5, 
      slug: 'blog-5', 
      title: 'UI/UX patterns in 2024', 
      meta_image: '/src/assets/images/blogs/2.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Design trends to watch...', 
      category: 'Design', 
      published_on: '2024-07-10', 
      showOnHome: false
    },
    { 
      id: 6, 
      slug: 'blog-6', 
      title: 'Cloud cost optimization', 
      meta_image: '/src/assets/images/blogs/3.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Reduce spend with best practices...', 
      category: 'Cloud', 
      published_on: '2024-08-05', 
      showOnHome: false
    },
    { 
      id: 7, 
      slug: 'blog-7', 
      title: 'How to scale your product', 
      meta_image: '/src/assets/images/blogs/1.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Strategies for scaling...', 
      category: 'Product', 
      published_on: '2024-06-01', 
      showOnHome: false
    },
    { 
      id: 8, 
      slug: 'blog-8', 
      title: 'UI/UX patterns in 2024', 
      meta_image: '/src/assets/images/blogs/2.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Design trends to watch...', 
      category: 'Design', 
      published_on: '2024-07-10', 
      showOnHome: false
    },
    { 
      id: 9, 
      slug: 'blog-9', 
      title: 'Cloud cost optimization', 
      meta_image: '/src/assets/images/blogs/3.webp', 
      blogger: 'NexTash', 
      blog_intro: 'Reduce spend with best practices...', 
      category: 'Cloud', 
      published_on: '2024-08-05', 
      showOnHome: false
    },
  ])

  // Getters
  const getBlogs = computed(() => blogs.value)
  const getBlogById = computed(() => (id) => blogs.value.find(blog => blog.id === id))
  const getBlogBySlug = computed(() => (slug) => blogs.value.find(blog => blog.slug === slug))
  const getBlogsByCategory = computed(() => (category) => 
    blogs.value.filter(blog => blog.category.toLowerCase() === category.toLowerCase())
  )
  const getLatestBlogs = computed(() => (limit = 3) => 
    [...blogs.value]
      .sort((a, b) => new Date(b.published_on) - new Date(a.published_on))
      .slice(0, limit)
  )

  // Actions
  const addBlog = (blog) => {
    const newId = Math.max(...blogs.value.map(b => b.id)) + 1
    blogs.value.push({ ...blog, id: newId })
  }

  const fetchBlogs = async () => {
    // Simulate API call
    try {
      // In real app, this would be an API call
      // const response = await api.getBlogs()
      // blogs.value = response.data
      console.log('Blogs loaded from store')
    } catch (error) {
      console.error('Error fetching blogs:', error)
    }
  }

  return {
    // State
    blogs,
    
    // Getters
    getBlogs,
    getBlogById,
    getBlogBySlug,
    getBlogsByCategory,
    getLatestBlogs,
    
    // Actions
    addBlog,
    fetchBlogs
  }
})
