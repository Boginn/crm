<template>
  <v-container> </v-container>
</template>

<script>
export default {
  name: "Logout",

  created() {
    this.user = undefined;
    this.$router.push("/");
  },

  computed: {
    user: {
      get() {
        return this.$store.state.user;
      },
      set() {
        this.$store.commit("LOGOUT");
      },
    },
  },
};
</script>
