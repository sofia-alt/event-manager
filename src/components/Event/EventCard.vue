<template>
  <v-layout>
    <v-card class="event__card">
      <div class="event__wrapper-pa">
        <p class="event__title">{{ selectCard.Name }}</p>
        <event-date :value="selectCard.From" :isCard="true"></event-date>
      </div>
      <ul class="employee">
        <li
          v-for="item in selectCard.Participants"
          :key="item.ID"
          class="employee__item"
        >
          <img
            :src="`${item.Photo}`"
            :alt="item.Name"
            width="33"
            height="33"
            class="employee__photo"
          />
          <span class="employee__name">{{ item.Name }}</span>
        </li>
      </ul>
      <div class="event__wrapper-pa">
        <p class="event__title">{{ selectCard.Subtitle }}</p>
        <p class="event__text"> {{ selectCard.Description }} </p>
        <a class="event__link" :href="selectCard.Link">{{ selectCard.Link }}</a>
      </div>
    </v-card>
  </v-layout>
</template>

<script>
  import EventDate from './EventDate.vue'
  import api from '@/api.js'
  export default ({
  components: { EventDate },
    name: 'event-card',
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
