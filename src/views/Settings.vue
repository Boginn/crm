<template>
  <v-container class="pb-16 mt-5">
    <h1 class="text-center font-shadow">Settings</h1>
    <v-row
      class="d-flex justify-center flex-wrap-reverse align-content-center mt-6"
    >
      <v-col xl="10" lg="10" md="10" sm="10" xs="10">
        <v-row class="seventh mb-1">
 <v-icon small class="ml-3 mr-3">mdi-web</v-icon>
                <v-select
          :items="language"
          
          :label="language[0]"
          :placeholder="language[0]"
        >
        </v-select>
        </v-row>
        <v-row >
          <v-icon small class="ml-3">mdi-account</v-icon>
          <v-col>
            <h4 style="color: #babbc3;">
              Logged in as<i> {{ user.username }}</i>
            </h4>
            <v-divider class="vuegrey"></v-divider>
          </v-col>
        </v-row>

        <v-row class="secondary mb-1">
          <v-icon small class="ml-3">mdi-account-outline</v-icon>
          <v-col>
            <v-text-field
              v-model="name"
              :label="'Change display name'"
              :placeholder="user.name"
            >
            </v-text-field>
          </v-col>
          <v-col
            v-if="name"
            cols="2"
            class="d-flex justify-center flex-wrap-reverse align-content-center"
          >
            <v-btn small outlined @click="updateName()"
              ><v-icon>mdi-check</v-icon></v-btn
            >
          </v-col>
        </v-row>

        <v-row class="fifth mb-1">
          <v-icon small class="ml-3">mdi-form-textbox-password</v-icon>
          <v-col>
            <v-text-field
              type="password"
              v-model="password"
              :label="'Change password'"
              :placeholder="user.password"
            >
            </v-text-field>
          </v-col>
          <v-col
            v-if="password"
            cols="2"
            class="d-flex justify-center flex-wrap-reverse align-content-center"
          >
            <v-btn small outlined @click="updatePassword()"
              ><v-icon>mdi-check</v-icon></v-btn
            >
          </v-col>
        </v-row>

        <v-row class="sixth mb-1">
          <v-icon small class="ml-3">mdi-email</v-icon>
          <v-col>
            <v-text-field
              v-model="email"
              :label="'Change email'"
              :placeholder="user.email"
            >
            </v-text-field>
          </v-col>
          <v-col
            v-if="email"
            cols="2"
            class="d-flex justify-center flex-wrap-reverse align-content-center"
          >
            <v-btn small outlined @click="updateEmail()"
              ><v-icon>mdi-check</v-icon></v-btn
            >
          </v-col>
        </v-row>

        <v-row class="seventh mb-1">
          <v-icon small class="ml-3">mdi-phone</v-icon>
          <v-col>
            <v-text-field
              v-model="phone"
              :label="'Change phone'"
              :placeholder="user.phone"
            >
            </v-text-field>
          </v-col>
          <v-col
            v-if="phone"
            cols="2"
            class=" d-flex justify-center flex-wrap-reverse align-content-center"
          >
            <v-btn small outlined @click="updatePhone()"
              ><v-icon>mdi-check</v-icon></v-btn
            >
          </v-col>
        </v-row>

<v-row>
<v-col>

        <router-link :to="'/logout/'" class="white--text">
          <v-btn outlined block class="primary ma-0"
            ><v-icon>mdi-logout</v-icon> Logout</v-btn
          >
        </router-link>
</v-col>
</v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Settings",

  created() {
    if (!this.user) {
      
        this.$router.push("/");
 
    }
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    language() {
      //
      return this.$store.getters.language;
    },
  },

  data: () => ({
    name: undefined,
    password: undefined,
    email: undefined,
    phone: undefined,
  }),

  methods: {
    updateName() {
      this.user.name = this.name;
    },
    updatePassword() {
      this.user.password = this.password;
    },
    updatePhone() {
      this.user.phone = this.phone;
    },
    updateEmail() {
      this.user.email = this.email;
    },
  },
};
</script>
