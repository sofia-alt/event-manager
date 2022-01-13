<template>
  <div>
    {{ DateEvent }}
  </div>
</template>


<script>
  export default ({
    name: 'EventCard',
    props: {
      DateEvent: {
        type: Date,
        required: false
      }
    },
    data() {
      return {}
    }
  })
</script>
