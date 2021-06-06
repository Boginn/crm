<template>
  <v-container>
    <v-row class="d-flex justify-center flex-wrap-reverse align-content-center mt-6" >
      <v-col
        cols="8"
        xl="4"
        lg="4"
        md="4"
        sm="8"
        xs="8"
        v-for="route in routes"
        :key="route.name"
      >
        <v-card

          class="pa-2 ma-3 font-shadow bgimg"
          :class="route.color"
        >

          <router-link class="white--text" :to="`/${(route.name).toLowerCase()}/`">
            <v-card-title class="d-flex justify-center" >
              {{ route.name }} 
            <v-icon x-large class="ml-2"> {{route.icon}}</v-icon>
            </v-card-title>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
    <v-col>

      <v-divider class="mt-4"></v-divider>
      <h5 class="text-center mt-2">LÖKE. Customer Relationship Management.</h5>
    </v-col>
  </v-container>
</template>

<script>
import data from '../data/data.js'

export default {
  name: "Home",

  created() {
    if (!this.user) {
      this.$router.push("/");
    }
  },

  components: {},

  computed: {
    user() {
      return this.$store.getters.user;
    },
    routes() {
      let routes = [];
      data.publicRoutes.forEach(element => {
        routes.push(element);
      });
      if(this.user.admin) {
        data.adminRoutes.forEach(element => {
          routes.push(element);
        });
      }
      return routes;
    },


  },

  data: function() {
    return {

    };
  },

  methods: {

  },
};
</script>
