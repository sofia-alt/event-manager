<template>
  <v-flex md4 ml-2>
    <v-card>
      <v-list>
        <v-list-item
          v-for="item in events"
          :key="item.ID"
        >
          <router-link :to="{ name: 'event', params: { id: item.ID }}">
            <event-date :date-event="item.From"></event-date>
            {{ item.Name }}
          </router-link>
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
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
    created() {},
  })
</script>
