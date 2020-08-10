<template>
  <div class="game">
    <Options v-for="(val, index) in shuffleNumbers" :value="val" :key="index" />
  </div>
</template>

<script>
import Options from './Options';

export default {
  components: {
    Options
  },
  data() {
    return {
      points: [0, 30, 12]
    };
  },
  computed: {
    shuffleNumbers: function() {
      const array = this.points;
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  }
};
</script>

<style lang="postcss" scoped>
.game {
  @apply w-full flex flex-wrap justify-center;
}
</style>
