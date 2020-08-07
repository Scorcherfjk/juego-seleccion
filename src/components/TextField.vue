<template>
  <div class="mb-4 text-white text-center">
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
    let baseClass = 'text-sm mb-2';

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
