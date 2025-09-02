<template>
  <div class="project-card" :class="cardClass" data-aos="fade-up" data-aos-duration="1000">
    <div class="project-image">
      <img :src="image" :alt="title" class="image" />
      <div class="project-overlay">
        <div class="overlay-content">
          <h3 class="project-title">{{ title }}</h3>
          <p class="project-category">{{ category }}</p>
          <div class="project-actions">
            <button @click="viewProject" class="btn-view">
              <i class="bx bx-eye"></i> View
            </button>
            <button v-if="demoLink" @click="openDemo" class="btn-demo">
              <i class="bx bx-link-external"></i> Demo
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="project-info">
      <h4 class="project-name">{{ title }}</h4>
      <p class="project-description">{{ description }}</p>
      <div class="project-tags">
        <span v-for="(tag, index) in tags" :key="index" class="tag">
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
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
    category: {
      type: String,
      required: true
    },
    tags: {
      type: Array,
      default: () => []
    },
    demoLink: {
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
        'project-card--featured': this.variant === 'featured',
        'project-card--compact': this.variant === 'compact'
      }
    }
  },
  methods: {
    viewProject() {
      this.$router.push(`/projects/${this.id}`)
    },
    openDemo() {
      if (this.demoLink) {
        window.open(this.demoLink, '_blank')
      }
    }
  }
}
</script>
