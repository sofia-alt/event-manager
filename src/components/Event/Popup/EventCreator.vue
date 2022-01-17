<template>
  <v-dialog v-model="visible" max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn dark v-bind="attrs" v-on="on">Create</v-btn>
    </template>

    <event-editor>
      <template v-slot:actions="{ submit }">
        <v-btn @click="submit">Save</v-btn>
        <v-btn @click="remove">Remove</v-btn>
        <v-btn @click="close">Close</v-btn>
      </template>
    </event-editor>
  </v-dialog>
</template>
<script>
import EventEditor from "./EventEditor.vue";

export default {
  name: "event-creator",

  components: { EventEditor },

  data() {
    return {
      visible: false,
    };
  },

  methods: {
    close() {
      this.visible = false;
    },
    remove() {
      console.log('remove')
    }
  },
};
</script>    