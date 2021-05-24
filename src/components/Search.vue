<template>
  <v-container>
    <v-row justify="center" class="text-center">
      <v-text-field
        class="shrink mr-3"
        label="Search"
        v-model="search"
        hide-details="auto"
      ></v-text-field>
      <v-icon class="mt-5">mdi-magnify</v-icon>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Search",

  computed: {
    search: {
      get() {
        return this.$store.state.search;
      },
      set(value) {
        this.$store.commit("SEARCH", value);
      },
    },
  },

  data: () => ({}),
};
</script>
