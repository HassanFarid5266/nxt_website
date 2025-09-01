<template>
  <main>
    <div class="container">
      <h1>Blog Post</h1>
      <p>This is the Blog Post page. Content will be converted from the original blog-post.html</p>
      <p>Blog ID: {{ $route.params.id }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
