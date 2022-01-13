<template>
  <v-container>
    <v-layout column>
      <h1>Events</h1>
      <v-layout md12 class="g-20">
        <event-list :events-list="eventsList" @select-card="selectListItem"/>
        <event-card :select-card="selectedCard"/>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
  import EventList from '@/components/Event/EventList.vue'
  import EventCard from '@/components/Event/EventCard.vue'
  import events from '@/static/events.json'

  export default ({
    name: 'Events',
    components: {
      EventList,
      EventCard
    },
    data () {
      return {
        eventsList: events,
        selectedCard: null
      }
    },
    methods: {
      selectListItem(value) {
        this.selectedCard = value
      } 
    }
  })
</script>