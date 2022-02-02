<template>
  <div class="date date_time date_left" v-if="event">
     <div v-if="event.Category" class="date__category" :style="{ 'background-color': `${event.Category.Color}` }"></div>
     <span :class="[`date__text`, {'date__text_link': event.Link}]">{{ start }} - {{ end }}</span>
  </div>
</template>


<script>
const FORMAT_DATE_OPTIONS = {
  hour: '2-digit',
  minute: '2-digit'
};

export default ({
name: 'event-time',

props: {
  event: {
    type: Object,
    required: true
  }
},

data() {
  return {}
},

computed: {

  start() {
    if (this.event.From) {
      return this.event.From.toLocaleString("en-US", FORMAT_DATE_OPTIONS);
    }
  },

  end() {
    if (this.event.Till) {
      return this.event.Till.toLocaleString("en-US", FORMAT_DATE_OPTIONS);
    }
  }
}
})
</script>
