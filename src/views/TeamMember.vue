<template>
  <main>
    <section class="page-head">
      <div class="boxed">
        <span class="page-badge">Meet the Dream Team</span>
        <h1 class="page-title">Uniting Brilliance, Passion, and Creativity!</h1>
        <p class="page-desc">
          - We're a diverse team that works as fancies attention to details and
          aspires to design the dent in the universe.
        </p>
      </div>
    </section>

    <main class="boxed">
      <section class="row-cols-2">
        <div
          class="col"
          data-aos-duration="1000"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <div class="image-box">
            <div class="square-1"></div>
            <div class="square-2"></div>
            <div class="image-lg card card-hover">
              <img
                :data-src="member.image"
                :src="member.image"
                class="image team-avatar lazy-load"
                :alt="`${member.firstName} ${member.lastName}`"
              />
            </div>
          </div>
        </div>
        <div
          class="col"
          data-aos-duration="1000"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <b class="section-badge">{{ member.designation }}</b>
          <h3 class="section-title">{{ member.firstName }} {{ member.lastName }}</h3>
          <p class="section-desc">
            <span>{{ member.bio || 'A dedicated team member contributing to NexTash\'s success with passion and expertise.' }}</span>
          </p>
          
          <!-- Leadership specific details -->
          <div v-if="member.isLeadership" class="leadership-details">
            <h4 class="section-subtitle">Experience</h4>
            <p class="experience-text">{{ member.experience || 'Extensive experience in leadership and management' }}</p>
            
            <h4 class="section-subtitle">Contact</h4>
            <div class="contact-links">
              <a v-if="member.linkedin" :href="member.linkedin" class="contact-link" target="_blank" rel="noopener noreferrer">
                <i class="bx bxl-linkedin"></i> LinkedIn
              </a>
              <a v-if="member.email" :href="`mailto:${member.email}`" class="contact-link">
                <i class="bx bx-envelope"></i> Email
              </a>
            </div>
          </div>
        </div>
      </section>
      <br /><br /><br />
    </main>

    <!-- CTA Section -->
    <section class="boxed card card-cta bg-one">
      <div class="card-body">
        <h3 class="card-title">Interested in working with us!</h3>
        <p class="card-desc">
          Please visit our careers page for available job positions
        </p>
        <router-link to="/careers" class="btn-contact">Join Us</router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useEmployeesStore } from '@/stores'

const route = useRoute()
const employeesStore = useEmployeesStore()
const member = ref(null)

onMounted(() => {
  const memberId = parseInt(route.params.id)
  
  // Check in leadership first
  const leader = employeesStore.getLeaderById(memberId)
  if (leader) {
    member.value = leader
    return
  }
  
  // Then check in regular employees
  const employee = employeesStore.getEmployeeById(memberId)
  if (employee) {
    member.value = employee
    return
  }
  
  // If not found, redirect to team page
  // router.push('/team')
})
</script>