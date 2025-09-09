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
            <router-link to="/services" class="btn-secondary">View Our Services</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      activeCategory: 'all',
      projectsPerPage: 6,
      currentPage: 1,
      categories: [
        { id: 'all', name: 'All Projects' },
        { id: 'web', name: 'Web Development' },
        { id: 'mobile', name: 'Mobile Apps' },
        { id: 'ecommerce', name: 'E-commerce' },
        { id: 'saas', name: 'SaaS Platforms' },
        { id: 'design', name: 'UI/UX Design' }
      ],
      projects: [
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
      ],
      stats: {
        projectsCompleted: 150,
        happyClients: 80,
        yearsExperience: 5,
        technologiesUsed: 25
      }
    }
  },
  computed: {
    filteredProjects() {
      if (this.activeCategory === 'all') {
        return this.projects.slice(0, this.currentPage * this.projectsPerPage)
      }
      return this.projects
        .filter(project => project.category === this.activeCategory)
        .slice(0, this.currentPage * this.projectsPerPage)
    },
    
    hasMoreProjects() {
      if (this.activeCategory === 'all') {
        return this.currentPage * this.projectsPerPage < this.projects.length
      }
      const categoryProjects = this.projects.filter(project => project.category === this.activeCategory)
      return this.currentPage * this.projectsPerPage < categoryProjects.length
    }
  },
  methods: {
    filterByCategory(categoryId) {
      this.activeCategory = categoryId
      this.currentPage = 1
    },
    
    loadMoreProjects() {
      this.currentPage++
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 6rem 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.section-badge {
  background: #ff0000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.25rem;
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
}

.filters-section {
  padding: 2rem 0;
  background: #fff;
  border-bottom: 1px solid #e9ecef;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  border: 2px solid #e9ecef;
  background: #fff;
  color: #666;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover,
.filter-btn.active {
  border-color: #ff0000;
  background: #ff0000;
  color: #fff;
}

.projects-section {
  padding: 5rem 0;
  background: #fff;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.load-more {
  text-align: center;
}

.btn-load-more {
  background: transparent;
  border: 2px solid #ff0000;
  color: #ff0000;
  padding: 1rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-load-more:hover {
  background: #ff0000;
  color: #fff;
}

.stats-section {
  padding: 5rem 0;
  background: #f8f9fa;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  text-align: center;
}

.stat-item {
  padding: 2rem;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #ff0000;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.125rem;
  color: #666;
  font-weight: 500;
}

.cta-section {
  padding: 5rem 0;
  background: linear-gradient(135deg, #ff0000 0%, #cc0000 100%);
  color: #fff;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #fff;
  color: #ff0000;
}

.btn-primary:hover {
  background: #f8f9fa;
  transform: translateY(-2px);
  color: #ff0000;
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-secondary:hover {
  background: #fff;
  color: #ff0000;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style>
