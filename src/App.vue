<template>
  <v-app>
    <v-app-bar app dark color="primary" v-if="user">
<v-spacer></v-spacer>

      <RouteNav> </RouteNav>

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

        <!-- <router-link class="white--text" to="/crm">
          <v-img
            alt="LÖKE"
            class="shrink hidden-sm-and-down"
            contain
            min-width="110"
            src="./assets/name.png"
            width="110"
          />
        </router-link> -->
      </div>

<v-spacer></v-spacer>

    </v-app-bar>

    <v-main class="fourth">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import RouteNav from "./components/RouteNav.vue";

export default {
  name: "App",

  components: {
    RouteNav,
  },

  created() {
    
      if(!this.user) {

        this.$router.push("/");
      }
    
  },

  computed: {
    user() {
      return this.$store.getters.user;
    }
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
.margins {
  margin-left: 100px;
  margin-right: 100px;
}
</style>
