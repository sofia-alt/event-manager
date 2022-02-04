import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'events',
    component: () => import('@/views/Events.vue'),
    props: true,
    children: [
      {
        name: 'event',
        path: '/:id',
        component: () => import('@/components/Event/EventCard'),
        props: true,
        children: [
          {
            path: 'update',
            name: 'update',
            component: () => import('@/components/Event/Popup/EventUpdater')
          }
        ]
      }]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
