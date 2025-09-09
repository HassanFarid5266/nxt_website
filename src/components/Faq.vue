<template>
  <div class="collapsible" id="faqs">
    <div class="collapse-item" v-for="item in faqs" :key="item.name" :class="{ active: openFaq === item.name }">
      <button class="collapse-head" type="button" @click="toggleFaq(item.name)" :aria-expanded="openFaq === item.name">
        {{ item.title }}
      </button>
      <div class="collapse-body" :id="`faq${item.name}`" v-html="item.description"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useFaqsStore } from "@/stores/faqs.js";

const faqsStore = useFaqsStore();
const faqs = computed(() => faqsStore.getFaqs);

const openFaq = ref(null);

const toggleFaq = (name) => {
  openFaq.value = openFaq.value === name ? null : name;
};

onMounted(() => {
  faqsStore.fetchFaqs();
});
</script>
