<template>
  <v-layout>
    <v-card class="event__card" v-if="Object.keys(event).length > 0">
      <div class="event__wrapper-pa">
        <p class="event__title">{{ event.Name }}</p>
        <div class="event__dates">
          <event-date :value="event.From" :is-card="true"></event-date>
          <event-time :event="event"/>
        </div>
      </div>
      <ul class="employee">
        <li
          v-for="participant in event.Participants"
          :key="participant.ID"
          class="employee__item"
        >
          <img
            :src="`${participant.Photo}`"
            :alt="participant.Name"
            width="33"
            height="33"
            class="employee__photo"
          />
          <span class="employee__name">{{ participant.Name }}</span>
        </li>
      </ul>
      <div class="event__wrapper-pa">
        <p class="event__title">{{ event.Subtitle }}</p>
        <p class="event__text"> {{ event.Description }} </p>
        <a class="event__link" :href="event.Link">{{ event.Link }}</a>
      </div>
      <event-updater :value="event"></event-updater>
    </v-card>
  </v-layout>  
</template>

<script>
  import EventDate from './EventDate.vue'
  import EventTime from './EventTime.vue'
  import EventUpdater from "@/components/Event/Popup/EventUpdater.vue";
  import api from '@/api.js'

  export default ({
    components: {
      EventDate,
      EventTime,
      EventUpdater
    },

    name: 'event-card',

    props: {},

    data() {
      return {
        event: {}
      }
    },

    methods: {
      async getCard() {
        this.event = await api.events.getById(this.$route.params.id)
      }
    },

    watch: {
      '$route.params.id'() {
        this.getCard()
      }
    },

    mounted() {
      if(this.$route.params.id) {
        this.getCard()
      }
    }
  })
</script>
