<template>
  <event-editor>
    <template v-slot:actions>
      <v-btn @click="submit"/>
      <v-btn @click="close"/>
    </template>
  </event-editor>
</template>
<script>
import EventEditor from './EventEditor.vue'
export default {
  components: { EventEditor },
  name: 'EventUpdater',
  setup() {
    
  },
}
</script>