<template>
  <v-container>
    <v-row class="d-flex justify-start">


      <Search :location="$options.name"/>


    <v-dialog v-model="expand" width="500">

      <template v-slot:activator="{ on }">
        <span @click="draft()" v-on="on">
          <NavChip :option="option" />
        </span>
      </template>

      
            <v-card class="seventh">
        <v-card-title class="secondary">
          Add Task
        </v-card-title>

       <v-form ref="form" v-if="subject">
        <v-col cols="12">
          <v-text-field
            filled
            dense
            v-model="subject.name"
            :rules="rules.default"
            label="Description"
            required
          ></v-text-field>
          <v-select
            :placeholder="user.badge"
            filled
            dense
            :item-value="user.badge"
            v-model="assigned"
            :items="badges"
            required
          >
          </v-select>
        <v-divider></v-divider>
                  <v-card-actions>
          <v-btn small outlined @click="validate()" title="Ok"
            ><v-icon>
              mdi-check
            </v-icon></v-btn
          >
          <v-btn small outlined @click="cancel()" title="Cancel"
            ><v-icon>
              mdi-cancel
            </v-icon></v-btn
          >
                  </v-card-actions>
        </v-col>
      </v-form>


          <v-spacer></v-spacer>
 
      </v-card>
    </v-dialog>

    
      <v-data-table
        :headers="headers"
        :items="tasks"
        :search="search"
        :items-per-page="10"
        item-key="id"
        class="elevation-6 seventh ma-5 pa-4 fill-width font-shadow"
      >

   <!-- eslint-disable-next-line -->
        <template v-slot:item.status="{ item }">

          <v-row class="d-flex justify-center align-center flex-wrap">
            <v-checkbox
              v-if="user.badge == item.assigned || user.admin"
              v-model="item.status"
              class="ml-1 shrink"
            ></v-checkbox>
            <span class="green--text" v-if="item.status">Yes</span
            ><span class="red--text" v-else>No</span>
          </v-row>
        </template>
        
           <!-- eslint-disable-next-line -->
        <template v-slot:item.assigned="{ item }">

        <span class="yellow--text" v-if="user.badge == item.assigned">  {{item.assigned}}</span>
        <span v-else>  {{item.assigned}}</span>
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
import data from "../data/data.js";
import services from "../services/services.js";

export default {
  name: "Tasks",

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
    id() {
      return this.$store.getters.taskId;
    },
    user() {
      return this.$store.getters.user;
    },
    roster() {
      return this.$store.getters.roster;
    },
    search() {
      return this.$store.getters.search;
    },
    tasks() {
      return this.$store.getters.tasks.slice().reverse();
    },
    headers() {
      return data.headers.tasks;
    },
    option() {
      return data.otherOptions[0];
    },

    rules() {
      return services.rules;
    },
    badges() {
      let badges = [];
      this.roster.forEach((user) => {
        badges.push(user.badge);
      });

      return badges;
    },
  },

  data: function() {
    return {
      assigned: undefined,
      expand: false,

      isEditing: false,
      subject: undefined,
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.add();
      }
    },

    draft() {
      
      this.subject = new data.Task(this.id, services.getDateWithHour());
      this.expand = true;
    },
    add() {
      if (this.subject) {
        this.subject.assigned = this.assigned ? this.assigned : this.user.badge;
        this.$store.dispatch('addTask', this.subject);
        // this.tasks.push(this.blank[0]);
      }
      this.cancel();
    },
    remove(obj) {
      this.tasks.splice(this.tasks.indexOf(obj), 1);
      this.expand = false;
    },
    cancel() {
   
      this.expand = false;
    },
  },
};
</script>
