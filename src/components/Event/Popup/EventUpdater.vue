<template>
  <v-dialog v-model="visible" max-width="500">
    <event-editor @submit="submit" :value="value">
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
  components: { EventEditor },

  name: "event-updater",

  props: {
    value: {
      type: Object,
      required: true,
      default: {},
    },
  },

  data() {
    return {
      visible: true,
    };
  },

  watch: {
    visible() {
      this.close();
    },
  },

  methods: {
    submit(value) {},

    close() {
      this.$router.replace({
        name: "event",
        params: {
          id: this.value.ID,
        },
      });
    },

    remove() {
      console.log("remove");
    },
  },
};
</script>