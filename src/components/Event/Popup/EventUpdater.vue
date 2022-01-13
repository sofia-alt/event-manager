<template v-slot:actions="{ submit }">
  <div>
    <v-btn @click="submit"/>
    <v-btn @click="close"/>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>