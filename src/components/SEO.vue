<template>
  <div>
    <!-- SEO Meta Tags -->
    <meta v-if="title" :content="title" property="og:title" />
    <meta v-if="description" :content="description" property="og:description" />
    <meta v-if="keywords" :content="keywords" name="keywords" />
    <meta v-if="author" :content="author" name="author" />
    <meta v-if="robots" :content="robots" name="robots" />
    
    <!-- Open Graph -->
    <meta v-if="ogType" :content="ogType" property="og:type" />
    <meta v-if="ogImage" :content="ogImage" property="og:image" />
    <meta v-if="ogUrl" :content="ogUrl" property="og:url" />
    
    <!-- Twitter Card -->
    <meta v-if="twitterCard" :content="twitterCard" name="twitter:card" />
    <meta v-if="twitterSite" :content="twitterSite" name="twitter:site" />
    <meta v-if="twitterCreator" :content="twitterCreator" name="twitter:creator" />
    
    <!-- Canonical URL -->
    <link v-if="canonical" :href="canonical" rel="canonical" />
  </div>
</template>

<script>
export default {
  name: 'SEO',
  props: {
    title: {
      type: String,
      default: 'NexTash - Partner for Your Digital Future'
    },
    description: {
      type: String,
      default: 'Empower your business for the digital era with our tailored strategies.'
    },
    keywords: {
      type: String,
      default: 'NexTash, digital solutions, business automation, software development'
    },
    author: {
      type: String,
      default: 'NexTash'
    },
    robots: {
      type: String,
      default: 'index, follow'
    },
    ogType: {
      type: String,
      default: 'website'
    },
    ogImage: {
      type: String,
      default: '/src/assets/images/logos/logo.png'
    },
    ogUrl: {
      type: String,
      default: ''
    },
    twitterCard: {
      type: String,
      default: 'summary_large_image'
    },
    twitterSite: {
      type: String,
      default: '@nextashinc'
    },
    twitterCreator: {
      type: String,
      default: '@nextashinc'
    },
    canonical: {
      type: String,
      default: ''
    }
  },
  mounted() {
    // Update document title
    if (this.title) {
      document.title = this.title
    }
    
    // Update meta tags dynamically
    this.updateMetaTags()
  },
  methods: {
    updateMetaTags() {
      // Update or create meta tags
      this.updateMetaTag('og:title', this.title)
      this.updateMetaTag('og:description', this.description)
      this.updateMetaTag('og:type', this.ogType)
      this.updateMetaTag('og:image', this.ogImage)
      this.updateMetaTag('og:url', this.ogUrl || window.location.href)
      this.updateMetaTag('twitter:card', this.twitterCard)
      this.updateMetaTag('twitter:site', this.twitterSite)
      this.updateMetaTag('twitter:creator', this.twitterCreator)
      this.updateMetaTag('keywords', this.keywords)
      this.updateMetaTag('author', this.author)
      this.updateMetaTag('robots', this.robots)
    },
    updateMetaTag(name, content) {
      if (!content) return
      
      let meta = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`)
      if (!meta) {
        meta = document.createElement('meta')
        if (name.startsWith('og:')) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      meta.setAttribute('content', content)
    }
  },
  watch: {
    title() {
      this.updateMetaTags()
    },
    description() {
      this.updateMetaTags()
    }
  }
}
</script>
