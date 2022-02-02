<template>
  <div class="event__wrapper">
    <event-date :value="value.Date" />
    <v-list class="pa-0 event__list">
      <v-list-item v-for="item in value.Events" :key="item.ID" class="pa-0">
        <router-link
          :to="{ name: 'event', params: { id:item.ID } }"
          class="event__router-link"
        > 
          <event-time :event="item"/>
          <p class="event__link event__link_grey">{{ item.Name }}</p>
          <a class="event__link" :href="item.Link">{{ item.Link }}</a>
        </router-link>
      </v-list-item>
    </v-list>
  </div>

</template>
<script>
import EventDate from './EventDate.vue'
import EventTime from './EventTime.vue'

export default {
  components: {
    EventDate,
    EventTime
  },

  name: "event-group",

  props: {
    value: {
      type: Object
    }
  }
}
</script>