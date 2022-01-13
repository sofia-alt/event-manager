<template>
  <v-layout>
    <v-card class="event__card">
      <event-date :date-event="selectCard.From"></event-date>
      <v-list class="employee">
        <v-list-item
          v-for="item in selectCard.Participants"
          :key="item.ID"
          class="employee__item"
        >
          <v-img
            :src="`${item.Photo}`"
            :alt="item.Name"
            width="33"
            height="33"
            class="employee__photo"
          ></v-img>
          <span class="employee__name">{{ item.Name }}</span>
        </v-list-item>
      </v-list>
      <p class="event__text"> {{ selectCard.Description }} </p>
    </v-card>
  </v-layout>
</template>

<script>
  import EventDate from './EventDate.vue'
  import api from '@/api.js'
  export default ({
  components: { EventDate },
    name: 'EventCard',
    props: {},
    data() {
      return {
        selectCard: {}
      }
    },
    methods: {
      async getCard() {
        this.selectCard = await api.events.getById(this.$route.params.id)
      }
    },
    watch: {
      '$route.params.id'() {
        this.getCard()
      }
    },
    mounted() {
      this.getCard()
    }
  })
</script>
