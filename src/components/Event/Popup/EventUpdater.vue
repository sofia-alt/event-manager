<template>
  <event-editor>
    <template v-slot:actions="{ submit }">
      <v-btn @click="submit">Save</v-btn>
      <v-btn @click="close">Close</v-btn>
    </template>
  </event-editor>
</template>
<script>
import EventEditor from './EventEditor.vue'
export default {
  components: { EventEditor },
  name: 'event-updater',
  data() {
    return{}
  },

  methods: {
    close() {
      this.visible = false;
    },
  }
}
</script>