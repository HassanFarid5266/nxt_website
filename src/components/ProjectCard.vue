<template>
  <article
    class="card card-case-study"
    v-for="project in projects" :key="project.id"
  >
    <div class="card-head">
      <div class="product-image" v-for="(img, idx) in project.images" :key="idx">
        <img :src="img" class="image lazy-load" :alt="project.name" />
      </div>
    </div>
      <div class="card-hoverable card-body bg-three">
      <span class="card-badge">{{ project.category }}</span>
      <h3 class="card-title">{{ project.name }}</h3>
      <p class="card-desc">{{ project.description }}</p>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  projects: {
    type: Array,
    default: () => [],
  },
});

</script>
