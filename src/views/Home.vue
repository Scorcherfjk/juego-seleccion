<template>
  <div class="home">
    <Countdown :timer="20000" v-if="$store.state.countdown" />
    <Game v-else />
  </div>
</template>

<script>
import Game from '../components/Game';
import Countdown from '../components/Coundown';

export default {
  components: {
    Game,
    Countdown
  }
};
</script>
