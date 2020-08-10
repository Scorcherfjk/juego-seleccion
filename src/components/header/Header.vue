<template>
  <div class="header">
    <Nav />
    <Counter />
  </div>
</template>

<script>
import Nav from './Nav';
import Counter from './Counter';
export default {
  components: {
    Nav,
    Counter
  }
};
</script>
