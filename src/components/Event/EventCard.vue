<template>
  <v-flex md8 ml-2>
    <v-card>
      <event-date :date-event="selectCard.From"></event-date>
      {{ selectCard }}
    </v-card>
  </v-flex>
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
