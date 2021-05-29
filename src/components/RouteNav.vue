<template>
  <div class="d-md-inline-flex">
    <v-icon @click="$router.go(-1)">mdi-arrow-left</v-icon>

    <router-link to="/crm" class="white--text">
      <v-tab>
        <v-icon @click="$router.push('/')">mdi-home</v-icon>
        Home
      </v-tab>
    </router-link>

    <router-link to="/perps" class="white--text">
      <v-tab>
        <v-icon>mdi-account-cowboy-hat</v-icon>
        Perps
        <!-- <v-icon>mdi-emoticon-devil</v-icon> -->
        <!-- <v-icon>mdi-head-plus-outline</v-icon> -->
      </v-tab>
    </router-link>

    <router-link to="/tasks" class="white--text">
      <v-tab>
        <v-icon>mdi-folder-table</v-icon>
        Tasks
      </v-tab>
    </router-link>

    <router-link to="/cases" class="white--text">
      <v-tab>
        <v-icon>mdi-file-multiple</v-icon>
        Cases
      </v-tab>
    </router-link>

    <v-icon @click="$router.go(1)">mdi-arrow-right</v-icon>
  </div>
</template>

<script>
export default {
  name: "RouteNav",
};
</script>
