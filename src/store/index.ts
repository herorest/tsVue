import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = {
  namespaced: true,
  state: {
    title: '测试标题1',
    charts: [

    ],
    report: ''
  },
  mutations: {},
  actions: {},
  getters: {}
};

export default new Vuex.Store({
  modules: {
    mainStore: store
  }
});