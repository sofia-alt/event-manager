<template>
  <div>
    {{ date }}
  </div>
</template>


<script>
  const options = {
    era: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
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
        return new Date(this.DateEvent).toLocaleString("en-US", options)
      },
    }
  })
</script>
