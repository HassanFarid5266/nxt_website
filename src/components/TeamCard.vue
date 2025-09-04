<template>
  <div class="col" v-for="member in members" :key="member.id" data-aos-duration="1000" data-aos="zoom-in"
    data-aos-once="true" data-aos-easing="ease-in-out">
    <article class="card card-team card-hoverable" :class="{ 'card-leadership': member.isLeadership }">
      <a class="card-image" :href="member.isLeadership ? `/team/${member.id}` : null"
        @click="member.isLeadership ? $router.push(`/team/${member.id}`) : null">
        <img :data-src="member.image" :src="member.image" class="image lazy-load"
          :alt="`${member.firstName} ${member.lastName}`" />
      </a>
      <div class="card-body">
        <h3 class="card-title">
          <a :href="member.isLeadership ? `/team/${member.id}` : null" :style="member.isLeadership ? { hover: { color: 'var(--primary)', textDecoration: 'underline' } } : { color: 'var(--text)', textDecoration: 'none' }"
            @click="member.isLeadership ? $router.push(`/team/${member.id}`) : null">
            {{ member.firstName }} {{ member.lastName }}
          </a>
        </h3>
        <p class="card-desc">{{ member.designation }}</p>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  members: {
    type: Array,
    required: true
  }
})
</script>
