<template>
  <div class="blog-card" :class="cardClass" data-aos="fade-up" data-aos-duration="1000">
    <div class="blog-image">
      <img :src="image" :alt="title" class="image" />
      <div class="blog-category">{{ category }}</div>
      <div class="blog-date">
        <i class="bx bx-calendar"></i>
        {{ formatDate(date) }}
      </div>
    </div>
    <div class="blog-content">
      <h3 class="blog-title">{{ title }}</h3>
      <p class="blog-excerpt">{{ excerpt }}</p>
      <div class="blog-meta">
        <div class="author">
          <i class="bx bx-user"></i>
          {{ author }}
        </div>
        <div class="read-time">
          <i class="bx bx-time"></i>
          {{ readTime }} min read
        </div>
      </div>
      <div class="blog-tags">
        <span v-for="(tag, index) in tags" :key="index" class="tag">
          {{ tag }}
        </span>
      </div>
      <router-link :to="`/blog-post/${id}`" class="read-more">
        Read More <i class="bx bx-right-arrow-alt"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    title: {
      type: String,
      required: true
    },
    excerpt: {
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
    author: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    readTime: {
      type: Number,
      default: 5
    },
    tags: {
      type: Array,
      default: () => []
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
        'blog-card--featured': this.variant === 'featured',
        'blog-card--compact': this.variant === 'compact'
      }
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }
  }
}
</script>