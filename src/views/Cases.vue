<template>
  <v-container>
    <v-row class="d-flex justify-start" >


      <Search :location="$options.name"/>

      <NavChip v-if="user.active"  :option="option" class="mt-3"/>

      <v-data-table
        :headers="headers"
        :items="cases"
        :search="search"
        :items-per-page="10"
        item-key="name"
        class="elevation-6 fifth ma-5 pa-4 mt-8 fill-width  font-shadow"
      >
         <!-- eslint-disable-next-line -->
        <template v-slot:header.caseOpen="{}">
          <v-row class="d-flex justify-center align-center flex-wrap">

          Include Closed
          <v-checkbox v-model="showOpen"  class="ml-1 shrink"></v-checkbox>
          </v-row>
        </template>
   <!-- eslint-disable-next-line -->
        <template v-slot:item.name="{ item }">
          <router-link :to="`/cases/${item.id}`" class="table">
            <v-icon class="mb-1" small>mdi-arrow-top-left</v-icon>
        {{ item.name }}
          </router-link>
        </template>
   <!-- eslint-disable-next-line -->
        <template v-slot:item.severity="{ item }">
          <span class="green--text" v-if="item.severity < 4">{{item.severity}}</span>
          <span class="yellow--text" v-else-if="item.severity < 7">{{item.severity}}</span>
          <span class="red--text" v-if="item.severity >= 7">{{item.severity}}</span>
        </template>
   <!-- eslint-disable-next-line -->
        <template v-slot:item.caseOpen="{ item }">
          <span class="green--text" v-if="item.caseOpen">Open</span><span class="red--text" v-else>Closed</span>
        </template>
   <!-- eslint-disable-next-line -->
        <template v-slot:item.committedValue="{ item }">
         {{item.committed}}
        </template>
           <!-- eslint-disable-next-line -->
        <template v-slot:item.dateValue="{ item }">
         {{item.date}}
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

    created() {
    if (!this.user) {
      this.$router.push("/");
    }
  },

  components: {
    Search,
    NavChip,
    Back,
  },


  computed: {
        user() {
      return this.$store.getters.user;
    },
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
      let option;
      data.publicRoutes.forEach((element) => {
        if (element.name == "File") {
          option = element;
          }
      });
          return option;
    },
  },

  data: function() {
    return {
      showOpen: true,


    };
  },
};
</script>

<style scoped>
.table {
  font-size: 12pt;
  color: #f0c03c !important;
  font-weight: bold;
  
  
}
.table:hover {
  color: white !important;
  
}
</style>