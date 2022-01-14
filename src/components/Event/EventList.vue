<template>
  <v-layout>
    <v-card class="event__container">
      <v-list
        class="event__list"
        v-infinite-scroll="getEvents"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="10"
      >
        <v-list-item v-for="item in events" :key="item.ID">
          <router-link
            :to="{ name: 'event', params: { id: item.ID } }"
            class="event__link"
          >
            <event-date :date-event="item.From"></event-date>
            {{ item.Name }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-card>
  </v-layout>
</template>

<script>
  import EventDate from './EventDate.vue'
  import api from '@/api.js'

  export default ({
    components: { EventDate },
    name: 'EventList',
    props: {
      filters: {
        type: Object,
        required: true,
        default: {}
      }
    },
    data() {
      return {
        events: []
      }
    },
    methods: {
      async getEvents() {
        this.events = await api.events.fetch()
      }
    },
    watch: {
      filters() {
        this.getEvents()
      }
    },    
    created() {
      this.getEvents()
    }
})
</script>
