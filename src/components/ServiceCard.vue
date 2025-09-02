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