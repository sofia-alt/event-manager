<template>
  <v-card max-width="500">
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Title"
              required
              v-model="name"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="from"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="from"
                  placeholder="Date"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="from" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(from)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              label="Category"
              clearable
              :items="categories"
              v-model="category"
              item-text="Name"
              item-value="Id"
            ></v-autocomplete>
          </v-col>

          <v-col cols="12" sm="6">
            <v-autocomplete
              label="Participants"
              clearable
              multiple
              :items="all_participants"
              v-model="participants"
              item-text="Name"
              item-value="Id"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" sm="6">
            <v-text-field
              label="Description"
              required
              v-model="description"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <slot name="actions" v-bind="{ submit }"></slot>
    </v-card-actions>
  </v-card>
</template>

<script>
import api from "@/api.js";

export default {
  name: "event-editor",

  props: {
    value: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      menu: false,
      all_participants: [],
      categories: [],
      from: this.value.From,
      till: this.value.Till,
      category: this.value.Category,
      participants: this.value.Participants,
      name: this.value.Name,
      description: this.value.Description
    };
  },

  methods: {
    submit() {
      if (this.name && (this.category != {}) && (this.participants.length > 0)) {
        this.$emit("submit", {
          Name: this.name,
          Description: this.description,
          Category: this.Category,
          Participants: this.participants,
          From: this.from,
          Till: this.till
        });
      } else {
        if (!this.name) {
          alert('Title required field')
        }
        if (Object.keys(this.category).length === 0) {
          alert('Category required field')
        }
        if (this.participants.length === 0) {
          alert('Participants required field')
        }
      }
    },

    async getParticipants() {
      this.all_participants = await api.participants.fetch();
    },

    async getCategories() {
      this.categories = await api.categories.fetch();
    }
  },

  created() {
    this.getParticipants()
    this.getCategories()
  }
};
</script>