<template>
  <div class="date date_time date_left">
     <div class="date__category" :style="{ 'background-color': `${color}` }"></div>
     <span class="date__text">{{ start }} - {{ end }}</span>
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
  from: {
    type: Date
  }, 
  till: {
    type: Date
  },
  link: {
    type: String
  },
  color: {
    type: String
  }
},

data() {
  return {
    active: false
  }
},

computed: {

  start() {
    if (this.from) {
      return this.from.toLocaleString("en-US", FORMAT_DATE_OPTIONS);
    }
  },

  end() {
    if (this.till) {
      return this.till.toLocaleString("en-US", FORMAT_DATE_OPTIONS);
    }
  }
}
})
</script>
