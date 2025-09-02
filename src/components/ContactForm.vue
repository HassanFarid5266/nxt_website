<template>
  <div class="contact-form">
    <form @submit.prevent="submitForm" class="form">
      <div class="form-group">
        <label for="name" class="form-label">Full Name *</label>
        <input
          id="name"
          v-model="formData.name"
          type="text"
          class="form-input"
          :class="{ 'error': errors.name }"
          placeholder="Enter your full name"
          required
        />
        <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email Address *</label>
        <input
          id="email"
          v-model="formData.email"
          type="email"
          class="form-input"
          :class="{ 'error': errors.email }"
          placeholder="Enter your email address"
          required
        />
        <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
      </div>

      <div class="form-group">
        <label for="phone" class="form-label">Phone Number</label>
        <input
          id="phone"
          v-model="formData.phone"
          type="tel"
          class="form-input"
          :class="{ 'error': errors.phone }"
          placeholder="Enter your phone number"
        />
        <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
      </div>

      <div class="form-group">
        <label for="subject" class="form-label">Subject *</label>
        <select
          id="subject"
          v-model="formData.subject"
          class="form-select"
          :class="{ 'error': errors.subject }"
          required
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="services">Services Information</option>
          <option value="quote">Request Quote</option>
          <option value="support">Technical Support</option>
          <option value="partnership">Partnership</option>
          <option value="other">Other</option>
        </select>
        <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Message *</label>
        <textarea
          id="message"
          v-model="formData.message"
          class="form-textarea"
          :class="{ 'error': errors.message }"
          rows="5"
          placeholder="Tell us about your project or inquiry"
          required
        ></textarea>
        <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
      </div>

      <div class="form-group">
        <label class="checkbox-label">
          <input
            v-model="formData.newsletter"
            type="checkbox"
            class="checkbox"
          />
          <span class="checkmark"></span>
          Subscribe to our newsletter for updates
        </label>
      </div>

      <div class="form-group">
        <button type="submit" class="submit-btn" :disabled="isSubmitting">
          <span v-if="isSubmitting" class="loading-spinner"></span>
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </div>

      <div v-if="submitStatus" class="submit-status" :class="submitStatus.type">
        {{ submitStatus.message }}
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        newsletter: false
      },
      errors: {},
      isSubmitting: false,
      submitStatus: null
    }
  },
  methods: {
    validateForm() {
      this.errors = {}
      
      if (!this.formData.name.trim()) {
        this.errors.name = 'Name is required'
      }
      
      if (!this.formData.email.trim()) {
        this.errors.email = 'Email is required'
      } else if (!this.isValidEmail(this.formData.email)) {
        this.errors.email = 'Please enter a valid email address'
      }
      
      if (this.formData.phone && !this.isValidPhone(this.formData.phone)) {
        this.errors.phone = 'Please enter a valid phone number'
      }
      
      if (!this.formData.subject) {
        this.errors.subject = 'Subject is required'
      }
      
      if (!this.formData.message.trim()) {
        this.errors.message = 'Message is required'
      }
      
      return Object.keys(this.errors).length === 0
    },
    
    isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
    },
    
    isValidPhone(phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/
      return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''))
    },
    
    async submitForm() {
      if (!this.validateForm()) {
        return
      }
      
      this.isSubmitting = true
      this.submitStatus = null
      
      try {
        // Here you would typically make an API call
        // For now, we'll simulate a successful submission
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        this.submitStatus = {
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        }
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          newsletter: false
        }
        
        // Emit success event
        this.$emit('form-submitted', this.formData)
        
      } catch (error) {
        this.submitStatus = {
          type: 'error',
          message: 'Sorry, something went wrong. Please try again or contact us directly.'
        }
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>
