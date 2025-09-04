<template>
  <main>
    <section class="page-head">
      <div class="boxed">
        <span class="page-badge">CURRENT JOB {{ job?.status }}</span>
        <h1 class="page-title">{{ job?.job_title }}</h1>
        <p class="page-desc">{{ job?.job_intro }}</p>
      </div>
    </section>

    <main class="contact-layout bg-one">
      <section class="boxed">
        <div class="col-left align-self-start" data-aos-duration="1000" data-aos="fade-right" data-aos-once="true"
          data-aos-easing="ease-in-out">
          <div class="content" v-html="job?.description"></div>
        </div>
        <div class="col-right" data-aos-duration="1000" data-aos="fade-left" data-aos-once="true"
          data-aos-easing="ease-in-out">
          <form class="card card-hoverable card-form" @submit.prevent="submitApplication" autocomplete="on">
            <div class="card-head">
              <h2 class="card-title">Apply For The Job</h2>
              <p class="card-desc">
                Please submit your resume and a brief cover letter
                explaining your interest in the role and your
                qualifications. We're looking forward to learning more about
                you!
              </p>
            </div>
            <div class="card-body">
              <div class="input-group">
                <input v-model="form.fullname" type="text" class="field" required placeholder="Full Name*" />
              </div>
              <div class="input-group">
                <input v-model="form.email" type="email" class="field" required placeholder="Email*" />
              </div>
              <div class="input-group">
                <input v-model="form.phone" type="tel" class="field" required placeholder="Phone*" />
              </div>
              <div class="input-group">
                <input v-model="form.education" type="text" class="field" placeholder="Education (optional)" />
              </div>
              <div class="input-group">
                <textarea v-model="form.skills" class="field" rows="3" placeholder="Skills (optional)"></textarea>
              </div>
            </div>
            <div class="card-foot center">
              <p id="feedback">{{ feedback }}</p>
              <button type="submit" class="btn-outline" :disabled="submitting">
                {{ submitting ? 'Submitting...' : 'Send message' }}
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  </main>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useJobsStore } from '@/stores'

const route = useRoute()
const jobsStore = useJobsStore()
const job = ref(null)

const form = ref({
  fullname: '',
  email: '',
  phone: '',
  education: '',
  skills: ''
})
const submitting = ref(false)
const feedback = ref('')

const loadJob = async () => {
  // Ensure jobs are loaded
  if (jobsStore.getJobs.length === 0) {
    await jobsStore.fetchJobs(1, '', 'DESC', false)
  }
  const idParam = route.params.id
  const id = isNaN(Number(idParam)) ? null : Number(idParam)
  // Try by numeric id
  let found = id ? jobsStore.getJobById(id) : null
  // Or by slug 'name'
  if (!found) {
    found = jobsStore.getJobs.find(j => j.name === idParam)
  }
  job.value = found || null
}

const submitApplication = async () => {
  submitting.value = true
  feedback.value = ''
  try {
    // Simulate submit
    await new Promise(r => setTimeout(r, 900))
    feedback.value = 'Thank you! Your application has been submitted.'
    form.value = { fullname: '', email: '', phone: '', education: '', skills: '' }
  } catch (e) {
    feedback.value = 'Something went wrong. Please try again.'
  } finally {
    submitting.value = false
  }
}

onMounted(() => {
  loadJob()
})
</script>
