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

      <div v-if="expand && subject">
        <v-col

          class="mb-5"
        >
          <v-row>
            <v-col
                    :xs="12"
        :sm="12"
        :md="6"
        :lg="4">
              <v-text-field
              filled
              dense
                v-model="subject.name"
                :rules="rules.name"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
              filled
              dense
                v-model="subject.address"
                :rules="rules.default"
                label="Address"
                
              ></v-text-field>

              <v-text-field
              filled
              dense
                v-model="subject.age"
                :rules="rules.default"
                label="Age"
                
              ></v-text-field>

              <v-text-field
              filled
              dense
                v-model="subject.phone"
                :rules="rules.default"
                label="Phone"
                
              ></v-text-field>
            </v-col>
            <v-row v-if="subject.suspect">
              <v-col>
                <v-checkbox
                dense
                  v-model="subject.hasBeenToPrison"
                  :rules="rules.checkbox"
                  label="Has this person been in prison?"
                  
                ></v-checkbox>
                <v-text-field
                
                  v-model="subject.note"
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

            <v-divider class="mt-2 mb-2"></v-divider>
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
    subject() {
      return this.people.slice().reverse()[0];
    }
  },

  data: () => ({
    title: "",
    expand: true,
    id: 0,
  }),

  methods: {
    add() {
      this.id++;
      if (this.suspected) {
        this.people.push(new data.Suspect(this.id, this.crimeId));
      } else {
        this.people.push(new data.Victim(this.id, this.crimeId));
      }
      this.expand = true;
    },
    remove(person) {
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
