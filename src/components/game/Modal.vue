<template>
  <div class="modal">
    <div class="modal__message">
      <i class="fa fa-trophy modal__message__icon"></i>
      <p class="modal__message__title">¡bien hecho!</p>
      <p class="modal__message__description">
        Has ganado
        <span>{{ points }} puntos</span>
      </p>
    </div>
    s
    <div class="modal__buttons">
      <button class="modal__buttons__continue" @click="continuePlaying">
        continuar
      </button>
      <router-link class="w-5/12" to="/options">
        <button class="modal__buttons__options" @click="continuePlaying">
          más puntos
        </button>
      </router-link>
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
      this.$store.dispatch('startCountdown');
    }
  }
};
</script>

<style lang="postcss" scoped>
.modal {
  @apply absolute flex flex-col justify-between items-center py-16 top-0 left-0 h-screen w-full bg-black bg-opacity-75;
}

.modal__message {
  @apply flex flex-col;
}

.modal__message__icon {
  @apply text-6xl text-center text-yellow-600;
}

.modal__message__title {
  @apply text-3xl text-white text-center uppercase;
}

.modal__message__description {
  @apply text-xl text-white text-center;
}

.modal__message__description span {
  @apply uppercase text-yellow-600 font-semibold;
}

.modal__buttons {
  @apply flex justify-evenly w-full;
}

.modal__buttons__continue {
  @apply w-5/12 py-1 text-base px-2 uppercase border-2 border-green-300 text-green-300 rounded-lg;
}

.modal__buttons__options {
  @apply w-full py-1 text-base px-2 uppercase border-2 border-white text-white text-center rounded-lg;
}
</style>
