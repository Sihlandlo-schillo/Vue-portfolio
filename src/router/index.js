import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '@/views/ContactView.vue'
import TestimonialsView from '@/views/TestimonialsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/education',
    name: 'education',
    component: ResumeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactView
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: TestimonialsView
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
