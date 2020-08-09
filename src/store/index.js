import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    points: 0,
    countdown: true
  },
  mutations: {
    incrementPoints(state, n) {
      state.points += n;
    },
    stopCountdown(state) {
      state.countdown = false;
    },
    startCountdown(state) {
      state.countdown = true;
    }
  },
  actions: {
    addPoints({ commit }, payload) {
      commit('incrementPoints', payload);
    },
    stopCountdown({ commit }) {
      commit('stopCountdown');
    },
    startCountdown({ commit }) {
      commit('startCountdown');
    }
  }
});
