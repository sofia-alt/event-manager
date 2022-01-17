<template>
  <v-layout>
    <v-card class="event__container">
      <v-list
        class="event__list pa-0"
        v-infinite-scroll="getEvents"
        infinite-scroll-disabled="busy"
        infinite-scroll-distance="6"
      >
        <v-list-item v-for="(group, key) in groups" :key="key" class="pa-0">
          <event-group :value="group"/>
        </v-list-item>
      </v-list>
    </v-card>
  </v-layout>
</template>

<script>
import EventGroup from '@/components/Event/EventGroup.vue';
import api from "@/api.js";

export default {
  components: {
    EventGroup
  },

  name: "event-list",

  props: {
    filters: {
      type: Object,
      required: true,
      default: {},
    },
  },

  data() {
    return {
      events: [],
    };
  },

  computed: {
    groups() {
      return this.events.reduce((groups, event) => {
        const key = event.From.getTime();
        const group =
          groups[key] ||
          (groups[key] = {
            Date: new Date(event.Date),
            Events: [],
          });

        group.Events.push(event);
        return groups;
      }, {});
    },
  },

  watch: {
    filters: {
      deep: true,
      immediate: true,
      handler() {
        this.events = [];
        this.getEvents();
      },
    },
  },

  methods: {
    async getEvents() {
      this.events = this.events.concat(await api.events.fetch(null, null, null, this.events.length));
    },
  },
};
</script>
