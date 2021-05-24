<template>
  <v-container>
    <v-row>
        <Search>
        </Search>

      <v-col>
        
        
    <v-simple-table class="fifth">
     
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Address
            </th>
            <th class="text-left">
              Added
            </th>
            <th class="text-left">
              Committed
            </th>
            <th class="text-left">
              Severity
            </th>
            <th class="text-left">
              Open
            </th>
          </tr>
        </thead>
        <tbody v-for="crime in cases" :key="crime.id">
          <tr v-if="crime.name.toLowerCase().includes(search.toLowerCase())">
            <td>
              <router-link class="white--text" :to="`cases/${crime.id}`">
                {{ crime.name }}
              </router-link>
            </td>

            <td>
              <router-link class="white--text" :to="`cases/${crime.id}`">
                {{ crime.address }}
              </router-link>
            </td>

            <td>
              <router-link class="white--text" :to="`cases/${crime.id}`">
                {{ crime.date }}
              </router-link>
            </td>
            <td>
              <router-link class="white--text" :to="`cases/${crime.id}`">
                {{ crime.committed }}
              </router-link>
            </td>
            <td>
              <router-link class="white--text" :to="`cases/${crime.id}`">
                {{ crime.severity }}
              </router-link>
            </td>
            <td>
              <router-link class="white--text" :to="`cases/${crime.id}`">
                <span v-if="crime.caseOpen">Open</span
                  ><span v-else>Closed</span>
              </router-link>
            </td>
          </tr>
        </tbody>
    </v-simple-table>
          </v-col>
    </v-row>

      <Back>
      </Back>
  </v-container>
</template>

<script>
import Search from '../components/Search.vue'
import Back from '../components/Back.vue'
import examples from '../data/examples.js'

export default {
  name: "Cases",

  components: {
    Search,
    Back,
  },

  created() {
    examples.crimes.forEach(element => {
      this.cases.push(element)
    });
  },

  computed: {
            search() {
      return this.$store.getters.search;
    },
    cases() {
      return this.$store.getters.cases;
    },
  },

  data: function() {
    return {};
  },


};
</script>
