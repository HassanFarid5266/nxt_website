<template>
  <header class="navbar" :class="{ 'navbar-scroll': isScrolled }" id="navbar">
    <nav class="menu-items boxed">
      <router-link to="/" class="logo" @click.native="closeSidebar">
        <img src="@/assets/images/logos/logo.png" class="image" width="60" height="60" alt="NexTash Logo" />
      </router-link>
      <button type="button" class="menu-btn" :class="{ 'close-icon': isSidebarOpen }" @click="toggleSidebar">
        <span class="bar1"></span>
        <span class="bar2"></span>
      </button>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'

const isScrolled = ref(false)
const sidebarStore = useSidebarStore()

const isSidebarOpen = computed(() => sidebarStore.isOpen)

const handleScroll = () => {
  const position = 20
  isScrolled.value = window.pageYOffset > position || document.documentElement.scrollTop > position
}

const toggleSidebar = () => {
  sidebarStore.toggle()
}

const closeSidebar = () => {
  if (sidebarStore.isOpen) {
    sidebarStore.toggle()
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>