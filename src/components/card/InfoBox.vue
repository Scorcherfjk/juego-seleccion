<template>
  <div class="info-box">
    <i v-if="hasIcon" :class="`info-box__icon fa ${icon} ${colorIcon}`"></i>
    <p class="info-box__title ">{{ message }}</p>
    <p class="info-box__points ">{{ points }} {{ prize }}</p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-paw'
    },
    hasIcon: {
      type: Boolean,
      default: true
    },
    colorIcon: {
      type: String,
      default: 'text-yellow-500'
    },
    message: {
      type: String,
      default: 'Comparte tu código'
    },
    points: {
      type: Number
    },
    prize: {
      type: String,
      default: 'opciones'
    }
  }
};
</script>

<style lang="postcss" scoped>
.info-box {
  @apply flex justify-between items-center mb-1 w-full px-2 py-3 border-2 rounded-lg text-white;
}

.info-box__icon {
  @apply text-xl;
}

.info-box__title {
  @apply text-xs;
}

.info-box__points {
  @apply uppercase w-16 text-right text-xs text-yellow-500;
}
</style>
