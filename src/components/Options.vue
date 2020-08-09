<template>
  <div class="game__option">
    <button class="game__option__content" @click="addPoint">
      <i class="fa fa-question game__option__icon" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  methods: {
    addPoint() {
      this.$store.dispatch('addPoints', this.$props.value);
      this.$store.dispatch('startCountdown');
    }
  }
};
</script>

<style lang="postcss" scoped>
.game__option {
  @apply w-1/2 my-4;
}

.game__option__content {
  @apply block h-32 w-3/4 mx-auto bg-blue-700 bg-opacity-75 rounded-lg;
}

.game__option__icon {
  @apply text-6xl text-white;
}
</style>
