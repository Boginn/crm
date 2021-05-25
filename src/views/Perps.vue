<template>
  <v-container>
    <v-row>

        <Search/>
        
        
      <v-col>

        
        
    <v-simple-table class="sixth">
     
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Age
            </th>
            <th class="text-left">
              Address
            </th>
            <th class="text-left">
              Phone
            </th>
            <th class="text-left">
              Ever Imprisoned
            </th>
            <th class="text-left">
              Note
            </th>
             </tr>
        </thead>
        <tbody v-for="criminal in criminals" :key="criminal.id">
          <tr v-if="search != undefined && criminal.name.toLowerCase().includes(search.toLowerCase())">
            <td>
                {{ criminal.name }}
            </td>

            <td>
                {{ criminal.age }}
            </td>

            <td>
                {{ criminal.address }}
            </td>
            <td>
                {{ criminal.phone }}
            </td>
            <td>
                {{ criminal.hasBeenToPrison }}
            </td>
            <td>
                {{ criminal.note }}
            </td>

          </tr>
        </tbody>
      
    </v-simple-table>
          </v-col>
    </v-row>
 <Back/>
  </v-container>
</template>

<script>
import Search from '../components/Search'
import Back from '../components/Back'


export default {
  name: "Perps",

    created() {

  },

  components: {
   Search,
   Back
  },

  computed: {
        search() {
      return this.$store.getters.search;
    },
        criminals() {
      return this.$store.getters.criminals;
    },
  },

    data: function() {
    return {


    };
  },

  methods: {

  },

};
</script>
