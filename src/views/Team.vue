<template>
  <main>
    <section class="page-head">
      <div class="boxed">
        <span class="page-badge">OUR STAFF</span>
        <h1 class="page-title">Meet Our Talented Team</h1>
        <p class="page-desc">
          Meet the brilliant minds behind NexTash, dedicated to empowering
          businesses for success in today’s digital world. With a passion for
          excellence and innovative solutions, our team is here to support your
          journey forward.
        </p>
      </div>
    </section>
    
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="boxed">
        <div class="hero-content">
          <b class="section-badge">Team</b>
          <h1 class="hero-title">Meet Our Team</h1>
          <p class="hero-description">
            We're a diverse team of passionate professionals dedicated to delivering exceptional digital solutions. 
            Our expertise spans across various technologies and industries.
          </p>
        </div>
      </div>
    </section>

    <!-- TEAM GRID -->
    <section class="team-section">
      <div class="boxed">
        <div class="team-grid">
          <TeamMemberCard
            v-for="member in employeesStore.getEmployees"
            :key="member.id"
            :id="member.id"
            :name="member.name"
            :position="member.position"
            :description="member.description"
            :image="member.image"
            :skills="member.skills"
            :linkedin="member.linkedin"
            :twitter="member.twitter"
            :github="member.github"
            :email="member.email"
            :variant="member.variant"
          />
        </div>
      </div>
    </section>

    <!-- VALUES SECTION -->
    <section class="values-section">
      <div class="boxed">
        <div class="section-header">
          <h2>Our Values</h2>
          <p>The principles that guide our work and relationships</p>
        </div>
        
        <div class="values-grid">
          <div class="value-item" data-aos="fade-up" data-aos-duration="1000">
            <div class="value-icon">
              <i class="bx bx-target-lock"></i>
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in everything we do, from code quality to client communication.</p>
          </div>
          
          <div class="value-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="value-icon">
              <i class="bx bx-lightbulb"></i>
            </div>
            <h3>Innovation</h3>
            <p>We embrace new technologies and creative solutions to solve complex problems.</p>
          </div>
          
          <div class="value-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            <div class="value-icon">
              <i class="bx bx-group"></i>
            </div>
            <h3>Collaboration</h3>
            <p>We believe in the power of teamwork and open communication to achieve great results.</p>
          </div>
          
          <div class="value-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            <div class="value-icon">
              <i class="bx bx-heart"></i>
            </div>
            <h3>Passion</h3>
            <p>We're passionate about technology and committed to helping our clients succeed.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta-section">
      <div class="boxed">
        <div class="cta-content">
          <h2>Join Our Team</h2>
          <p>We're always looking for talented individuals who share our passion for technology and innovation.</p>
          <router-link to="/careers" class="btn-primary">View Open Positions</router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import SEO from '@/components/SEO.vue'
import TeamMemberCard from '@/components/TeamMemberCard.vue'
import { useEmployeesStore } from '@/stores'

// Initialize stores
const employeesStore = useEmployeesStore()

// Lifecycle
onMounted(() => {
  employeesStore.fetchEmployees()
})
</script>
