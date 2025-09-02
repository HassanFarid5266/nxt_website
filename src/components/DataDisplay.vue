<template>
  <div class="data-display">
    <h3>{{ title }}</h3>
    
    <!-- Projects Section -->
    <div v-if="showProjects" class="section">
      <h4>Projects ({{ projectsStore.getProjects.length }})</h4>
      <div class="projects-grid">
        <div v-for="project in projectsStore.getProjects" :key="project.id" class="project-card">
          <h5>{{ project.name }}</h5>
          <p>{{ project.category }}</p>
          <p>{{ project.description.substring(0, 100) }}...</p>
        </div>
      </div>
    </div>

    <!-- Employees Section -->
    <div v-if="showEmployees" class="section">
      <h4>Team Members ({{ employeesStore.getEmployees.length }})</h4>
      <div class="employees-grid">
        <div v-for="employee in employeesStore.getEmployees" :key="employee.id" class="employee-card">
          <h5>{{ employee.firstName }} {{ employee.lastName }}</h5>
          <p>{{ employee.designation }}</p>
        </div>
      </div>
    </div>

    <!-- Blogs Section -->
    <div v-if="showBlogs" class="section">
      <h4>Latest Blogs ({{ blogsStore.getBlogs.length }})</h4>
      <div class="blogs-grid">
        <div v-for="blog in blogsStore.getLatestBlogs(3)" :key="blog.id" class="blog-card">
          <h5>{{ blog.title }}</h5>
          <p>{{ blog.category }}</p>
          <p>{{ blog.blog_intro }}</p>
        </div>
      </div>
    </div>

    <!-- Testimonials Section -->
    <div v-if="showTestimonials" class="section">
      <h4>Client Feedback ({{ testimonialsStore.getTestimonials.length }})</h4>
      <div class="testimonials-grid">
        <div v-for="testimonial in testimonialsStore.getTestimonials" :key="testimonial.full_name" class="testimonial-card">
          <h5>{{ testimonial.full_name }}</h5>
          <p>{{ testimonial.designation }}</p>
          <p>{{ testimonial.feedback.substring(0, 100) }}...</p>
          <div class="stars">
            <span v-for="n in testimonial.stars" :key="n" class="star">⭐</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="actions">
      <button @click="refreshData" class="btn">Refresh Data</button>
      <button @click="addSampleData" class="btn">Add Sample Data</button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { 
  useProjectsStore, 
  useEmployeesStore, 
  useBlogsStore, 
  useTestimonialsStore 
} from '@/stores'

// Props
const props = defineProps({
  title: {
    type: String,
    default: 'Data Display Component'
  },
  showProjects: {
    type: Boolean,
    default: true
  },
  showEmployees: {
    type: Boolean,
    default: true
  },
  showBlogs: {
    type: Boolean,
    default: true
  },
  showTestimonials: {
    type: Boolean,
    default: true
  }
})

// Initialize stores
const projectsStore = useProjectsStore()
const employeesStore = useEmployeesStore()
const blogsStore = useBlogsStore()
const testimonialsStore = useTestimonialsStore()

// Computed properties
const totalItems = computed(() => {
  let count = 0
  if (props.showProjects) count += projectsStore.getProjects.length
  if (props.showEmployees) count += employeesStore.getEmployees.length
  if (props.showBlogs) count += blogsStore.getBlogs.length
  if (props.showTestimonials) count += testimonialsStore.getTestimonials.length
  return count
})

// Methods
const refreshData = async () => {
  await Promise.all([
    projectsStore.fetchProjects(),
    employeesStore.fetchEmployees(),
    blogsStore.fetchBlogs(),
    testimonialsStore.fetchTestimonials()
  ])
}

const addSampleData = () => {
  // Add sample project
  projectsStore.addProject({
    name: 'Sample Project',
    category: 'Sample',
    description: 'This is a sample project added dynamically',
    images: ['/src/assets/images/projects/1.webp']
  })

  // Add sample employee
  employeesStore.addEmployee({
    firstName: 'Sample',
    lastName: 'Employee',
    designation: 'Sample Role',
    image: '/src/assets/images/team/3.webp'
  })

  // Add sample blog
  blogsStore.addBlog({
    slug: 'sample-blog',
    title: 'Sample Blog Post',
    meta_image: '/src/assets/images/blogs/1.webp',
    blogger: 'Sample Author',
    blog_intro: 'This is a sample blog post',
    category: 'Sample',
    published_on: new Date().toISOString().split('T')[0]
  })

  // Add sample testimonial
  testimonialsStore.addTestimonial({
    full_name: 'Sample Client',
    designation: 'Sample Position',
    image: '/src/assets/images/feedbacks/1.webp',
    animation: 'fade-up',
    feedback: 'This is a sample testimonial',
    stars: 5
  })
}
</script>