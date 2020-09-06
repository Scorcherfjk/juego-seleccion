<template>
  <div class="counter">
    <p class="counter__title">
      {{ $store.state.points }} puntos
      <i class="fa fa-paw"></i>
    </p>
  </div>
</template>

<style lang="postcss" scoped>
.counter {
  @apply mb-4;
}

.counter__title {
  @apply px-2 py-1 w-3/6 mx-auto rounded-full text-center text-white bg-green-500;
}
</style>
