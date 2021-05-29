<template>
  <v-container>
    <v-row
      class="d-flex justify-center flex-wrap-reverse align-content-center mt-6"
    >
      <v-col cols="6">
        <v-row>
          <v-col>
           
            <v-text-field v-model="input" label="Change name" :placeholder="user.name">
            </v-text-field>
          </v-col>
          <v-col  v-if="input"
            cols="2"
            class="d-flex justify-center flex-wrap-reverse align-content-center"
          >
            <v-btn small outlined @click="updateName()"><v-icon>mdi-check</v-icon></v-btn>
          </v-col>
        </v-row>
        <v-select
          :items="items"
          prepend-icon="mdi-web"
          label="Language"
          :placeholder="language"
        >
        </v-select>
        <router-link :to="'/logout/'" class="white--text">
          <v-btn outlined block><v-icon>mdi-logout</v-icon> Logout</v-btn>
        </router-link>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Settings",

  created() {
    if (!this.user) {
      if (this.$route.path != "/") {
        this.$router.push("/");
      }
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    items() {
      return ["English"];
    },
    language() {
      //
      return this.$store.getters.language;
    },
  },

  data: () => ({
    input: undefined,
  }),

  methods: {
    updateName() {
      this.user.name = this.input;
    },
  }
};
</script>
