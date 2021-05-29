<template>
  <v-container>
    <v-row class="d-flex justify-start" >


      <Search :location="$options.name"/>

      <NavChip :option="option" />

      <v-data-table
        :headers="headers"
        :items="cases"
        :search="search"
        :items-per-page="5"
        item-key="name"
        class="elevation-6 fifth ma-5 pa-4 fill-width"
      >
        <template v-slot:header.caseOpen="{}">
          <v-row class="d-flex justify-center align-center flex-wrap">

          Include closed
          <v-checkbox v-model="showOpen"  class="ml-1 shrink"></v-checkbox>
          </v-row>
        </template>

        <template v-slot:item.name="{ item }">
          <router-link :to="`${item.id}`" class="table">
            <v-icon class="mb-1" small>mdi-arrow-top-left</v-icon>
        {{ item.name }}
          </router-link>
        </template>

        <template v-slot:item.caseOpen="{ item }">
          <span class="green--text" v-if="item.caseOpen">Open</span><span class="red--text" v-else>Closed</span>
        </template>

        
      </v-data-table>

    </v-row>

    <Back />
  </v-container>
</template>

<script>
import Search from "../components/Search.vue";
import NavChip from "../components/NavChip.vue";
import Back from "../components/Back.vue";
import data from '../data/data.js'

export default {
  name: "Cases",

  components: {
    Search,
    NavChip,
    Back,
  },

  created() {},

  computed: {
    search() {
      return this.$store.getters.search;
    },
    cases() {
      if (!this.showOpen) {
        return this.$store.getters.cases.filter(
          (crime) => crime.caseOpen == true
        );
      } else {
        return this.$store.getters.cases;
      }
    },
    headers() {
      return data.headers.cases;
    },
    option() {
      return data.options[4];
    }
  },

  data: function() {
    return {
      showOpen: true,


    };
  },
};
</script>

<style >
.table {
  font-size: 12pt;
  color: white;
  font-weight: bold;
  
}
.table:hover {
  color: #13184b;
  
}
</style>