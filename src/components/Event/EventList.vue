<template>
  <v-layout>
    <v-card class="event__container">
      <v-list
        class="event__list"
        v-infinite-scroll="loadEvents"
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

  export default ({
    components: { EventDate },
    name: 'EventList',
    props: {
      events: {
        type: Array,
        required: true,
        default: []
      }
    },
    data() {
      return {}
    },
    methods: {
      loadEvents() {
        console.log('Запрос на сервер')
      }
    }
})
</script>
