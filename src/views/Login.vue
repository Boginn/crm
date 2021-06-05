<template>
  <v-container class="mt-16">
    <v-row class="d-flex justify-center">
      <v-col cols="12" sm="10" md="8" lg="8" xl="8">
        <v-card class="pa-10 sixth ">
          <v-row class="text-center font-shadow">
            <v-col>
              <h1 class="title shadow">
                LÖKE
              </h1>




              <h3 class="shadow">
                {{ msg }}
              </h3>
            </v-col>
          </v-row>

          <v-form ref="form" v-model="valid" lazy-validation class="bgimg font-shadow" :style="{ 'background-image': 'url(' +require('@/assets/logotp.png')+ ')'  }">
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="10" md="10" lg="8" xl="8">
                <v-text-field
                  filled
                  v-model="input.username"
                  :rules="rules.name"
                  label="Name"
                  required
                  @keypress.enter="validate"
                ></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
            <v-row>
              <v-spacer></v-spacer>
              <v-col cols="12" sm="10" md="10" lg="8" xl="8">
                <v-text-field
                  filled
                  type="password"
                  v-model="input.password"
                  :rules="rules.default"
                  label="Password"
                  required
                  @keypress.enter="validate"
                ></v-text-field>
              </v-col>
              <v-spacer></v-spacer>
            </v-row>
            <v-row>
              <v-col class="text-center">
                <v-btn :disabled="!valid" color="primary" @click="validate">
                  submit
                </v-btn>
              </v-col>
            </v-row>
          </v-form>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import services from "../services/services.js";

export default {
  name: "Login",

  created() {
    if (this.user) {
      this.$router.push("crm/");
    }
  },

  computed: {
    rules() {
      return services.rules;
    },
    roster() {
      return this.$store.getters.roster;
    },
    user() {
      return this.$store.getters.user;
    },
  },

  data: function() {
    return {
      image: "../assets/logotp.png",
      msg: "...",

      input: {
        username: "fannar",
        password: "ntv",
      },

      valid: true,
      auth: false,
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        let user;

        this.roster.forEach((u) => {
          if (u.username == this.input.username) {
            user = u;
          } else {
            this.msg = "User not found";
          }
        });

        if (user.password == this.input.password) {
          this.reset();
          this.msg = "Verified";
          this.$store.dispatch("setUser", user);

          this.$router.push("crm/");
        } else {
          this.msg = "Wrong password";
        }
      }
    },
    reset() {
      this.$refs.form.reset();
    },
  },
};
</script>

<style scoped>
.title {
  font-family: Georgia, 'Times New Roman', Times, serif !important;
  font-size: 22pt !important;
}
.shadow {
   text-shadow: black 3px 3px !important;
}
</style>