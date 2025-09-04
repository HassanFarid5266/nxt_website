<template>
  <article class="card card-blog">
    <div class="card-head">
      <a class="card-image image-zoom" :href="`/blog-post/${blog.slug}`">
        <img :src="blog.meta_image" class="image lazy-load" data-text="Read" />
      </a>
    </div>
    <div class="card-body">
      <div class="text-ellipsis">
        <span>{{ blog.category }}</span>
      </div>
      <br>
      <h3 class="card-title text-ellipsis text-ellipsis-1">
        <a :href="`/blog-post/${blog.slug}`">
          {{ blog.title }}
        </a>
      </h3>
      <p class="card-desc text-ellipsis text-ellipsis-3">
        {{ blog.blog_intro }}
      </p>
      <p class="card-desc">
        By
        <a href="javascript:void(0)" class="card-link">{{ blog.blogger }}</a>
        -
        <time>{{ blog.published_on }}</time>
      </p>
    </div>
  </article>
</template>

<script setup>
defineProps({
  blog: {
    type: Object,
    required: true
  }
})
</script>
