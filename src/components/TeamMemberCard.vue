<template>
  <div class="col" v-for="member in members" :key="member.id" data-aos-duration="1000" data-aos="zoom-in"
    data-aos-once="true" data-aos-easing="ease-in-out">
    <article class="card card-team card-hoverable">
      <a class="card-image" href="javascript:void(0)">
        <img :data-src="member.image" :src="member.image" class="image lazy-load" />
      </a>
      <div class="card-body">
        <h3 class="card-title">
          <a href="javascript:void(0)">{{ member.firstName }} {{ member.lastName }}</a>
        </h3>
        <p class="card-desc">{{ member.designation }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
defineProps({
  members: {
    type: Object,
    required: true
  }
})
</script>