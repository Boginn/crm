import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",

    user: undefined,

    cases: [],
    criminals: [],
    tasks: [],
    roster: [],
    reports: [],

    caseId: 1,
    taskId: 1,
    criminalId: 1,
    reportId: 1,
    userId: 1,
  },

  getters: {
    // user
    user(state) {
      return state.user;
    },

    search(state) {
      return state.search;
    },

    //
    badges(state) {
      let toSplit = [];
      let takenBadges = [];
      let badges = [];

      for (let i = 1; i <= 100; i++) {
        badges.push(i);
      }

      state.roster.forEach((element) => {
        toSplit.push(element.badge);
      });

      toSplit.forEach((element) => {
        takenBadges.push(parseInt(element.split("REK")[1]));
      });

      badges = badges.filter((badge) => !takenBadges.includes(badge));

      return badges;
    },
    //
    getCrimeById: (state) => (id) => {
      return state.cases[id - 1];
    },

    getCrimeByName: (state) => (name) => {
      for (let i = 0; i < state.cases.length; i++) {
        if (state.cases[i].name == name) {
          return state.cases[i];
        }
      }
    },

    //id
    caseId(state) {
      return state.caseId;
    },
    taskId(state) {
      return state.taskId;
    },
    criminalId(state) {
      return state.criminalId;
    },
    reportId(state) {
      return state.reportId;
    },
    userId(state) {
      return state.userId;
    },

    //
    language() {
      // there is currently only english available
      return ["English"];
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
    fileReport(context, payload) {
      context.commit("FILE_REPORT", payload);
    },
    addCriminal(context, payload) {
      context.commit("ADD_CRIMINAL", payload);
    },
    addTask(context, payload) {
      context.commit("ADD_TASK", payload);
    },
    addUser(context, payload) {
      context.commit("ADD_USER", payload);
    },
    setUser(context, payload) {
      context.commit("SET_USER", payload);
    },

    //id
    setCaseId(context, payload) {
      context.commit("SET_CASE_ID", payload);
    },
    setTaskId(context, payload) {
      context.commit("SET_TASK_ID", payload);
    },
    setCriminalId(context, payload) {
      context.commit("SET_CRIMINAL_ID", payload);
    },
    setReportId(context, payload) {
      context.commit("SET_REPORT_ID", payload);
    },
    setUserId(context, payload) {
      context.commit("SET_USER_ID", payload);
    },
  },

  mutations: {
    //user functions
    SEARCH(state, payload) {
      state.search = payload;
    },
    LOGOUT(state) {
      state.user = undefined;
    },

    FILE_CRIME(state, payload) {
      state.crimeId++;
      state.cases.push(payload);
    },

    FILE_REPORT(state, payload) {
      state.reportId++;
      state.reports.push(payload);
    },
    ADD_CRIMINAL(state, payload) {
      state.criminalId++;
      state.criminals.push(payload);
    },
    ADD_TASK(state, payload) {
      state.taskId++;
      state.tasks.push(payload);
    },
    ADD_USER(state, payload) {
      state.userId++;
      state.roster.push(payload);
    },

    SET_USER(state, payload) {
      state.user = payload;
    },

    //id
    SET_CASE_ID(state, payload) {
      state.caseId = payload;
    },
    SET_TASK_ID(state, payload) {
      state.taskId = payload;
    },
    SET_CRIMINAL_ID(state, payload) {
      state.criminalId = payload;
    },
    SET_REPORT_ID(state, payload) {
      state.reportId = payload;
    },
    SET_USER_ID(state, payload) {
      state.userId = payload;
    },
  },

  modules: {},
});
