<template>
  <section class="page-head">
    <div class="boxed">
      <span class="page-badge">FAQS</span>
      <h1 class="page-title">Frequently Asked Questions</h1>
      <p class="page-desc">
        - We’re a diverse team that works as fancies attention to details, enjoys
        beers on Friday nights and aspires to design the dent in the universe.
      </p>
    </div>
  </section>
  <main class="faqs-layout bg-one bg-fixed">
    <div class="boxed">
      <!-- LEFT SIDE FAQ -->
      <section class="col-left" data-aos-duration="1000" data-aos="fade-right" data-aos-once="true"
        data-aos-easing="ease-in-out">
        <div class="collapsible" id="faqs">
          <div class="collapse-item" v-for="item in faqs" :key="item.name" :class="{ active: openFaq === item.name }">
            <button class="collapse-head" type="button" @click="toggleFaq(item.name)"
              :aria-expanded="openFaq === item.name">
              {{ item.title }}
            </button>
            <div class="collapse-body" :id="`faq${item.name}`" v-html="item.description"></div>
          </div>
        </div>
      </section>

      <!-- RIGHT SIDE FORM -->
      <section class="col-right" data-aos-duration="1000" data-aos="fade-left" data-aos-once="true"
        data-aos-easing="ease-in-out">
        <form class="card card-hoverable card-form" id="faq" autocomplete="on" @submit.prevent="onSubmit">
          <div class="card-head">
            <h2 class="card-title">Ask your question</h2>
            <p class="card-desc">
              If you have any query please fill out the form below. We do our best
              to respond within 1 business day.
            </p>
          </div>
          <div class="card-body">
            <div class="input-group">
              <input v-model="form.fullname" type="text" class="field" id="fullname" placeholder="Full name..." />
            </div>
            <div class="input-group">
              <input v-model="form.email" type="email" class="field" id="email" placeholder="Email address..." />
            </div>
            <div class="input-group">
              <input v-model="form.subject" type="text" class="field" id="subject" placeholder="Subject..." />
            </div>
            <div class="input-group">
              <textarea v-model="form.message" class="field" id="message" rows="3" placeholder="Message..."></textarea>
            </div>
          </div>
          <div class="card-foot center">
            <p id="feedback" :class="{
              'msg-success': feedbackType === 'success',
              'msg-danger': feedbackType === 'error'
            }">
              {{ feedbackMessage }}
            </p>
            <button type="submit" class="btn-outline" id="btn" :disabled="isSubmitting">
              Send message
            </button>
          </div>
        </form>
      </section>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useFaqsStore } from "@/stores/faqs.js";

const faqsStore = useFaqsStore();
const faqs = computed(() => faqsStore.getFaqs);
const isSubmitting = computed(() => faqsStore.isSubmitting);
const feedbackMessage = computed(() => faqsStore.feedbackMessage);
const feedbackType = computed(() => faqsStore.feedbackType);

const form = reactive({
  fullname: "",
  email: "",
  subject: "",
  message: "",
});

const openFaq = ref(null);

const toggleFaq = (name) => {
  openFaq.value = openFaq.value === name ? null : name;
};

const onSubmit = async () => {
  const result = await faqsStore.submitQuestion({
    fullname: form.fullname,
    email: form.email,
    subject: form.subject,
    message: form.message,
  });
  if (result?.success) {
    form.fullname = "";
    form.email = "";
    form.subject = "";
    form.message = "";
  }
};

onMounted(() => {
  faqsStore.fetchFaqs();
});
</script>