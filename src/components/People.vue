<template>
  <v-row>
    <v-col class="ml-5" cols="9">
      <h2 class="pl-5">
        {{ title }} ({{ people.length }})
        <v-divider width="200" class="mb-5"></v-divider>
      </h2>

      <v-btn outlined @click="add()">
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>

      <v-btn outlined v-if="suspected"
        ><v-icon>
          mdi-account-multiple-plus
        </v-icon></v-btn
      >

      <v-btn outlined @click="expand = !expand"
        ><v-icon>
          mdi-unfold-more-horizontal
        </v-icon></v-btn
      >

      <div v-if="expand">
        <v-col
          v-for="person in people.slice().reverse()"
          :key="person.id"
          class="mb-5"
        >
          <v-row>
            <v-col>
              <v-text-field
              filled
                v-model="person.name"
                :rules="rules.name"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
              filled
                v-model="person.address"
                :rules="rules.default"
                label="Address"
                
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
              filled
                v-model="person.age"
                :rules="rules.default"
                label="Age"
                
              ></v-text-field>

              <v-text-field
              filled
                v-model="person.phone"
                :rules="rules.default"
                label="Phone"
                
              ></v-text-field>
            </v-col>
            <v-row v-if="person.suspect">
              <v-col>
                <v-checkbox
                dense
                  v-model="person.hasBeenToPrison"
                  :rules="rules.checkbox"
                  label="Has this person been in prison?"
                  
                ></v-checkbox>
                <v-text-field
                
                  v-model="person.note"
                  :rules="rules.default"
                  label="Note"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
<div class="mt-5">



                  <v-btn outlined @click="expand = !expand"
        ><v-icon>
          mdi-check
        </v-icon></v-btn
      >

            <v-btn outlined v-if="suspected"
              ><v-icon>
                mdi-account-multiple-plus
              </v-icon></v-btn
            >
</div>
          </v-row>
        </v-col>
      </div>

      <div v-else>
        <v-container>
          <h3 v-for="person in people.slice().reverse()" :key="person.id">
            {{ person.name }}, {{ person.age }}
                        <v-btn small outlined @click="remove(person)"
              ><v-icon>
                mdi-beaker-remove
              </v-icon></v-btn
            >

            <v-divider class="mt-2"></v-divider>
          </h3>
        </v-container>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import data from "../data/data.js";
import services from "../services/services.js";
export default {
  name: "People",

  created() {
    if (this.suspected) {
      this.title = "Suspects";
    } else {
      this.title = "Victims";
    }
  },

  props: {
    people: Array,
    crimeId: Number,
    suspected: Boolean,
  },

  computed: {
    rules() {
      return services.rules;
    },
  },

  data: () => ({
    title: "",
    expand: true,
    id: 0,
  }),

  methods: {
    add() {
      console.log(this.people);
      this.id++;
      if (this.suspected) {
        this.people.push(new data.Suspect(this.id, this.crimeId));
      } else {
        this.people.push(new data.Victim(this.id, this.crimeId));
      }
      this.expand = true;
    },
    remove(person) {
      console.log(this.people);
      this.people.splice(this.people.indexOf(person), 1);
    },
  },
};
</script>

<style>
.v-btn {
  margin-left: 25px;
}
</style>
