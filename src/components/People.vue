<template>
  <v-row>
    <v-col :class="[suspected ? 'seventh' : 'fifth']">
      <v-row>
        <v-col>
          <h2>{{ title }} ({{people.length}})</h2>

          <v-divider width="200"></v-divider>
        </v-col>
      </v-row>
      <v-row class="mb-5">
        <v-btn small outlined @click="draft()" :disabled="expand" title="Add">
          <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>

        <v-btn small outlined v-if="suspected" title="Add from Perps"
          ><v-icon>
            mdi-account-multiple-plus
          </v-icon></v-btn
        >
      </v-row>

      <div>
        <v-row v-if="expand && subject">
          <v-col cols="12">
            <v-text-field
              filled
              dense
              v-model="subject.name"
              :rules="rules.default"
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

            <v-col v-if="subject.suspect" cols="12">
              <div class=" ">
                <v-checkbox
                  dense
                  v-model="subject.hasBeenToPrison"
                  label="Has this person been in prison?"
                ></v-checkbox>

                <v-text-field
                  v-model="subject.note"
                  :rules="rules.default"
                  label="Note"
                ></v-text-field>
              </div>
            </v-col>
          </v-col>

          <v-row>
            <v-col class="mb-5">
              <v-btn small outlined @click="add()" title="Ok"
                ><v-icon>
                  mdi-check
                </v-icon></v-btn
              >
              <v-btn small outlined v-if="suspected" title="Save to Perps"
                ><v-icon>
                  mdi-account-multiple-plus
                </v-icon></v-btn
              >
              <v-btn small outlined @click="remove(subject)" title="Ok"
                ><v-icon>
                  mdi-cancel
                </v-icon></v-btn
              >
            </v-col>
          </v-row>
        </v-row>
      </div>

      <div v-if="!expand">
        <v-container>
          <div v-for="person in people.slice().reverse()" :key="person.id">
            <h3>
              {{ person.name }}<span v-if="person.name && person.age">,</span>
              <b style="font-size: 9pt;" v-if="person.age">
                age {{ person.age }}</b
              >
              <v-btn x-small outlined @click="edit(person)" title="Edit"
                ><v-icon small>
                  mdi-pencil
                </v-icon></v-btn
              >
              <v-btn x-small outlined @click="remove(person)" title="Remove"
                ><v-icon small>
                  mdi-close
                </v-icon></v-btn
              >
            </h3>
            <div v-if="person.address">
              <v-icon x-small class="mr-1">mdi-map-marker</v-icon
              >{{ person.address }}
            </div>
            <div v-if="person.phone">
              <v-icon x-small>mdi-phone</v-icon> {{ person.phone }}
            </div>

            <v-divider class="mt-2 mb-2"></v-divider>
          </div>
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
    this.suspected ? (this.title = "Suspects") : (this.title = "Victims");
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
      return this.blank.slice().reverse()[0];
    },
  },

  data: () => ({
    title: "",
    expand: false,
    id: 0,
    isEditing: false,
    blank: [],
  }),

  methods: {
    draft() {
      if (this.suspected) {
        this.blank.push(new data.Suspect(this.id, this.crimeId));
      } else {
        this.blank.push(new data.Victim(this.id, this.crimeId));
      }
      this.expand = true;
    },
    add() {
      this.id++;
      if(!this.isEmptyObject(this.blank[0])) {

        this.people.push(this.blank[0]);
      }
      this.blank = [];
      console.log(this.people)
      this.expand = false;
    },
    edit(obj) {
      this.expand = true;
      this.blank.push(obj);
      this.people.splice(this.people.indexOf(obj), 1);
    },
    remove(person) {
      this.people.splice(this.people.indexOf(person), 1);
      this.expand = false;
    },
    isEmptyObject(obj) {
      if (
        obj.name == "" &&
        obj.age == "" &&
        obj.address == "" &&
        obj.phone == ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.v-btn {
  margin-left: 25px;
}
</style>
