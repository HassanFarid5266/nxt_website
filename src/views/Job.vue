<template>
  <main>
    <div class="container">
      <h1>Job</h1>
      <p>This is the Job page. Content will be converted from the original job.html</p>
      <p>Job ID: {{ $route.params.id }}</p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Job',
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
