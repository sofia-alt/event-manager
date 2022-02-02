import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'events',
    component: () => import('@/views/Events.vue'),
    props: { default: true, sidebar: false },
    children: [
      {
        name: 'event',
        path: '/:id',
        component: () => import('@/components/Event/EventCard'),
        props: { default: true, sidebar: false },
        children:  [
          {
            path: '/:id/modal',
            name: 'modal',
            props: { default: true, sidebar: false },
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
