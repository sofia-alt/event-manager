<template v-slot:actions="{ submit }">
  <div>
    <button @click="submit"/>
    <button @click="remove"/>
    <button @click="close"/>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>