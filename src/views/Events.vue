<template>
  <v-container class="event">
    <v-layout column>
      <h1>Events</h1>
      <div class="event__filter">
        <div class="event__layout">
          <v-text-field
            prepend-icon="mdi-magnify"
            v-model="filters.search"
            placeholder="Search"
            clearable
          >
          </v-text-field>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="filters.date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="filters.date"
                placeholder="Date"
                prepend-icon="mdi-calendar"
                readonly
                clearable
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="filters.date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(filters.date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </div>
        <event-creator/>
      </div>
      <div class="event__inner">
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
        <router-view></router-view>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import EventCreator from '@/components/Event/Popup/EventCreator.vue';
import EventGroup from '@/components/Event/EventGroup.vue';
import api from "@/api.js";
import EventCard from '../components/Event/EventCard.vue';
import Wrapper from '../components/Wrapper.vue'

export default {
  name: "events",

  components: {
    EventGroup,
    EventCreator,
    EventCard,
    Wrapper
  },

  data() {
    return {
      events: [],
      filters: {
        search: "",
        date: "",
      },
      menu: false,
    };
  },

   computed: {
    groups() {
      return this.events.reduce((groups, event) => {
        const key = event.Date.getTime();
        const group =
          groups[key] ||
          (groups[key] = {
            Date: event.Date,
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
    async getEventsv2() {
      return api.events.fetch(null, null, null, this.events.length)
    }
  },
};
</script>