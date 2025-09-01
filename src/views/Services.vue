<template>
  <main>
    <SEO 
      title="Our Services - NexTash"
      description="Discover our comprehensive range of digital services including web development, mobile apps, cloud solutions, and more."
      keywords="web development, mobile apps, cloud solutions, digital services, software development"
    />
    
    <section class="page-header">
      <div class="boxed">
        <div class="page-header-content">
          <b class="section-badge">Services</b>
          <h1 class="section-title">Our Digital Solutions</h1>
          <p class="section-desc">
            We provide comprehensive digital solutions to help businesses thrive in the modern world. 
            From web development to cloud infrastructure, we've got you covered.
          </p>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="boxed">
        <div class="row-cards">
          <ServiceCard
            v-for="service in services"
            :key="service.id"
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
            :icon-bg-color="service.iconBgColor"
            :features="service.features"
            :link="service.link"
            :variant="service.variant"
          />
        </div>
      </div>
    </section>

    <section class="section bg-light">
      <div class="boxed">
        <div class="section-header text-center">
          <b class="section-badge">Why Choose Us</b>
          <h2 class="section-title">Excellence in Every Project</h2>
          <p class="section-desc">
            We deliver exceptional results through our proven methodology and dedicated team.
          </p>
        </div>
        
        <div class="row-cards">
          <div class="card feature" data-aos="fade-up" data-aos-duration="1000">
            <div class="card-icon"><i class="bx bx-check-shield"></i></div>
            <h3 class="card-title">Quality Assurance</h3>
            <p class="card-desc">Rigorous testing and quality checks ensure your project meets the highest standards.</p>
          </div>
          
          <div class="card feature" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="card-icon"><i class="bx bx-time"></i></div>
            <h3 class="card-title">Timely Delivery</h3>
            <p class="card-desc">We respect deadlines and deliver projects on time, every time.</p>
          </div>
          
          <div class="card feature" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div class="card-icon"><i class="bx bx-support"></i></div>
            <h3 class="card-title">24/7 Support</h3>
            <p class="card-desc">Round-the-clock support to help you whenever you need assistance.</p>
          </div>
          
          <div class="card feature" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="card-icon"><i class="bx bx-trending-up"></i></div>
            <h3 class="card-title">Scalable Solutions</h3>
            <p class="card-desc">Future-proof solutions that grow with your business needs.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section cta-section bg-one">
      <div class="boxed text-center">
        <h2 class="section-title">Ready to Get Started?</h2>
        <p class="section-desc">Let's discuss your project and find the perfect solution for your business.</p>
        <router-link to="/contact-us" class="btn-contact">Get Free Consultation</router-link>
      </div>
    </section>
  </main>
</template>

<script>
import SEO from '@/components/SEO.vue'
import ServiceCard from '@/components/ServiceCard.vue'

export default {
  name: 'Services',
  components: { SEO, ServiceCard },
  data() {
    return {
      services: [
        { id: 1, title: 'Web Development', description: 'Custom web applications built with modern technologies and best practices.', icon: 'bx bx-code-alt', iconBgColor: '#ff0000', features: ['Responsive Design', 'SEO Optimized', 'Fast Performance', 'Modern UI/UX'], link: '/services/web-development', variant: 'featured' },
        { id: 2, title: 'Mobile App Development', description: 'Native and cross-platform mobile applications for iOS and Android.', icon: 'bx bx-mobile-alt', iconBgColor: '#007bff', features: ['Native Performance', 'Cross-platform', 'App Store Ready', 'Push Notifications'], link: '/services/mobile-app-development', variant: 'default' },
        { id: 3, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration services.', icon: 'bx bx-cloud', iconBgColor: '#28a745', features: ['AWS/Azure/GCP', 'Auto-scaling', 'Cost Optimization', 'Security First'], link: '/services/cloud-hosting', variant: 'default' },
        { id: 4, title: 'DevOps Services', description: 'Streamline your development and deployment processes.', icon: 'bx bx-cog', iconBgColor: '#6f42c1', features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring', 'Automation'], link: '/services/devops', variant: 'default' },
        { id: 5, title: 'Digital Marketing', description: 'Data-driven digital marketing strategies to grow your business.', icon: 'bx bx-bullhorn', iconBgColor: '#fd7e14', features: ['SEO/SEM', 'Social Media', 'Content Marketing', 'Analytics'], link: '/services/digital-marketing', variant: 'default' },
        { id: 6, title: 'UI/UX Design', description: 'Beautiful and intuitive user interfaces that enhance user experience.', icon: 'bx bx-palette', iconBgColor: '#e83e8c', features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'], link: '/services/graphics-designing', variant: 'default' }
      ]
    }
  }
}
</script>
