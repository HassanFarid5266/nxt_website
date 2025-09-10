<template>
  <main>
    <div class="design"></div>
    <div class="blog" v-if="post">
      <div class="page-head" style="background:none;">
        <span class="section-badge">{{ post.category }}</span>
        <h1 class="section-title">{{ post.title }}</h1>
        <h4 class="section-desc">Posted by - {{ post.blogger }}</h4>
        <br>
        <h4 class="section-desc">Share this blog</h4>
        <div class="social-links">
          <button type="button" class="share-btn bx bxl-facebook-square social-icon" @click="share('facebook')"></button>
          <button type="button" class="share-btn bx bxl-twitter social-icon" @click="share('twitter')"></button>
          <button type="button" class="share-btn bx bxl-linkedin social-icon" @click="share('linkedin')"></button>
          <button type="button" class="share-btn bx bx-link social-icon" @click="share('clipboard')"></button>
        </div>
        <div class="page-image">
          <img :src="post.meta_image" class="image" :alt="post.title" />
        </div>
      </div>

      <div class="content ql-editor read-mode" v-html="post.content"></div>
    </div>

    <section class="boxed blogs">
      <div class="section-center">
        <span class="section-badge">Find out our thoughts</span>
        <h3 class="section-title">Relatable blogs</h3>
      </div>
      <Swiper :modules="modules" :slides-per-view="1" :breakpoints="{
					640: { slidesPerView: 2 },
					1025: { slidesPerView: 3 },
      }" navigation class="carousel">
        <SwiperSlide v-for="b in related" :key="b.id">
          <BlogCard :blog="b" />
        </SwiperSlide>
      </Swiper>
      <div class="readmore">
        <router-link to="/blogs" class="btn-outline">Back to Blogs</router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import BlogCard from '@/components/BlogCard.vue'
import { useBlogsStore } from '@/stores'

const route = useRoute()
const blogsStore = useBlogsStore()
const post = ref(null)
const modules = [Navigation]

const loadPost = async () => {
  if (!blogsStore.getBlogs.length) await blogsStore.fetchBlogs()
  const param = route.params.id
  post.value = blogsStore.getBlogBySlug(param) || blogsStore.getBlogById(Number(param)) || null
}

const related = computed(() => {
  if (!post.value) return []
  return blogsStore.getBlogs
    .filter(b => b.slug !== post.value.slug)
    .slice(0, 6)
})

const share = (type) => {
  const link = window.location.href
  if (type === 'twitter') window.open('https://x.com/intent/tweet?text=' + link)
  else if (type === 'facebook') window.open('https://www.facebook.com/sharer.php?u=' + link)
  else if (type === 'linkedin') window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + link)
  else if (type === 'clipboard') navigator.clipboard.writeText(link)
}

onMounted(() => {
  loadPost()
})
</script>
