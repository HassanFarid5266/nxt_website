<template>
  <article class="card card-product">
    <!-- badge sirf tab show hoga jab value ho -->
    <div v-if="product.badge" class="featured-badge">
      <span class="badge-text">✨ {{ product.badge }}</span>
    </div>

    <div class="card-content">
      <div class="card-title">{{ product.title }}</div>
      <p class="desc">Description :</p>
      <p class="card-desc text-ellipsis text-ellipsis-5">
        <strong>{{ product.title }}</strong>
        {{ product.description }}
      </p>
      <div class="fcp-button">
        <button class="btn">Learn More</button>
      </div>
    </div>

    <div class="right">
      <div class="card-image">
        <img :src="product.image" class="image lazy-load" alt="Product image" />
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
