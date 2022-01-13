<template>
  <v-flex md4 ml-2>
    <v-card>
      <v-list>
        <v-list-item
          v-for="item in eventsList"
          :key="item.ID"
          @click="$emit('select-card', item)"
        >
          <event-date :date-event="convertToDate(item.From)"></event-date>
          {{ item.Name }}
        </v-list-item>
      </v-list>
    </v-card>
  </v-flex>
</template>

<script>
  import EventDate from './EventDate.vue'
  import { convertToDate } from '@/helpers/convertToDate'

  export default ({
  components: { EventDate },
    name: 'EventList',
    props: {
      eventsList: {
        type: Array,
        required: false,
        default: []
      }
    },
    data() {
      return {}
    },
    methods: {
      convertToDate
    },
    mounted() {
      this.$emit('select-card', this.$props.eventsList[0])
    }
  })
</script>
