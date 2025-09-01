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

<style scoped>
.blog-card {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}

.blog-image {
  position: relative;
  overflow: hidden;
  height: 250px;
}

.blog-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.blog-card:hover .blog-image img {
  transform: scale(1.1);
}

.blog-category {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #ff0000;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.blog-date {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.blog-content {
  padding: 1.5rem;
}

.blog-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
  line-height: 1.4;
}

.blog-excerpt {
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.875rem;
  color: #888;
}

.author, .read-time {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.blog-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  background: #f0f0f0;
  color: #666;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
}

.read-more {
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

.read-more:hover {
  background: linear-gradient(135deg, #cc0000, #990000);
  transform: translateY(-2px);
  color: #fff;
}

.read-more i {
  margin-left: 0.5rem;
  transition: transform 0.3s ease;
}

.read-more:hover i {
  transform: translateX(3px);
}

/* Variants */
.blog-card--featured {
  border: 2px solid #ff0000;
  transform: scale(1.05);
}

.blog-card--featured .blog-image {
  height: 300px;
}

.blog-card--featured .blog-title {
  font-size: 1.5rem;
}

.blog-card--compact .blog-image {
  height: 200px;
}

.blog-card--compact .blog-content {
  padding: 1rem;
}

.blog-card--compact .blog-title {
  font-size: 1.1rem;
}
</style>
