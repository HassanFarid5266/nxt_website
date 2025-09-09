<template>
  <main>
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="boxed">
        <div class="hero-content">
          <b class="section-badge">Portfolio</b>
          <h1 class="hero-title">Our Success Stories</h1>
          <p class="hero-description">
            Discover how we've helped businesses transform their digital presence with innovative solutions. 
            Each project represents our commitment to excellence and client success.
          </p>
        </div>
      </div>
    </section>

    <!-- FILTERS -->
    <section class="filters-section">
      <div class="boxed">
        <div class="filters">
          <button 
            v-for="category in categories" 
            :key="category.id"
            @click="filterByCategory(category.id)"
            :class="['filter-btn', { active: activeCategory === category.id }]"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </section>

    <!-- PROJECTS GRID -->
    <section class="projects-section">
      <div class="boxed">
        <div class="projects-grid">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :id="project.id"
            :title="project.title"
            :description="project.description"
            :image="project.image"
            :category="project.category"
            :tags="project.tags"
            :demo-link="project.demoLink"
            :variant="project.variant"
          />
        </div>
        
        <!-- LOAD MORE -->
        <div v-if="hasMoreProjects" class="load-more">
          <button @click="loadMoreProjects" class="btn-load-more">
            Load More Projects
          </button>
        </div>
      </div>
    </section>

    <!-- STATS SECTION -->
    <section class="stats-section">
      <div class="boxed">
        <div class="stats-grid">
          <div class="stat-item" data-aos="fade-up" data-aos-duration="1000">
            <div class="stat-number">{{ stats.projectsCompleted }}+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          
          <div class="stat-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="stat-number">{{ stats.happyClients }}+</div>
            <div class="stat-label">Happy Clients</div>
          </div>
          
          <div class="stat-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div class="stat-number">{{ stats.yearsExperience }}+</div>
            <div class="stat-label">Years Experience</div>
          </div>
          
          <div class="stat-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="stat-number">{{ stats.technologiesUsed }}+</div>
            <div class="stat-label">Technologies Used</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta-section">
      <div class="boxed">
        <div class="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's create something amazing together. Our team is ready to bring your vision to life.</p>
          <div class="cta-buttons">
            <router-link to="/contact-us" class="btn-primary">Start Your Project</router-link>
            <router-link to="/products" class="btn-secondary">View Our Products</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup>
import { ref, computed } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

const activeCategory = ref('all');
const projectsPerPage = ref(6);
const currentPage = ref(1);

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'saas', name: 'SaaS Platforms' },
  { id: 'design', name: 'UI/UX Design' }
];

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced features including inventory management, payment processing, and analytics dashboard.',
    image: '/src/assets/images/projects/1.webp',
    category: 'ecommerce',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    demoLink: 'https://demo-ecommerce.nextash.com',
    variant: 'featured'
  },
  {
    id: 2,
    title: 'Mobile Banking App',
    description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial insights.',
    image: '/src/assets/images/projects/2.webp',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Biometrics', 'Security'],
    demoLink: '',
    variant: 'default'
  },
  {
    id: 3,
    title: 'Project Management SaaS',
    description: 'Comprehensive project management tool with team collaboration, task tracking, and reporting features.',
    image: '/src/assets/images/projects/3.webp',
    category: 'saas',
    tags: ['Vue.js', 'Laravel', 'PostgreSQL', 'Redis'],
    demoLink: 'https://pm-demo.nextash.com',
    variant: 'default'
  },
  {
    id: 4,
    title: 'Restaurant Website',
    description: 'Modern restaurant website with online ordering, table reservations, and menu management system.',
    image: '/src/assets/images/projects/4.webp',
    category: 'web',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    demoLink: '',
    variant: 'default'
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    description: 'Mobile fitness app with workout tracking, progress monitoring, and social features for motivation.',
    image: '/src/assets/images/projects/5.webp',
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'HealthKit', 'Social'],
    demoLink: '',
    variant: 'default'
  },
  {
    id: 6,
    title: 'Corporate Dashboard',
    description: 'Business intelligence dashboard with real-time data visualization, KPI tracking, and reporting tools.',
    image: '/src/assets/images/projects/6.webp',
    category: 'web',
    tags: ['React', 'D3.js', 'Node.js', 'MySQL'],
    demoLink: 'https://dashboard-demo.nextash.com',
    variant: 'default'
  },
  {
    id: 7,
    title: 'Online Learning Platform',
    description: 'Educational platform with video courses, interactive quizzes, and progress tracking for students.',
    image: '/src/assets/images/projects/7.webp',
    category: 'saas',
    tags: ['Vue.js', 'Django', 'PostgreSQL', 'AWS'],
    demoLink: '',
    variant: 'default'
  },
  {
    id: 8,
    title: 'Real Estate Website',
    description: 'Property listing website with advanced search filters, virtual tours, and agent management system.',
    image: '/src/assets/images/projects/8.webp',
    category: 'web',
    tags: ['Vue.js', 'Laravel', 'MySQL', 'Google Maps'],
    demoLink: '',
    variant: 'default'
  }
];

const stats = {
  projectsCompleted: 150,
  happyClients: 80,
  yearsExperience: 5,
  technologiesUsed: 25
};

const filteredProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return projects.slice(0, currentPage.value * projectsPerPage.value);
  }
  return projects
    .filter(project => project.category === activeCategory.value)
    .slice(0, currentPage.value * projectsPerPage.value);
});

const hasMoreProjects = computed(() => {
  if (activeCategory.value === 'all') {
    return currentPage.value * projectsPerPage.value < projects.length;
  }
  const categoryProjects = projects.filter(project => project.category === activeCategory.value);
  return currentPage.value * projectsPerPage.value < categoryProjects.length;
});

const filterByCategory = (categoryId) => {
  activeCategory.value = categoryId;
  currentPage.value = 1;
};

const loadMoreProjects = () => {
  currentPage.value++;
};
</script>