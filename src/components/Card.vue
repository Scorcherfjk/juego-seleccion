<template>
  <div class="card">
    <div class="card__title">
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
