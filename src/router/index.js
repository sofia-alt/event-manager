import Vue from 'vue'
import VueRouter from 'vue-router'
import Events from '../views/Events.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'events',
    component: Events,
    props: { default: true, sidebar: false },
    redirect: '/0',
    children: [
      {
        name: 'event',
        path: '/:id',
        component: () => import('@/components/Event/EventCard'),
        props: { default: true, sidebar: false }
      }]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
