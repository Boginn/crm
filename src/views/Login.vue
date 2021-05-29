<template>
  <v-container class="mt-16">
    <v-row>
      <v-col>
        <v-card class="pa-10 sixth ">
          <v-row class="text-center">
            <v-col>
              <h1 class="title">
                LÖKE
              </h1>




              <h2>
                {{ msg }}
              </h2>
            </v-col>
          </v-row>
          <v-form ref="form" v-model="valid" lazy-validation class="bgimg" :style="{ 'background-image': 'url(' +require('@/assets/logotp.png')+ ')'  }">
            <v-row>
              <v-spacer></v-spacer>
              <v-col>
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
              <v-col>
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
                <v-btn :disabled="!valid" color="secondary" @click="validate">
                  Submit
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
    users() {
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

        this.users.forEach((u) => {
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
