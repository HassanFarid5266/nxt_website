<template>
  <aside class="sidebar" :class="{ active: isOpen }" id="sidebar">
    <div class="boxed">
      <div class="menus-row">
        <div class="col-left">
          <h4 class="section-subtitle">Navigate</h4>
          <ul class="menu-list list" type="none">
            <li class="list-item">
              <router-link to="/about-us" class="list-link" @click="toggleSidebar"> About </router-link>
            </li>
            <li class="list-item">
              <router-link to="/services" class="list-link" @click="toggleSidebar"> Services </router-link>
            </li>
            <li class="list-item">
              <router-link to="/projects" class="list-link" @click="toggleSidebar"> Projects </router-link>
            </li>
            <li class="list-item">
              <a href="https://store.nextash.com/" class="list-link" target="_blank">
                Marketplace <span class="bx bx-right-arrow-alt icon"></span>
              </a>
            </li>
            <li class="list-item">
              <router-link to="/contact-us" class="list-link" @click="toggleSidebar"> Contact </router-link>
            </li>
            <li class="list-item">
              <router-link to="/team" class="list-link" @click="toggleSidebar"> Team </router-link>
            </li>
            <li class="list-item">
              <router-link to="/careers" class="list-link" @click="toggleSidebar"> Career </router-link>
            </li>
            <li class="list-item">
              <router-link to="/blogs" class="list-link" @click="toggleSidebar"> Blogs </router-link>
            </li>
          </ul>
        </div>
        <div class="col-right">
          <h4 class="section-subtitle">Policies</h4>
          <ul class="list policies-list" type="none">
            <li class="list-item">
              <router-link to="/terms-and-conditions" class="list-link" @click="toggleSidebar">Terms And Conditions</router-link>
            </li>
            <li class="list-item">
              <router-link to="/privacy-policy" class="list-link" @click="toggleSidebar">Privacy Policy</router-link>
            </li>
            <li class="list-item">
              <router-link to="/cookies-policy" class="list-link" @click="toggleSidebar">Cookies Policy</router-link>
            </li>
            <li class="list-item">
              <router-link to="/refunds-policy" class="list-link" @click="toggleSidebar">Refund Policy</router-link>
            </li>
          </ul>
          <h4 class="section-subtitle">Follow us</h4>
          <div class="social-links">
            <a href="https://www.facebook.com/nextash" target="_blank" class="bx bxl-facebook-square social-icon"></a>
            <a href="https://www.pinterest.com/nextashinc" target="_blank" class="bx bxl-pinterest social-icon"></a>
            <a href="https://medium.com/@nextash" target="_blank" class="bx bxl-medium social-icon"></a>
            <a href="https://www.linkedin.com/company/nextash/" target="_blank" class="bx bxl-linkedin social-icon"></a>
            <a href="https://www.instagram.com/nextashinc/" target="_blank" class="bx bxl-instagram social-icon"></a>
            <a href="https://stackoverflow.com/users/19127111/nextash" target="_blank"
              class="bx bxl-stack-overflow social-icon"></a>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import { useSidebarStore } from '@/stores/sidebar'

export default {
  name: 'Sidebar',
  computed: {
    isOpen() {
      return useSidebarStore().isOpen
    }
  },
  watch: {
    isOpen(newVal) {
      if (newVal) {
        document.body.style.overflowY = 'hidden'
        document.documentElement.style.overflowY = 'hidden'
      } else {
        document.body.style.overflowY = 'auto'
        document.documentElement.style.overflowY = 'auto'
      }
    }
  },
  methods: {
    toggleSidebar() {
      const sidebarStore = useSidebarStore()
      sidebarStore.toggle()
    }
  }
}
</script>
