<template>
  <div class="card__children__group">
    <i :class="`card__children__group__icon fa ${icon} ${colorIcon}`"></i>
    <p class="card__children__group__title ">{{ message }}</p>
    <p class="card__children__group__points ">{{ points }} opciones</p>
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
    message: {
      type: String,
      default: 'Comparte tu código'
    },
    points: {
      type: Number,
      default: 100
    }
  }
};
</script>
