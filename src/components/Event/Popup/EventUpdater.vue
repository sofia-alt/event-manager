<template>
  <v-dialog v-model="visible" max-width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        fab
        color="rgb(59, 130, 246)"
        bottom
        right
        absolute
        v-bind="attrs"
        v-on="on"
        :to="{ name: 'modal' }"
        :replace="true"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </template>

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
import EventEditor from './EventEditor.vue'

export default {
  components: { EventEditor },

  name: 'event-updater',
  props: {
    value: {
      type: Object,
      required: true,
      default: {}
    }
  },

  data() {
    return{
      visible: false,
    }
  },

  watch: {
    visible() {
      if(this.visible === false && this.$route.fullPath?.includes('modal')) {
        this.$router.push({ name: 'event', params: { id: this.value.ID } })
      }
    }
  },

  methods: {
    submit(value) {

    },

    close() {
      this.visible = false;
    },

    remove() {
      console.log("remove");
    }
  },

  created() {
    this.visible = this.visible === false && this.$route.fullPath?.includes('modal')
  }
}
</script>