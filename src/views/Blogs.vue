<template>
  <main>
    <section class="page-head">
      <div class="boxed">
        <span class="page-badge">BLOGS</span>
        <h1 class="page-title">Read our latest blogs and articles.</h1>
        <p class="page-desc">
          - We help our clients succeed by creating brand identities,
          digital experiences, and print materials that communicate clearly,
          achieve marketing goals, and look fantastic.
        </p>
      </div>
    </section>

    <main class="boxed blogs">
      <h3 class="section-subtitle">
        Posts <span id="count">{{ totalCount }}</span>
      </h3>
      <section class="row-filters">
        <form class="input-group" @submit.prevent="onSearch">
          <input type="search" v-model="search" class="field" name="search" id="search" placeholder="Search..." />
          <button type="submit" class="action-btn bx bx-search"></button>
        </form>
        <div class="input-group input-select">
          <span class="bx bx-sort input-icon"></span>
          <select v-model="sort" name="sort" id="sort" class="field" @change="onSort">
            <option value="DESC">Sort</option>
            <option value="DESC">Recent</option>
            <option value="ASC">Oldest</option>
          </select>
        </div>
        <div class="input-group input-select">
          <span class="bx bx-th input-icon"></span>
          <select v-model="selectedCategory" name="category" id="category" class="field" @change="onFilterCategory">
            <option value="">Category</option>
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
      </section>

      <section class="row-blogs" id="listing">
        <div v-if="visibleBlogs" v-for="post in visibleBlogs" :key="post.id">
          <BlogCard :blog="post" />
        </div>  
        <p v-if="visibleBlogs.length === 0" class="no-records">No posts found!</p>
      </section>

      <section class="readmore blogs-readmore" v-if="hasMore">
        <button class="btn-outline square-to-circle" id="loadmore" @click="loadMore">Load More</button>
        <div class="cat">
          <div class="ear ear--left"></div>
          <div class="ear ear--right"></div>
          <div class="face">
            <div class="eye eye--left">
              <div class="eye-pupil"></div>
            </div>
            <div class="eye eye--right">
              <div class="eye-pupil"></div>
            </div>
            <div class="muzzle"></div>
          </div>
        </div>
      </section>
    </main>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
import { useBlogsStore } from '@/stores'

const blogStore = useBlogsStore()

const search = ref('')
const sort = ref('DESC')
const selectedCategory = ref('')
const page = ref(1)
const limit = ref(6)

onMounted(() => {
  blogStore.fetchBlogs()
})

const categories = computed(() => {
  const set = new Set(blogStore.getBlogs.map(b => b.category))
  return Array.from(set)
})

const filtered = computed(() => {
  let list = blogStore.getBlogs ? [...blogStore.getBlogs] : []
  if (selectedCategory.value) {
    list = list.filter(b => b.category === selectedCategory.value)
  }
  if (search.value) {
    const q = search.value.toLowerCase()
    list = list.filter(b =>
      b.title.toLowerCase().includes(q) ||
      b.blog_intro.toLowerCase().includes(q) ||
      b.blogger.toLowerCase().includes(q)
    )
  }
  list.sort((a, b) =>
    sort.value === 'ASC'
      ? new Date(a.published_on) - new Date(b.published_on)
      : new Date(b.published_on) - new Date(a.published_on)
  )
  return list
})

const totalCount = computed(() => filtered.value.length)
const visibleBlogs = computed(() => filtered.value.slice(0, page.value * limit.value))
const hasMore = computed(() => visibleBlogs.value.length < filtered.value.length)

const loadMore = () => {
  if (hasMore.value) page.value += 1
}
const onSearch = () => {
  page.value = 1
}
const onSort = () => {
  page.value = 1
}
const onFilterCategory = () => {
  page.value = 1
}
</script>