<template>
  <event-editor>
    <template v-slot:actions>
      <v-btn @click="submit"/>
      <v-btn @click="remove"/>
      <v-btn @click="close"/>
    </template>
  </event-editor>
</template>
<script>
import EventEditor from './EventEditor.vue'
export default {
  components: { EventEditor },
  name: 'EventCreator',
  setup() {
    
  },
}
</script>    