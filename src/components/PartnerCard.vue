<template>
  <article class="card card-partners">
    <div class="card-head">
      <div class="card-image">
        <img :src="partner.image" alt="" class="image" />
        <div class="explore">
          <div class="exp"></div>
          <h2>Explore</h2>
        </div>
      </div>
    </div>

    <div class="card-body">
      <div class="card-title">{{ partner.name }}</div>
      <div class="card-desc">
        {{ partner.role }} <span>|</span> {{ partner.company }}
      </div>
      <div class="social-links">
        <a v-if="partner.links.github" 
           :href="partner.links.github" 
           class="bx bxl-github social-icon" 
           target="_blank"></a>

        <a v-if="partner.links.linkedin" 
           :href="partner.links.linkedin" 
           class="bx bxl-linkedin social-icon" 
           target="_blank"></a>

        <a v-if="partner.links.instagram" 
           :href="partner.links.instagram" 
           class="bx bxl-instagram social-icon" 
           target="_blank"></a>
      </div>
    </div>

    <div class="card-foot"></div>
  </article>
</template>

<script setup>
defineProps({
  partner: {
    type: Object,
    required: true,
  },
});
</script>
