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

<style scoped>
.team-member-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  text-align: center;
}

.team-member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.member-image {
  position: relative;
  overflow: hidden;
  height: 280px;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.team-member-card:hover .member-image img {
  transform: scale(1.1);
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.team-member-card:hover .member-overlay {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 1.2rem;
}

.social-link:hover {
  transform: translateY(-3px);
  color: #fff;
}

.social-link.linkedin {
  background: #0077b5;
}

.social-link.twitter {
  background: #1da1f2;
}

.social-link.github {
  background: #333;
}

.social-link.email {
  background: #ff0000;
}

.member-info {
  padding: 1.5rem;
}

.member-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.member-position {
  color: #ff0000;
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.skill {
  background: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
}

/* Variants */
.team-member-card--featured {
  border: 2px solid #ff0000;
  transform: scale(1.05);
}

.team-member-card--compact .member-image {
  height: 220px;
}

.team-member-card--compact .member-info {
  padding: 1rem;
}

.team-member-card--compact .member-name {
  font-size: 1.25rem;
}
</style>
