<template>
  <v-app>
    <v-system-bar v-if="user" color="primary" height="70">
      <!-- <v-app-bar app dark color="primary" v-if="user"> -->
      <v-container fluid>
        <v-row>
          <v-col class="d-flex align-content-center flex-wrap">
            <v-tab>
              <!-- <RouteNav/> -->
              <router-link to="/" class="white--text">
                <DigitalClock :blink="true" class="ml-2" />
              </router-link>
            </v-tab>
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            cols="6"
            class="d-none d-md-inline-flex justify-center align-content-center flex-wrap "
          >
            <RouteNav />
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="d-flex justify-end">
            <User :user="user" />
          </v-col>
        </v-row>
      </v-container>
    </v-system-bar>
    <!-- </v-app-bar> -->

    <v-main class="fourth">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import RouteNav from "./components/RouteNav.vue";
import User from "./components/User.vue";
import DigitalClock from "vue-digital-clock";
import examples from "./data/examples.js";

export default {
  name: "App",

  components: {
    RouteNav,
    User,
    DigitalClock,
  },

  created() {
    if (!this.user) {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    }

    //inject examples
if(!this.init) {

  this.seedExamples();
}
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    cases() {
      return this.$store.getters.cases;
    },
    criminals() {
      return this.$store.getters.criminals;
    },
    tasks() {
      return this.$store.getters.tasks;
    },
    reports() {
      return this.$store.getters.reports;
    },
    roster() {
      return this.$store.getters.roster;
    },
  },

  data: () => ({
    init: false,
  }),

  methods: {
    seedExamples() {
      this.init = true;

      this.$store.dispatch("setCaseId", examples.cases.length + 1);
      this.$store.dispatch("setTaskId", examples.tasks.length + 1);
      this.$store.dispatch("setCriminalId", examples.criminals.length + 1);
      this.$store.dispatch("setReportId", examples.reports.length + 1);
      this.$store.dispatch("setUserId", examples.roster.length + 1);

      examples.cases.forEach((element) => {
        this.cases.push(element);
      });
      examples.tasks.forEach((element) => {
        this.tasks.push(element);
      });
      examples.criminals.forEach((element) => {
        this.criminals.push(element);
      });
      examples.reports.forEach((element) => {
        this.reports.push(element);
      });
      examples.roster.forEach((element) => {
        this.roster.push(element);
      });
    },
  },
};
</script>

<style>
a {
  text-decoration: none;
}
.fill-width {
  width: 100%;
}
.bgimg {
  background-repeat: no-repeat;
  background-position: center;
}
.font-shadow {
  text-shadow: black 1px 1px;
}
</style>
