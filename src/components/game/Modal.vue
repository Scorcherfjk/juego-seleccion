<template>
  <div class="modal">
    <div class="flex justify-evenly w-full">
      <button class="modal__continue" @click="continuePlaying">
        continuar
      </button>
      <button class="modal__options">
        más opciones
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    points: {
      type: Number,
      required: true
    }
  },
  methods: {
    continuePlaying() {
      this.$store.dispatch('addPoints', this.$props.points);
      this.$store.dispatch('startCountdown');
    }
  }
};
</script>

<style lang="postcss" scoped>
.modal {
  @apply absolute flex justify-center items-end py-16 top-0 left-0 h-screen w-full bg-black opacity-50;
}
.modal__continue {
  @apply w-5/12 py-1 text-base px-2 uppercase border-2 border-green-300 text-green-300 rounded-lg;
}

.modal__options {
  @apply w-5/12 py-1 text-base px-2 uppercase border-2 border-white text-white rounded-lg;
}
</style>
