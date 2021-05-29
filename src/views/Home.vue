<template>
  <v-container>
    <v-row class="d-flex justify-center flex-wrap-reverse">
      <v-col
        cols="8"
        xl="4"
        lg="4"
        md="4"
        sm="8"
        xs="8"
        class="mt-6"
        v-for="option in options"
        :key="option.name"
      >
        <v-card
          class="pa-10 ma-3 bgimg"
          style="border: 13px solid blue"
        >
        <!-- <v-card
          class="pa-10 ma-3 bgimg"
          :style="{ 'background-image': 'url(' + option.image + ')' }"
        > -->
          <router-link class="white--text" :to="`/${(option.name).toLowerCase()}/`">
            <v-card-title class="d-flex justify-center" >
              {{ option.name }}
            <v-icon>{{option.icon}}</v-icon>
            </v-card-title>
          </router-link>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  components: {},
  created() {},
  computed: {},

  data: function() {
    return {
      options: [
        {
          name: "Perps",
          image: require("@/assets/file.png"),
          icon: 'mdi-account-cowboy-hat',
          color: 'sixth',
        },
        {
          name: "Tasks",
          image: require("@/assets/tasks.png"),
          icon: 'mdi-folder-table',
          color: 'seventh',
        },
        {
          name: "Cases",
          image: require("@/assets/cases.png"),
          icon: 'mdi-file-multiple',
          color: 'fifth',
        },
        {
          name: "Report",
          image: require("@/assets/report.png"),
          icon: 'mdi-file-document-edit',
          color: 'tertiary',
        },
        {
          name: "File",
          image: require("@/assets/file.png"),
          icon: 'mdi-file-upload',
          color: 'accent',
        },
      ],
    };
  },

  methods: {},
};
</script>
