<template>
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
    <Cta />
    <!-- CTA -->

    <!-- FOOTER -->
    <Footer />
    <!-- FOOTER -->
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '@/layout/Navbar.vue'
import Sidebar from '@/layout/Sidebar.vue'
import Footer from '@/layout/Footer.vue'
import Cta from "@/components/Cta.vue";

const isLoading = ref(true)
const loadingProgress = ref(0)

const startLoading = () => {
  const interval = setInterval(() => {
    loadingProgress.value++
    if (loadingProgress.value >= 100) {
      clearInterval(interval)
      setTimeout(() => {
        isLoading.value = false
      }, 500)
    }
  }, 10)
}

onMounted(() => {
  startLoading()
})

</script>