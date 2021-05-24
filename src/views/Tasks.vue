<template>
<v-container>
    <v-row>
        <Search>
        </Search>

      <v-col>
        
        
    <v-simple-table class="seventh">
     
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Assigned
            </th>
            <th class="text-left">
              Complete
            </th>

          </tr>
        </thead>
        <tbody v-for="task in tasks" :key="task.id">
          <tr v-if="task.name.toLowerCase().includes(search.toLowerCase())">
            <td>
                {{ task.name }}
            </td>

            <td>
                {{ task.assigned }}
            </td>

            <td>
                {{ task.status }}
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
  name: "Tasks",

  components: {
    Search,
    Back,
  },

  created() {
    examples.tasks.forEach(element => {
      this.tasks.push(element)
    });
  },

  computed: {
            search() {
      return this.$store.getters.search;
    },
    tasks() {
      return this.$store.getters.tasks;
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
