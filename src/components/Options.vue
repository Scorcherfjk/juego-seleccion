<template>
  <div class="game__option">
    <button class="game__option__content rounded-lg" @click="addPoint">
      <i class="fa fa-question text-6xl text-white" aria-hidden="true"></i>
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
    }
  }
};
</script>
