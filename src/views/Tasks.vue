<template>
  <v-container>
    <v-row class="d-flex justify-start">
      <Search :location="$options.name" />

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
                v-if="user.delegate"
                placeholder="Assign to"
                filled
                dense
                v-model="assigned"
                :items="badges"
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
        <template v-slot:header.status="{}">
          <v-row
            class="d-flex justify-center align-center flex-wrap"
            style="margin-bottom: -25px;"
          >
            Include Completed
            <v-checkbox v-model="showOpen" class="ml-1 shrink"></v-checkbox>
          </v-row>
        </template>

        <!-- eslint-disable-next-line -->
        <template v-slot:item.name="{ item }">
          <v-dialog v-model="dialog" width="500" :retain-focus="false">
            <template v-slot:activator="{ on }">
              <span v-on="on" @click="dialogTask = item" class="table">{{ item.name.substring(0, 90)}}

<span v-if="item.name.length>=90">...</span>

              </span>
            </template>

            <template v-if="dialogTask">
              <v-card class="tertiary">
                <v-card-title> {{ dialogTask.assigned }}</v-card-title>

                <v-card-text>
                  {{ dialogTask.name }}
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions class="d-flex justify-center">
                  <v-btn color="vuegrey" text @click="dialog = false">
                    Close
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </template>

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
          <v-select
            v-if="user.delegate"
            color="tertiary"
            class="mr-3 "
            dense
            v-model="item.assigned"
            :items="badges"
          ></v-select>
          <span v-else>
            <span class="yellow--text" v-if="user.badge == item.assigned">
              {{ item.assigned }}</span
            >
            <span v-else> {{ item.assigned }}</span>
          </span>
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
      if (!this.showOpen) {
        return this.$store.getters.tasks
          .slice()
          .reverse()
          .filter((task) => task.status == false);
      } else {
        return this.$store.getters.tasks.slice().reverse();
      }
    },
    headers() {
      return data.headers.tasks;
    },
    option() {
      let option;
      data.dialogRoutes.forEach((element) => {
        if (element.name == "New Task") {
          option = element;
        }
      });
      return option;
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
      dialog: false,
      expand: false,
      showOpen: true,

      dialogTask: undefined,
      isEditing: false,
      subject: undefined,
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.add();
        this.reset();
      }
    },
    reset() {
      this.$refs.form.reset();
    },

    draft() {
      this.subject = new data.Task(this.id, services.getDateWithHour());
      this.expand = true;
    },
    add() {
      if (this.subject) {
        if (this.user.delegate) {
          this.subject.assigned = this.assigned ? this.assigned : "";
        }
        this.$store.dispatch("addTask", this.subject);
      }
      this.cancel();
    },

    cancel() {
      this.reset();
      this.expand = false;
    },
  },
};
</script>

<style scoped>
.table {
  cursor: pointer;
  color: #f0c03c !important;
  font-weight: bold;
}
.table:hover {
  color: white !important;
}
</style>
