import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    points: 0
  },
  mutations: {
    incrementPoints(state, n) {
      state.points += n;
    }
  },
  actions: {
    addPoints({ commit }, payload) {
      commit('incrementPoints', payload);
    }
  }
});
