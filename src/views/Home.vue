<template>
  <v-container>
    <v-row class="d-flex justify-center flex-wrap-reverse align-content-center mt-6">
      <v-col
        cols="8"
        xl="4"
        lg="4"
        md="4"
        sm="8"
        xs="8"
        v-for="option in options"
        :key="option.name"
      >
        <v-card
          class="pa-2 ma-3 font-shadow bgimg"
          :class="option.color"
        >

          <router-link class="white--text" :to="`/${(option.name).toLowerCase()}/`">
            <v-card-title class="d-flex justify-center" >
              {{ option.name }} 
            <v-icon x-large class="ml-2"> {{option.icon}}</v-icon>
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
    options() {
      return data.options;
    }
  },

  data: function() {
    return {

    };
  },

  methods: {},
};
</script>
