<template>
  <v-container class="event">
    <v-layout column>
      <h1>Events</h1>
      <div class="event__filter">
        <div class="event__wrapper">
          <v-text-field
            prepend-icon="mdi-magnify"
            v-model="search"
          >
          </v-text-field>
          <v-menu
            ref="menu"
            v-model="date"
            :close-on-content-click="false"
            :return-value.sync="dates"
            transition="scale-transition"
            offset-y
            min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-combobox
              v-model="dates"
              multiple
              clearable
              chips
              small-chips
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-combobox>
          </template>
          <v-date-picker
            v-model="dates"
            multiple
            no-title
            scrollable
            range
          >
            <v-spacer></v-spacer>
            <v-btn
              text
              color="primary"
              @click="menu = false"
            >
              Cancel
            </v-btn>
            <v-btn
              text
              color="primary"
              @click="$refs.menu.save(dates)"
            >
              OK
            </v-btn>
          </v-date-picker>
          </v-menu>
        </div>
      <v-btn>
        Create
      </v-btn>
      </div>
      <div class="event__inner">
        <event-list :filters="{dates, search}" @select-card="selectListItem"/>
        <router-view></router-view>
      </div>
    </v-layout>
    <router-view></router-view>
  </v-container>
</template>

<script>
  import EventList from '@/components/Event/EventList.vue'
  import EventCard from '@/components/Event/EventCard.vue'

  export default ({
    name: 'Events',
    components: {
      EventList,
      EventCard
    },
    data () {
      return {
        selectedCard: null,
        dates: [],
        search: '',
        date: ''
      }
    },
    methods: {
      selectListItem(value) {
        this.selectedCard = value
      }
    }
  })
</script>