<template>
  <div class="card__children__group flex-col">
    <div class="flex w-full justify-around items-center">
      <i
        :class="`card__children__group__icon fa ${icon} ${colorIcon} mr-2`"
      ></i>
      <p class="card__children__group__title">
        {{ message }}
      </p>
      <p
        class="card__children__group__title text-right text-yellow-500 uppercase mr-2"
      >
        {{ points }} opciones por persona
      </p>
      <button @click="openClose">
        <i
          class="card__children__group__icon fa fa-chevron-down text-white"
        ></i>
      </button>
    </div>
    <div
      class="h-48 w-full mt-4 py-2 flex flex-col items-center justify-around border-t-2"
      v-show="open"
    >
      <p class="text-xs">
        Comparte el código <i>"{{ userCode }}"</i> con tus amigos. Cada amigo
        que ingrese te dará {{ points }} OPCIONES
      </p>
      <div class="w-3/4 border px-4 py-2 rounded-full flex justify-around">
        <span>amigos</span>
        <span>opciones</span>
      </div>
      <button
        class="w-2/4 py-1 px-4 uppercase border-2 border-green-300 text-green-300 rounded-lg"
      >
        compartir
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-paw'
    },
    colorIcon: {
      type: String,
      default: 'text-yellow-500'
    },
    points: {
      type: Number,
      default: 100
    },
    message: {
      type: String,
      default: 'Comparte tu código'
    },
    userCode: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false
    };
  },
  methods: {
    openClose() {
      this.open = !this.open;
      this.open2 = false;
    }
  }
};
</script>
