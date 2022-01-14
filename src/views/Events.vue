<template>
  <v-container class="event">
    <v-layout column>
      <h1>Events</h1>
      <div class="event__filter">
        <div class="event__wrapper">
          <v-text-field
            prepend-icon="mdi-magnify"
            v-model="search"
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
              <v-date-picker
                v-model="date"
                no-title
                scrollable
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
                  @click="$refs.menu.save(date)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
        </div>
      <v-btn :to="{ name: 'modal', params: { id: 'now' } }">
        Create
      </v-btn>
      </div>
      <div class="event__inner">
        <event-list :filters="{date, search}" @select-card="selectListItem"/>
        <router-view></router-view>
      </div>
    </v-layout>
    <!-- <event-editor></event-editor> -->
  </v-container>
</template>

<script>
  import EventList from '@/components/Event/EventList.vue'
  import EventCard from '@/components/Event/EventCard.vue'
  import EventEditor from '@/components/Event/Popup/EventEditor.vue'

  export default ({
    name: 'Events',
    components: {
      EventList,
      EventCard,
      EventEditor
    },
    data () {
      return {
        selectedCard: null,
        search: '',
        date: '',
        menu: false
      }
    },
    methods: {
      selectListItem(value) {
        this.selectedCard = value
      }
    }
  })
</script>