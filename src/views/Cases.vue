<template>
  <v-container>
    <v-row>
      <Search />

      <v-col>
        <v-simple-table class="fifth">
          <thead>
            <tr>
              <th class="text-left" @click="sortByName()">
                Name <v-icon small >mdi-sort-ascending</v-icon>
              </th>
              <th class="text-left" >
                Address 
              </th>
              <th class="text-left" >
                Committed 
              </th>
              <th class="text-left" >
                Added 
              </th>
              <th class="text-left" @click="sortBySeverity()">
                Severity <v-icon small >mdi-sort-ascending</v-icon>
              </th>
              <th class="text-left" @click="sortByOpen()">
                Open <v-checkbox>Open</v-checkbox>
              </th>
            </tr>
          </thead>
          <tbody v-for="crime in cases" :key="crime.id">
            <tr v-if="crime.name.toLowerCase().includes(search.toLowerCase())">
              <td>
                <router-link class="white--text" :to="`${crime.id}`">
                  {{ crime.name }}
                </router-link>
              </td>

              <td>
                <router-link class="white--text" :to="`${crime.id}`">
                  {{ crime.address }}
                </router-link>
              </td>

              <td>
                <router-link class="white--text" :to="`${crime.id}`">
                  {{ crime.committed }}
                </router-link>
              </td>
              <td>
                <router-link class="white--text" :to="`${crime.id}`">
                  {{ crime.date }}
                </router-link>
              </td>
              <td>
                <router-link class="white--text" :to="`${crime.id}`">
                  {{ crime.severity }}
                </router-link>
              </td>
              <td>
                <router-link class="white--text" :to="`${crime.id}`">
                  <span v-if="crime.caseOpen">Open</span
                  ><span v-else>Closed</span>
                </router-link>
              </td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-col>
    </v-row>

    <Back />
  </v-container>
</template>

<script>
import Search from "../components/Search.vue";
import Back from "../components/Back.vue";
import services from "../services/services.js";

export default {
  name: "Cases",

  components: {
    Search,
    Back,
  },

  created() {
    this.cases = this.defaultCases;
  },

  computed: {
    search() {
      return this.$store.getters.search;
    },
    defaultCases() {
      return this.$store.getters.cases;
    },
    
   
  },

  data: function() {
    return {
      cases: undefined,

      filters: {
        severity: true,
        name: true,

        open: true,
      }
    };
  },

  methods: {
sortBySeverity() {
    this.cases = services.sorters.sortBySeverity(this.defaultCases, this.filters.severity);
    this.filters.severity = !this.filters.severity;
},
sortByName() {
    this.cases = services.sorters.sortByName(this.defaultCases, this.filters.name);
    this.filters.name = !this.filters.name;
},


sortByOpen() {
    this.filters.open = !this.filters.open;
},
  },
};
</script>
