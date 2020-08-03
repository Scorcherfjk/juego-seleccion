<template>
  <div class="absolute h-64 w-11/12 mt-4 bg-black bg-opacity-75 rounded-lg">
    <div
      class="relative -m-3 w-2/3 p-1 mx-auto
      rounded-md uppercase text-center bg-white"
    >
      {{ msg }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
};
</script>
