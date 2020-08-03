<template>
  <div class="h-screen p-4 bg-blue-200" id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header
  }
};
</script>
