<template>
  <div class="team-member-card" :class="cardClass" data-aos="fade-up" data-aos-duration="1000">
    <div class="member-image">
      <img :src="image" :alt="name" class="image" />
      <div class="member-overlay">
        <div class="social-links">
          <a v-if="linkedin" :href="linkedin" target="_blank" class="social-link linkedin">
            <i class="bx bxl-linkedin"></i>
          </a>
          <a v-if="twitter" :href="twitter" target="_blank" class="social-link twitter">
            <i class="bx bxl-twitter"></i>
          </a>
          <a v-if="github" :href="github" target="_blank" class="social-link github">
            <i class="bx bxl-github"></i>
          </a>
          <a v-if="email" :href="`mailto:${email}`" class="social-link email">
            <i class="bx bx-envelope"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="member-info">
      <h3 class="member-name">{{ name }}</h3>
      <p class="member-position">{{ position }}</p>
      <p class="member-description">{{ description }}</p>
      <div class="member-skills">
        <span v-for="(skill, index) in skills" :key="index" class="skill">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamMemberCard',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    skills: {
      type: Array,
      default: () => []
    },
    linkedin: {
      type: String,
      default: ''
    },
    twitter: {
      type: String,
      default: ''
    },
    github: {
      type: String,
      default: ''
    },
    email: {
      type: String,
      default: ''
    },
    variant: {
      type: String,
      default: 'default', // default, featured, compact
      validator: value => ['default', 'featured', 'compact'].includes(value)
    }
  },
  computed: {
    cardClass() {
      return {
        'team-member-card--featured': this.variant === 'featured',
        'team-member-card--compact': this.variant === 'compact'
      }
    }
  }
}
</script>