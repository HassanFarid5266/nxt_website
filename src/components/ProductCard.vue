<template>
    <article class="card card-case-study" v-for="product in products" :key="product.id">
        <div class="card-head">
        </div>
        <div class="card-hoverable card-body bg-three card-product">
            <div class="product-content">
                <span class="card-badge">{{ product.category }}</span>
                <h3 class="card-title">{{ product.name }}</h3>
                <p class="card-desc">{{ product.description }}</p>
                <router-link :to="product.link" class="btn-outline">Learn More</router-link>
            </div>
            <div class="product-image">
                <img :src="product.image" class="image lazy-load" :alt="product.name" />
            </div>
        </div>
    </article>
</template>

<script setup>
const props = defineProps({
    products: {
        type: Array,
        default: () => [],
    },
})
</script>
