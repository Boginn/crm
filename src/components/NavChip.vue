<template>
  <v-btn
    style="margin-bottom: -35px; text-transform: none;"
    class="ml-10 font-shadow"
    :class="option.color"
  >
    <router-link class="white--text" :to="`${path}`">
      <v-card-title class="pt-1 pb-1 pl-2 pr-2">
        {{ option.name }}
        <v-icon class="ml-2"> {{ option.icon }}</v-icon>
      </v-card-title>


      
    </router-link>
  </v-btn>
</template>

<script>
export default {
  name: "NavChip",

  props: {
    option: Object,
  },

  computed: {
    path() {
      if (!this.option.path) {
        return "";
      } else {
        return `/${this.option.path}`;
      }
    },
  },
};
</script>
