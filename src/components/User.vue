<template>
  <span>
    <v-tab class="d-flex justify-start">
      <v-menu offset-y open-on-hover>
        <template v-slot:activator="{ on }">
          <span v-on="on">

            {{ user.badge }}: {{ user.name }}
          </span>
            <v-icon v-on="on">
              mdi-menu
            </v-icon>
            <v-img
               v-on="on"
              class="ml-2 mr-2 "
              contain
              src="../assets/logo.png"
              transition="scale-transition"
              width="15"
            />

        </template>
        <v-list class="fourth">
          <v-list-item v-for="(item, index) in items" :key="index">
            <router-link :to="item.route" class="white--text">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-tab>
  </span>
</template>

<script>
export default {
  name: "User",

  props: {
    user: Object,
  },

  data: () => ({
    items: [
      {
        title: "Settings",
        route: "/settings",
      },
      {
        title: "Logout",
        route: "/logout",
      },
    ],
  }),
};
</script>
