<template>
  <main>
    <SEO 
      title="Contact Us - NexTash"
      description="Get in touch with our team for any inquiries, project discussions, or support. We're here to help you succeed."
      keywords="contact, support, inquiry, project discussion, NexTash contact"
    />
    
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="boxed">
        <div class="hero-content">
          <b class="section-badge">Contact</b>
          <h1 class="hero-title">Get In Touch</h1>
          <p class="hero-description">
            Ready to start your next project? Have questions about our services? 
            We'd love to hear from you. Let's discuss how we can help your business grow.
          </p>
        </div>
      </div>
    </section>

    <!-- CONTACT CONTENT -->
    <section class="contact-content">
      <div class="boxed">
        <div class="contact-grid">
          <!-- CONTACT FORM -->
          <div class="contact-form-section">
            <h2>Send us a Message</h2>
            <p>Fill out the form below and we'll get back to you within 24 hours.</p>
            <ContactForm @form-submitted="handleFormSubmitted" />
          </div>

          <!-- CONTACT INFO -->
          <div class="contact-info-section">
            <h2>Contact Information</h2>
            <p>Here are the different ways you can reach us:</p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="bx bx-envelope"></i>
                </div>
                <div class="method-content">
                  <h3>Email</h3>
                  <p>support@nextash.com</p>
                  <p>info@nextash.com</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="bx bx-phone"></i>
                </div>
                <div class="method-content">
                  <h3>Phone</h3>
                  <p>+92 308 307 7165</p>
                  <p>+92 308 307 7165</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="bx bx-map"></i>
                </div>
                <div class="method-content">
                  <h3>Address</h3>
                  <p>NexTash Inc.</p>
                  <p>Lahore, Pakistan</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="bx bx-time"></i>
                </div>
                <div class="method-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>

            <!-- SOCIAL LINKS -->
            <div class="social-section">
              <h3>Follow Us</h3>
              <div class="social-links">
                <a href="https://www.facebook.com/nextash" target="_blank" class="social-link facebook">
                  <i class="bx bxl-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/company/nextash/" target="_blank" class="social-link linkedin">
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/nextashinc/" target="_blank" class="social-link instagram">
                  <i class="bx bxl-instagram"></i>
                </a>
                <a href="https://twitter.com/nextashinc" target="_blank" class="social-link twitter">
                  <i class="bx bxl-twitter"></i>
                </a>
                <a href="https://github.com/nextash" target="_blank" class="social-link github">
                  <i class="bx bxl-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ SECTION -->
    <section class="faq-section">
      <div class="boxed">
        <div class="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find quick answers to common questions about our services and processes.</p>
        </div>
        
        <div class="faq-grid">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <i class="bx" :class="faq.isOpen ? 'bx-chevron-up' : 'bx-chevron-down'"></i>
            </div>
            <div class="faq-answer" :class="{ 'open': faq.isOpen }">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA SECTION -->
    <section class="cta-section">
      <div class="boxed">
        <div class="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss your requirements and create something amazing together.</p>
          <div class="cta-buttons">
            <router-link to="/services" class="btn-secondary">View Our Services</router-link>
            <router-link to="/projects" class="btn-primary">See Our Work</router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SEO from '@/components/SEO.vue'
import ContactForm from '@/components/ContactForm.vue'

export default {
  name: 'ContactUs',
  components: {
    SEO,
    ContactForm
  },
  data() {
    return {
      faqs: [
        {
          question: 'How long does it take to complete a project?',
          answer: 'Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while complex applications can take 3-6 months. We\'ll provide a detailed timeline during our initial consultation.',
          isOpen: false
        },
        {
          question: 'What is your pricing structure?',
          answer: 'We offer flexible pricing based on project requirements. We provide detailed quotes after understanding your needs. We also offer maintenance packages for ongoing support.',
          isOpen: false
        },
        {
          question: 'Do you provide ongoing support after project completion?',
          answer: 'Yes, we offer various support packages including maintenance, updates, and technical support. We believe in building long-term relationships with our clients.',
          isOpen: false
        },
        {
          question: 'What technologies do you use?',
          answer: 'We use modern, industry-standard technologies including React, Vue.js, Node.js, Python, AWS, and more. We choose the best technology stack for each specific project.',
          isOpen: false
        },
        {
          question: 'Can you work with existing systems?',
          answer: 'Absolutely! We can integrate with your existing systems, databases, and APIs. We\'ll analyze your current setup and recommend the best integration approach.',
          isOpen: false
        }
      ]
    }
  },
  methods: {
    handleFormSubmitted(formData) {
      console.log('Form submitted:', formData)
    },
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>
