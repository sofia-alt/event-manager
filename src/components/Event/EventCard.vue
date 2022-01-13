<template>
  <v-flex md8 ml-2>
    <v-card>
      <event-date :date-event="convertToDate(selectCard.From)"></event-date>
      {{ selectCard }}
    </v-card>
  </v-flex>
</template>

<script>
  import EventDate from './EventDate.vue'
  import { convertToDate } from '@/helpers/convertToDate'

  export default ({
  components: { EventDate },
    name: 'EventCard',
    props: {
      selectCard: {
        type: Object,
        default: {},
        required: true
      }
    },
    data() {
      return {}
    },
    methods: {
      convertToDate
    }
  })
</script>
