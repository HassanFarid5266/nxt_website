import { createRouter, createWebHistory } from 'vue-router'

// Import views
import Home from '@/views/Home.vue'
import AboutUs from '@/views/AboutUs.vue'
import Services from '@/views/Services.vue'
import Projects from '@/views/Projects.vue'
import ContactUs from '@/views/ContactUs.vue'
import Team from '@/views/Team.vue'
import TeamMember from '@/views/TeamMember.vue'
import Careers from '@/views/Careers.vue'
import Blogs from '@/views/Blogs.vue'
import BlogPost from '@/views/BlogPost.vue'
import Job from '@/views/Job.vue'
import Partners from '@/views/Partners.vue'
import Faqs from '@/views/Faqs.vue'
import TermsAndConditions from '@/views/TermsAndConditions.vue'
import PrivacyPolicy from '@/views/PrivacyPolicy.vue'
import CookiesPolicy from '@/views/CookiesPolicy.vue'
import RefundsPolicy from '@/views/RefundsPolicy.vue'
import Error403 from '@/views/Error403.vue'
import Error404 from '@/views/Error404.vue'
import Error500 from '@/views/Error500.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-us',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/team/:id',
    name: 'TeamMember',
    component: TeamMember,
    props: true
  },
  {
    path: '/careers',
    name: 'Careers',
    component: Careers
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blog-post/:id',
    name: 'BlogPost',
    component: BlogPost,
    props: true
  },
  {
    path: '/job/:id',
    name: 'Job',
    component: Job,
    props: true
  },
  {
    path: '/partners',
    name: 'Partners',
    component: Partners
  },
  {
    path: '/faqs',
    name: 'Faqs',
    component: Faqs
  },
  {
    path: '/terms-and-conditions',
    name: 'TermsAndConditions',
    component: TermsAndConditions
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/cookies-policy',
    name: 'CookiesPolicy',
    component: CookiesPolicy
  },
  {
    path: '/refunds-policy',
    name: 'RefundsPolicy',
    component: RefundsPolicy
  },
  {
    path: '/403',
    name: 'Error403',
    component: Error403
  },
  {
    path: '/404',
    name: 'Error404',
    component: Error404
  },
  {
    path: '/500',
    name: 'Error500',
    component: Error500
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
