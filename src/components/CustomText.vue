<template>
  <div class="custom-text">
    <p :class="baseClass">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    uppercase: Boolean,
    color: String
  },
  data() {
    let baseClass = 'custom-text__description';

    baseClass = this.$props.uppercase ? `${baseClass} uppercase` : baseClass;
    baseClass = this.$props.color
      ? `${baseClass} ${this.$props.color}`
      : baseClass;

    return {
      baseClass
    };
  },
  computed: {}
};
</script>

<style lang="postcss" scoped>
.custom-text {
  @apply mb-4 text-white text-center;
}

.custom-text__description {
  @apply text-sm mb-2;
}
</style>
