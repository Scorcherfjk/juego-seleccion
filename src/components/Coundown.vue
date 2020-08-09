<template>
  <div class="countdown">
    <div class="countdown__title">Puedes volver a jugar en</div>
    <div class="countdown__counter">
      {{ getHour }}:{{ getMinute }}:{{ getSecond }} min
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timer: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      future: Date.now() + this.$props.timer,
      hour: '00',
      minute: '00',
      second: '00'
    };
  },
  computed: {
    getHour() {
      return `00${this.hour}`.slice(-2);
    },
    getMinute() {
      return `00${this.minute}`.slice(-2);
    },
    getSecond() {
      return `00${this.second}`.slice(-2);
    }
  },
  methods: {
    countDown() {
      const interval = 1000;
      const countdownInterval = setInterval(() => {
        const dateDiff = this.future - Date.now() - 6.84e7;
        const backTime = new Date(dateDiff);

        this.hour = backTime.getHours();
        this.minute = backTime.getMinutes();
        this.second = backTime.getSeconds();

        if (this.hour == 0 && this.minute == 0 && this.second == 0) {
          clearInterval(countdownInterval);
          this.$store.dispatch('stopCountdown');
        }
      }, interval);
    }
  },
  mounted() {
    this.countDown();
  }
};
</script>

<style lang="postcss" scoped>
.countdown {
  @apply relative m-4 w-2/3 p-1 mx-auto rounded-md uppercase text-center bg-white border-t-4 border-blue-500;
}

.countdown__title {
  @apply text-lg font-semibold;
}

.countdown__counter {
  @apply text-3xl font-semibold text-blue-600;
}
</style>
