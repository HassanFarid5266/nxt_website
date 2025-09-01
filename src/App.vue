<template>
  <div id="app">
    <!-- LOADING SCREEN -->
    <div class="loading-page" v-show="isLoading">
      <div class="counter">
        <div class="count">{{ loadingProgress }}%</div>
        <hr class="load-progress" :style="{ width: loadingProgress + '%' }" />
      </div>
    </div>
    <!-- LOADING SCREEN -->

    <!-- LINES BG -->
    <div class="lines">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <!-- LINES BG -->

    <!-- NAVBAR -->
    <Navbar />
    <!-- NAVBAR -->

    <!-- SIDEBAR -->
    <Sidebar />
    <!-- SIDEBAR -->

    <!-- ROUTER VIEW -->
    <router-view />

    <!-- CTA -->
    <section class="boxed card card-cta bg-one">
      <div class="card-body">
        <h3 class="card-title">Share Your Thoughts!</h3>
        <p class="card-desc">
          Interested in working with us? Have any questions?
        </p>
        <router-link to="/contact-us" class="btn-contact">Get Started</router-link>
      </div>
    </section>
    <!-- CTA -->

    <!-- FOOTER -->
    <Footer />
    <!-- FOOTER -->
  </div>
</template>

<script>
import Navbar from '@/layout/Navbar.vue'
import Sidebar from '@/layout/Sidebar.vue'
import Footer from '@/layout/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
    Footer
  },
  data() {
    return {
      isLoading: true,
      loadingProgress: 0
    }
  },
  mounted() {
    this.startLoading()
  },
  methods: {
    startLoading() {
      const interval = setInterval(() => {
        this.loadingProgress++
        if (this.loadingProgress >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            this.isLoading = false
          }, 500)
        }
      }, 10)
    }
  }
}
</script>