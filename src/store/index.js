import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    search: '',

    user: undefined,

    cases: [],
    criminals: [],

    tasks: [],
    

    roster: [],

    reports: [],
  },

  getters: {
    user(state) {
      return state.user;
    },

    search(state) {
      return state.search;
    },
    id(state) {
      return state.cases.length+1;
    },

    //arrays
    cases(state) {
      return state.cases;
    },
    criminals(state) {
      return state.criminals;
    },
    tasks(state) {
      return state.tasks;
    },
    roster(state) {
      return state.roster;
    },
    reports(state) {
      return state.reports;
    },
  },

  actions: {
    fileCrime(context, payload) {
        context.commit("FILE_CRIME", payload);

     },
    setUser(context, payload) {
        context.commit("SET_USER", payload);

     },
  },

  mutations: {
    SEARCH(state, payload) {
      state.search = payload;
    },

    FILE_CRIME(state, payload) {
      state.cases.push(payload);
    },

    SET_USER(state, payload) {
      state.user = payload;
    },

    LOGOUT(state) {
      state.user = undefined;
    },
  },
  
  modules: {
  }
})
