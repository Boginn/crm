<template>
  <v-container>
    <v-row>
      <v-card>
        <v-list>
          <v-list-item>{{reports}}</v-list-item>
        </v-list>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'RecentReports',

  props: {
    reports: Array,
  },
}
</script>

<style>

</style>