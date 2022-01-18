<template>
  <div :class="[`date`, {'date_card': isCard}]">
    <p :class="[`date__day ma-0`, { 'date__day_active': active }]">
      {{ prefix }}
    </p>
     <span :class="[`date__text`, { 'date__text_active': active }]">{{ date }}</span>
  </div>
</template>


<script>
const FORMAT_DATE_OPTIONS = {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit'
};

const DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export default ({
name: 'event-date',

props: {
  value: {
    type: Date
  },
  isCard: {
    type: Boolean
  }
},

data() {
  return {
    active: false
  }
},

computed: {
  today() {
    return new Date().getDate()
  },

  tomorrow() {
    return this.today + 1
  },

  prefix() {
    if (!this.value) {
      return
    }

    switch(this.value.getDate()) {
      case this.today:
        this.active = true
        return 'Today'

      case this.tomorrow:
        return 'Tomorrow'

      default: {
        return DAYS[new Date(this.value).getDay()]
      }
    }
  },

  date() {
    if (this.value) {
      return this.value.toLocaleString("en-US", FORMAT_DATE_OPTIONS);
    }
  },
}
})
</script>
