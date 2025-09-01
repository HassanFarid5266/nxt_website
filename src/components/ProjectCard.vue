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

<style scoped>
.project-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-overlay {
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

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: #fff;
  padding: 1rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.project-category {
  color: #ccc;
  margin-bottom: 1rem;
}

.project-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.btn-view, .btn-demo {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-view {
  background: #ff0000;
  color: #fff;
}

.btn-demo {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-view:hover {
  background: #cc0000;
  transform: translateY(-2px);
}

.btn-demo:hover {
  background: #fff;
  color: #000;
}

.project-info {
  padding: 1.5rem;
}

.project-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.project-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  background: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
}

/* Variants */
.project-card--featured {
  border: 2px solid #ff0000;
  transform: scale(1.05);
}

.project-card--compact .project-image {
  height: 200px;
}

.project-card--compact .project-info {
  padding: 1rem;
}

.project-card--compact .project-name {
  font-size: 1.1rem;
}
</style>
