<template>
  <header class="navbar" :class="{ 'navbar-scroll': isScrolled }" id="navbar">
    <nav class="menu-items boxed">
      <router-link to="/" class="logo">
        <img src="@/assets/images/logos/logo.png" class="image" width="60" height="60" @click="toggleSidebar" alt="NexTash Logo" />
      </router-link>
      <button type="button" class="menu-btn" :class="{ 'close-icon': isSidebarOpen }" @click="toggleSidebar">
        <span class="bar1"></span>
        <span class="bar2"></span>
      </button>
    </nav>
  </header>
</template>

<script>
import { useSidebarStore } from '@/stores/sidebar'

export default {
  name: 'Navbar',
  data() {
    return {
      isScrolled: false
    }
  },
  computed: {
    isSidebarOpen() {
      return useSidebarStore().isOpen
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const position = 20
      this.isScrolled = window.pageYOffset > position || document.documentElement.scrollTop > position
    },
    toggleSidebar() {
      const sidebarStore = useSidebarStore()
      sidebarStore.toggle()
    }
  }
}
</script>
