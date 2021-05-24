<template>
  <v-container>
    <v-row>
      <v-col
        :sm="6"
        :md="4"
        class="mt-6"
        v-for="option in options"
        :key="option"
      >
        <v-card class="fifth pa-16 ma-5">
          <router-link class="white--text" :to="`/${option}/`">
            <v-card-title class="d-flex justify-center">
              {{ option }}
            </v-card-title>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import HelloWorld from '../components/HelloWorld'

export default {
  name: "Home",

  components: {
    // HelloWorld,
  },

  computed: {
    /*
    bool: {
      get() {
        return this.$store.state.bool;
      },
      set(value) {
        this.$store.commit("SET_BOOL", value);
      },
    },
    */
  },

  data: function() {
    return {
      options: ["cases", "tasks", "perps", "file", "report", 'logout'],
    };
  },

  methods: {},
};
</script>
