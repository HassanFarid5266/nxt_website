<template>
  <div class="service-card" :class="cardClass" data-aos="fade-up" data-aos-duration="1000">
    <div class="card-header">
      <div class="icon-wrapper" :style="{ backgroundColor: iconBgColor }">
        <i :class="icon" class="service-icon"></i>
      </div>
      <h3 class="service-title">{{ title }}</h3>
    </div>
    <div class="card-body">
      <p class="service-description">{{ description }}</p>
      <ul v-if="features && features.length > 0" class="service-features">
        <li v-for="(feature, index) in features" :key="index" class="feature-item">
          <i class="bx bx-check feature-icon"></i>
          {{ feature }}
        </li>
      </ul>
    </div>
    <div class="card-footer">
      <router-link :to="link" class="btn-service">
        Learn More <i class="bx bx-right-arrow-alt"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    iconBgColor: {
      type: String,
      default: '#ff0000'
    },
    features: {
      type: Array,
      default: () => []
    },
    link: {
      type: String,
      default: '#'
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
        'service-card--featured': this.variant === 'featured',
        'service-card--compact': this.variant === 'compact'
      }
    }
  }
}
</script>

<style scoped>
.service-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.card-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.service-icon {
  font-size: 2rem;
  color: #fff;
}

.service-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0;
}

.service-description {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.service-features {
  list-style: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  color: #555;
}

.feature-icon {
  color: #28a745;
  margin-right: 0.5rem;
  font-size: 1.2rem;
}

.btn-service {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, #ff0000, #cc0000);
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-service:hover {
  background: linear-gradient(135deg, #cc0000, #990000);
  transform: translateY(-2px);
  color: #fff;
}

.btn-service i {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.btn-service:hover i {
  transform: translateX(3px);
}

/* Variants */
.service-card--featured {
  border: 2px solid #ff0000;
  transform: scale(1.05);
}

.service-card--compact {
  padding: 1.5rem;
}

.service-card--compact .service-title {
  font-size: 1.25rem;
}

.service-card--compact .icon-wrapper {
  width: 60px;
  height: 60px;
}

.service-card--compact .service-icon {
  font-size: 1.5rem;
}
</style>
