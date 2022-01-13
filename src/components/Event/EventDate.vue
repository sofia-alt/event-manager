<template>
  <div>
    {{ date }}
  </div>
</template>


<script>
  export default ({
    name: 'EventCard',
    props: {
      DateEvent: {
        type: String
      }
    },
    data() {
      return {
        // date: ''
      }
    },
    computed: {
      date() {
        return new Date(this.DateEvent)
      }
    }
  })
</script>
