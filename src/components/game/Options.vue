<template>
  <div class="game__option">
    <button class="game__option__content" @click="addPoint">
      <i class="fa fa-question game__option__icon" aria-hidden="true"></i>
    </button>
    <Modal v-show="modal" :points="value" />
  </div>
</template>

<script>
import Modal from '@/components/game/Modal';

export default {
  props: {
    value: Number
  },
  data() {
    return {
      modal: false
    };
  },
  components: {
    Modal
  },
  methods: {
    addPoint() {
      this.modal = true;
    }
  }
};
</script>

<style lang="postcss" scoped>
.game__option {
  @apply w-1/2 my-4;
}

.game__option__content {
  @apply block h-32 w-3/4 mx-auto bg-blue-700 bg-opacity-75 rounded-lg;
}

.game__option__icon {
  @apply text-6xl text-white;
}
</style>
