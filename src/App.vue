<template>
  <v-app>
    <v-system-bar
  height="80"
></v-system-bar>
    <v-app-bar app dark color="primary" v-if="user">
      <v-container fluid >

<v-row  >

 <v-col class="d-flex align-content-center flex-wrap">
      <RouteNav/>

<DigitalClock :blink="true" class="ml-1"/>
</v-col>
<v-spacer></v-spacer>
<v-col class="d-flex justify-center align-content-center flex-wrap">
      <router-link to="/cases" class="white--text">
        <v-tab>
          Cases
        </v-tab>
      </router-link>
      <router-link to="/tasks" class="white--text">
        <v-tab>
          Tasks
        </v-tab>
      </router-link>
      <router-link to="/perps" class="white--text">
        <v-tab>
          Perps
        </v-tab>
      </router-link>
</v-col>
<v-spacer></v-spacer>
<v-col >
      <div class="d-flex text-center">
        <router-link class="white--text" to="/crm">
        <v-img
          alt="Logo"
          class="shrink mr-2 "
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        </router-link>

        <v-tab>
          {{user.badge}}: {{user.name}}
        </v-tab>

      </div>
</v-col>
</v-row>
      </v-container>

    </v-app-bar>

    <v-main class="fourth">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import RouteNav from "./components/RouteNav.vue";
import DigitalClock from "vue-digital-clock";
import examples from "./data/examples.js";


export default {
  name: "App",

  components: {
    RouteNav,
    DigitalClock,
  },

  created() {
    
      if(!this.user) {

        this.$router.push("/");
      }

    examples.criminals.forEach((element) => {
      this.criminals.push(element);
    });
    examples.tasks.forEach((element) => {
      this.tasks.push(element);
    });
    examples.crimes.forEach((element) => {
      this.cases.push(element);
    });
    examples.users.forEach((element) => {
      this.users.push(element);
    });
    
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },


        criminals() {
      return this.$store.getters.criminals;
    },
    tasks() {
      return this.$store.getters.tasks;
    },
    cases() {
      return this.$store.getters.cases;
    },
    users() {
      return this.$store.getters.roster;
    },
  },

  data: () => ({
    //
  }),
};
</script>

<style>

a {
  text-decoration: none;
}


</style>
