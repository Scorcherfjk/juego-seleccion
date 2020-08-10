<template>
  <div class="info-box-expanded">
    <div class="info-box-expanded__preview">
      <i :class="`info-box-expanded__icon fa ${icon} ${colorIcon} mr-2`"></i>
      <p class="info-box-expanded__title">
        {{ message }}
      </p>
      <p
        class="info-box-expanded__title text-right text-yellow-500 uppercase mr-2"
      >
        {{ points }} opciones por persona
      </p>
      <button @click="openClose">
        <i class="info-box-expanded__icon fa fa-chevron-down text-white"></i>
      </button>
    </div>
    <div class="info-box-expanded__detail" v-show="open">
      <p class="info-box-expanded__detail__description">
        Comparte el código
        <span>{{ userCode }}</span> con tus amigos. Cada amigo que ingrese te
        dará {{ points }} OPCIONES
      </p>
      <div class="info-box-expanded__state">
        <span>amigos</span>
        <span>opciones</span>
      </div>
      <button class="info-box-expanded__share">
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

<style lang="postcss" scoped>
.info-box-expanded {
  @apply flex flex-col justify-between items-center mb-1 w-full px-2 py-3 border-2 rounded-lg text-white;
}

.info-box-expanded__preview {
  @apply flex w-full justify-around items-center;
}

.info-box-expanded__detail {
  @apply h-48 w-full mt-4 py-2 flex flex-col items-center justify-around border-t-2;
}

.info-box-expanded__detail__description {
  @apply text-xs;
}

.info-box-expanded__detail__description span {
  @apply font-bold italic;
}

.info-box-expanded__state {
  @apply w-3/4 border px-4 py-2 rounded-full flex justify-around;
}

.info-box-expanded__share {
  @apply w-2/4 py-1 px-4 uppercase border-2 border-green-300 text-green-300 rounded-lg;
}

.info-box-expanded__icon {
  @apply text-xl;
}

.info-box-expanded__title {
  @apply text-xs;
}

.info-box-expanded__points {
  @apply uppercase w-16 text-right text-xs text-yellow-500;
}
</style>
