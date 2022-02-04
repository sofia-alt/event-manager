<template>
  <wrapper :executor="executor">
    <template v-slot:default="{ value: event }">
      <v-layout>
        <v-card class="event__card">
          <div class="event__wrapper-pa">
            <p class="event__title">{{ event.Name }}</p>
            <div class="event__dates">
              <event-date :value="event.From" :is-card="true"></event-date>
              <event-time :event="event" />
            </div>
          </div>
          <ul class="employee">
            <li
              v-for="participant in event.Participants"
              :key="participant.ID"
              class="employee__item"
            >
              <img
                :src="`${participant.Photo}`"
                :alt="participant.Name"
                width="33"
                height="33"
                class="employee__photo"
              />
              <span class="employee__name">{{ participant.Name }}</span>
            </li>
          </ul>
          <div class="event__wrapper-pa">
            <p class="event__title">{{ event.Subtitle }}</p>
            <p class="event__text">{{ event.Description }}</p>
            <a class="event__link" :href="event.Link">{{ event.Link }}</a>
          </div>
          <v-btn
            fab
            color="rgb(59, 130, 246)"
            bottom
            right
            absolute
            replace
            :to="{ name: 'update', params: { id: event.ID } }"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </v-card>
      </v-layout>
      <router-view :value="event" />
    </template>
  </wrapper>
</template>

<script>
import api from "../../api";
import Wrapper from "../Wrapper.vue";
import EventDate from "./EventDate.vue";
import EventTime from "./EventTime.vue";

export default {
  components: {
    Wrapper,
    EventDate,
    EventTime,
  },

  name: "event-card",

  props: {
    id: {
      type: String,
      required: true,
    },
  },

  computed: {
    executor() {
      return api.events.getById(this.id);
    },
  },
};
</script>

<style scoped>
  .layout {
    height: 100%;
  } /*в спешке*/
</style>