<template>
  <v-container class="event">
    <v-layout column>
      <h1>Events</h1>
      <div class="event__filter">
        <div class="event__layout">
          <v-text-field
            prepend-icon="mdi-magnify"
            v-model="search"
            placeholder="Search"
            clearable
          >
          </v-text-field>
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                placeholder="Date"
                prepend-icon="mdi-calendar"
                readonly
                clearable
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)">
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </div>
        <event-creator/>
      </div>
      <div class="event__inner">
        <event-list :filters="{ date, search }" />
        <router-view></router-view>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import EventList from "@/components/Event/EventList.vue";
import EventEditor from "@/components/Event/Popup/EventEditor.vue";
import EventCreator from '@/components/Event/Popup/EventCreator.vue';

export default {
  name: "Events",

  components: {
    EventList,
    EventEditor,
    EventCreator
  },

  data() {
    return {
      search: "",
      date: "",
      menu: false,
    };
  },
};
</script>