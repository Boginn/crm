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

    caseId(state) {
      return state.cases.length+1;
    },
    taskId(state) {
      return state.tasks.length+1;
    },
    criminalId(state) {
      return state.criminals.length+1;
    },

    //
    language() {
      // there is currently only english available
      return 'English';
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
    addCriminal(context, payload) {
        context.commit("ADD_CRIMINAL", payload);

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
    ADD_CRIMINAL(state, payload) {
      state.criminals.push(payload);
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
