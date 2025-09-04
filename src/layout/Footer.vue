<template>
  <section class="connect">
    <input type="checkbox" id="control">
    <label for="control">
      <div class="connect-items">
        <a target="_blank" href="https://wa.me/+9203083077165?text=Hello, i get your number from website, can we talk?"
          class="bx bxl-whatsapp whatsapp connect-item"></a>
        <a target="_blank" href="https://m.me/103835821916365" class="bx bxl-messenger messenger connect-item"></a>
        <a target="_blank" href="tel:+923083077165" class="bx bx-phone phone connect-item"></a>
        <a target="_blank" href="mailto:support@nextash.com" class="bx bx-envelope email connect-item"></a>
      </div>
      <div class="connect-btn bx bx-support"></div>
    </label>
  </section>
  <footer class="footer">
    <section class="footer-top">
      <div class="boxed">
        <div class="row-footer">
          <div class="col">
            <router-link to="/" class="logo" role="img" aria-label="NexTash">
              <div class="logo-square"></div>
              <img src="@/assets/images/logos/logo.png" width="70" height="70" class="image" alt="NexTash" />
            </router-link>
            <p class="description" style="width: 85%;">
              Empower your business for the digital era with our tailored strategies.
            </p>
          </div>
          <div class="col">
            <h3 class="heading" role="heading" aria-level="3">Information</h3>
            <ul type="none" class="footer-list">
              <li class="list-item">
                <router-link to="/about-us" class="list-link">About us</router-link>
              </li>
              <li class="list-item">
                <router-link to="/contact-us" class="list-link">Contact us</router-link>
              </li>
              <li class="list-item">
                <router-link to="/services" class="list-link">Services</router-link>
              </li>
              <li class="list-item">
                <router-link to="/team" class="list-link">Team</router-link>
              </li>
              <li class="list-item">
                <router-link to="/blogs" class="list-link">Blogs</router-link>
              </li>
              <li class="list-item">
                <router-link to="/projects" class="list-link">Projects</router-link>
              </li>
              <li class="list-item">
                <router-link to="/careers" class="list-link">Careers</router-link>
              </li>
              <li class="list-item">
                <router-link to="/faqs" class="list-link">Faqs</router-link>
              </li>
              <li class="list-item">
                <router-link to="/partners" class="list-link">Partners</router-link>
              </li>
            </ul>
          </div>
          <div class="col">
            <h3 class="heading" role="heading" aria-level="3">Subscribe</h3>
            <p class="description">
              Subscribe to our new feeds & stay tuned with NexTash updates.
            </p>
            <form @submit.prevent="submitNewsletter" class="input-group subscribe-form" id="newsletter_form">
              <input 
                type="email" 
                id="newsletter_email" 
                v-model="newsletterEmail"
                placeholder="Email Address..." 
                class="field" 
                required
              />
              <button type="submit" class="bx bx-send action-btn btn-send"></button>
            </form>
            <p id="newsletter_feedback" v-if="newsletterFeedback" :class="{ 'msg-success': !newsletterFeedback.includes('Snap'), 'msg-danger': newsletterFeedback.includes('Snap') }">{{ newsletterFeedback }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="footer-bottom">
      <div class="boxed" style="align-items: center;">
        <p class="copyright">
          &copy; 2024, All Right Reserved
          <router-link to="/" class="link">NexTash</router-link>
        </p>

        <div class="social-links">
          <a href="https://www.facebook.com/nextash" target="_blank" class="bx bxl-facebook-square social-icon"></a>
          <a href="https://www.pinterest.com/nextashinc" target="_blank" class="bx bxl-pinterest social-icon"></a>
          <a href="https://medium.com/@nextash" target="_blank" class="bx bxl-medium social-icon"></a>
          <a href="https://www.linkedin.com/company/nextash/" target="_blank" class="bx bxl-linkedin social-icon"></a>
          <a href="https://www.instagram.com/nextashinc/" target="_blank" class="bx bxl-instagram social-icon"></a>
          <a href="https://stackoverflow.com/users/19127111/nextash" target="_blank"
            class="bx bxl-stack-overflow social-icon"></a>
        </div>

        <ul class="inline-list" type="none">
          <li class="list-item">
            <router-link to="/terms-and-conditions" class="list-link">Terms</router-link>
          </li>
          <li class="list-item">
            <router-link to="/privacy-policy" class="list-link">Privacy</router-link>
          </li>
          <li class="list-item">
            <router-link to="/cookies-policy" class="list-link">Cookies</router-link>
          </li>
        </ul>
      </div>
    </section>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      newsletterEmail: '',
      newsletterFeedback: ''
    }
  },
  methods: {
    async submitNewsletter() {
      try {
        this.newsletterFeedback = 'Thank you for subscribing!'
        this.newsletterEmail = ''
        
        setTimeout(() => {
          this.newsletterFeedback = ''
        }, 3000)
      } catch (error) {
        this.newsletterFeedback = 'Something went wrong. Please try again.'
      }
    }
  }
}
</script>
