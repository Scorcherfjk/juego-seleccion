<template>
  <div class="card">
    <div class="card__title">
      {{ msg }}
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>
