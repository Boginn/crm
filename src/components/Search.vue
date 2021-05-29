<template>
  <v-container >
    <v-row class="d-flex justify-center">
      <v-text-field
        class="shrink ml-2"
        :label="label"
        v-model="search"
        hide-details="auto"
      >
      </v-text-field>
      <v-icon class="mt-5">mdi-magnify</v-icon>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Search",

  props: {
    location: String,
  },

  computed: {
    label() {
      if (this.location) {
        return `Search in ${this.location}`;
      } else {
        console.log(this.location);
        return "Search";
      }
    },
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
