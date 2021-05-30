<template>

  <v-row style="min-height: 500px;">
    <v-col :class="[suspected ? 'seventh' : 'fifth']" >
      <v-row>
        <v-col>
          <h2>{{ title }} ({{ people.length }})</h2>

          <v-divider width="200"></v-divider>
        </v-col>
      </v-row>
      <v-row class="mb-5">
        <v-btn small outlined @click="draft()" :disabled="expand" title="Add">
          <v-icon>mdi-account-plus-outline</v-icon>
        </v-btn>



      <v-menu offset-y >
        <template v-slot:activator="{ on }">
        <v-btn v-on="on" small outlined v-if="suspected" title="Add from Perps"
          ><v-icon>
            mdi-account-multiple-plus
          </v-icon></v-btn
        >
        </template>
        <v-list class="fourth">
          <v-list-item v-for="(criminal, index) in criminals" :key="index" class="menu-item">
              <v-list-item-title  @click="addFromPerps(criminal)">{{ criminal.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>





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

          <v-row class="">
            <v-col class="mb-5 d-flex ">
              <v-row class="ml-3 d-flex align-center flex-wrap ">

              <v-btn class="" small outlined @click="add()" title="Ok"
                ><v-icon>
                  mdi-check
                </v-icon></v-btn
              >
              <v-btn
                small
                outlined
                v-if="suspected"
                @click="addCriminal()"
                title="Save to Perps"
                ><v-icon>
                  mdi-account-multiple-plus
                </v-icon></v-btn
              >
              <v-btn small outlined @click="cancel()" title="Cancel" class="mr-3"
                ><v-icon>
                  mdi-cancel
                </v-icon></v-btn
              >
<div style="height: 50px;" class="ma-3" v-if="!saved">

</div>
                  <v-alert
                  v-if="saved"
                  class="mt-4 "
                    border="left"
                    dense
                    
                    dismissible
                    text
                    type="success"
                  >Saved </v-alert>

                                    <v-alert
                  v-if="error"
                  class="mt-4 "
                    border="left"
                    dense
                    
                    dismissible
                    text
                    type="warning"
                  >Unsuccessful</v-alert>

              </v-row>

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
    title() {
      return this.suspected ? "Suspects" : "Victims";
    },
    criminals() {
      return this.$store.getters.criminals;
    }
    
  },

  data: () => ({
    expand: false,
    id: 0,
    isEditing: false,
    blank: [],
    isNew: false,
    saved: false,
    error: false,
  }),

  methods: {
    draft() {
      if (this.suspected) {
        this.blank.push(new data.Suspect(this.id, this.crimeId));
      } else {
        this.blank.push(new data.Victim(this.id, this.crimeId));
      }
      this.expand = true;
      this.isNew = true;
    },
    add() {
      if (!this.isEmptyObject(this.blank[0]) && this.isNew) {
        this.id++;

        this.people.push(this.blank[0]);
      }

      this.cancel();
    },
    addCriminal() {
      if (!this.isEmptyObject(this.blank[0])) {
        this.blank[0].id = this.$store.getters.criminalId;
        this.$store.dispatch("addCriminal", this.blank[0]);
        this.error = false;
        this.saved = true;
        setTimeout(() => {
          this.saved = false;
          
        }, 4000);
      } else {
                this.saved = false;
                this.error = true;
        setTimeout(() => {
          this.error = false;
          
        }, 4000);
      }
    },
    addFromPerps(perp) {
         let criminal = new data.Criminal(this.id);
          criminal.name = perp.name;
          criminal.address = perp.address;
          criminal.age = perp.age;
          criminal.phone = perp.phone;
          criminal.hasBeenToPrison = perp.hasBeenToPrison;
          criminal.note = perp.note;
        this.people.push(criminal);
      this.id++;
      this.expand = false;
    },
    edit(obj) {
      this.expand = true;
      this.isNew = false;
      this.blank.push(obj);
    },
    remove(obj) {
      this.people.splice(this.people.indexOf(obj), 1);
      this.expand = false;
    },
    cancel() {
      this.blank = [];
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

<style scoped>
.v-btn {
  margin-left: 25px;
  background-color: #074044;
}
.menu-item {
cursor: pointer;
}
.menu-item:hover {
background-color: rgba(240, 248, 255, 0.212);
}
</style>
