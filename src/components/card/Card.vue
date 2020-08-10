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

<style lang="postcss" scoped>
.card {
  @apply absolute h-auto w-11/12 mt-4 bg-black bg-opacity-75 rounded-lg;
}

.card__title {
  @apply relative -m-4 w-2/3 p-1 mx-auto rounded-md uppercase text-center bg-white border-t-4 border-blue-500;
}
</style>
