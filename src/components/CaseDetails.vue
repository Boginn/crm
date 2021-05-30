<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-5 ma-3 font-shadow" v-if="crime">
          <v-row>
            <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
              <v-card-text class="">
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <div>Name:</div>
                  </v-col>
                  <v-col class="d-flex justify-end pa-0">
                    <span style="color: #f0c03c;"> {{ crime.name }}</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <div>Type:</div>
                  </v-col>
                  <v-col class="d-flex justify-end pa-0">
                    <span class="teal--text">{{ crime.crimeType }}</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <div>Address:</div>
                  </v-col>
                  <v-col class="d-flex justify-end pa-0">
                    <span class="orange--text">{{ crime.address }}</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <div>Postcode:</div>
                  </v-col>
                  <v-col class="d-flex justify-end pa-0">
                    <span class="orange--text">{{ crime.postcode }}</span>
                  </v-col>
                </v-row>
                <v-row class="ma-0">
                  <v-col class="pa-0">
                    <div>Committed on:</div>
                  </v-col>
                  <v-col class="d-flex justify-end pa-0">
                    <span class="cyan--text"> {{ crime.committed }} </span>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-col>

            <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
              <v-card-text>
                <h3>
                  Case:
                  <span v-if="crime.caseOpen" class="green--text">Open</span
                  ><span v-else class="red--text">Closed</span>
                </h3>
              </v-card-text>
              <v-card-text class="fifth pt-6">
                <sup style="color: #babbc3" class="float-left">Description</sup>

                <span> {{ crime.shortDesc }}</span>
              </v-card-text>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
              <div class="secondary pt-3 ">
                <v-card-title>
                  <sup style="color: #babbc3">Victims</sup></v-card-title
                >
                <v-card-text v-for="victim in crime.victims" :key="victim.id">
                  <div>
                    Name: <span class="lime--text">{{ victim.name }}</span>
                  </div>
                  <div>
                    Age: <span class="pink--text">{{ victim.age }}</span>
                  </div>
                  <div>
                    Address:
                    <span class="amber--text">{{ victim.address }}</span>
                  </div>
                  <div>
                    Phone: <span class="orange--text">{{ victim.phone }}</span>
                  </div>
                  <v-divider></v-divider>
                </v-card-text>
              </div>
            </v-col>
            <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
              <div class="sixth pt-3">



                    <v-dialog v-model="expand" width="500">

      <template v-slot:activator="{ on }">
        <span @click="draft()" v-on="on">
          <NavChip :option="option" />
        </span>
      </template>
            <v-card class="sixth">
        <v-card-title class="secondary">
          Add Criminal
        </v-card-title>

       <v-form ref="form" v-if="subject">
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

      <v-menu offset-y >
        <template v-slot:activator="{ on }">
        <v-btn v-on="on" small outlined title="Add from Perps"
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

                <v-card-title>
                  <sup style="color: #babbc3">Suspects</sup></v-card-title
                >
                <v-card-text
                  v-for="suspect in crime.suspects"
                  :key="suspect.id"
                >
                  <v-row>
                    <v-col>
                      <div>
                        Name: <span class="lime--text">{{ suspect.name }}</span>
                      </div>

                      <div>
                        Age: <span class="pink--text">{{ suspect.age }}</span>
                      </div>

                      <div>
                        Address:
                        <span class="amber--text">{{ suspect.address }}</span>
                      </div>

                      <div>
                        Phone:
                        <span class="orange--text">{{ suspect.phone }}</span>
                      </div>

                      <div>
                        Ever jailed:
                        <span class="green--text" v-if="suspect.hasBeenToPrison"
                          >Yes</span
                        ><span class="red--text" v-else>No</span>
                      </div>
                    </v-col>

                    <v-col>
                      <div class="fifth fill-height pa-2">
                        <sup style="color: #babbc3">
                          Note:
                        </sup>

                        <div style="font-size: 8pt">{{ suspect.note }}</div>
                      </div>
                    </v-col>
                  </v-row>
                  <v-divider class="mt-1"></v-divider>
                </v-card-text>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <v-dialog v-model="expandNote" width="500" v-if="crime.caseOpen">
              <template v-slot:activator="{ on }">
                <v-col>

                <v-btn v-on="on" small block outlined class="ml-1" title="Make a Note"
                  >Comment<v-icon small>
                    mdi-comment
                  </v-icon></v-btn
                >
                </v-col>
              </template>
              <v-card class="sixth">


                <v-form ref="form">
                  <v-col cols="12">
                    <v-text-field
                      filled
                      dense
                      v-model="comment"
                      :rules="rules.default"
                      label="Comment"
                      required
                    ></v-text-field>

                    <v-card-actions>
                      <v-btn small outlined @click="validateNote()" title="Ok"
                        ><v-icon>
                          mdi-check
                        </v-icon></v-btn
                      >
                      <v-btn small outlined @click="cancelNote()" title="Cancel"
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
          </v-row>

          <v-row>
            <v-col v-if="crime.notes.length">
              <v-card-text
                class="fifth "
                v-for="note in crime.notes.slice().reverse()"
                :key="note.id"
              >
               <sup style="font-size: 8pt">{{ note.date }}</sup>


                        <div><i class="yellow--text">{{note.user}}</i>: {{ note.body }}</div>
                        <v-divider></v-divider>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <Back />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Back from "./Back.vue";
import NavChip from "./NavChip.vue";
import services from "../services/services.js";
import data from "../data/data.js";

export default {
  name: "CaseDetails",

    created() {
    if (!this.user) {
      this.$router.push("/");
    }
  },

  components: {
    Back,
    NavChip,
  },

  props: {},

  data: function() {
    return {
      expand: false,
      expandNote: false,
      id: 0,
      blank: [],
      comment: '',
    };
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    crime() {
      return this.$store.getters.cases[this.$route.params.id - 1];
    },
        option() {
      return data.otherOptions[1];
    },
    subject() {
      return this.blank[0];
    },
    rules() {
      return services.rules;
    },
    criminals() {
      return this.$store.getters.criminals;
    }
    // comment() {
    //   return this.blank.slice().reverse()[0];
    // },
  },

  methods: {
    // ADD CRIMINAL
        validate() {
      if (this.$refs.form.validate()) {
        this.add();
      }
    },
    draft() {
      this.blank.push(new data.Criminal(this.id));
      this.expand = true;
    },
    add() {
      if (this.subject) {
        this.crime.suspects.push(this.blank[0]);
        // this.$store.dispatch('addCriminal', this.blank[0]);
      }
      this.cancel();
    },
    cancel() {
      this.blank = [];
      this.expand = false;
    },
        addFromPerps(perp) {
      
         
          let criminal = new data.Criminal(this.crime.suspects.length+1);
          criminal.crimeId = this.crime.id;
          criminal.name = perp.name;
          criminal.address = perp.address;
          criminal.age = perp.age;
          criminal.phone = perp.phone;
          criminal.hasBeenToPrison = perp.hasBeenToPrison;
          criminal.note = perp.note;
        this.crime.suspects.push(criminal)
    
      this.expand = false;
    },
    // NOTE COMMENT
    validateNote() {
      if (this.$refs.form.validate()) {
        this.addNote();
      }
    },

    addNote() {
      let note = new Object({
        body: this.comment,
        date: services.getDateWithHour(),
        user: this.user.username,
      });
        this.crime.notes.push(note);


      this.cancelNote();
    },
    cancelNote() {
      this.comment = '';
      this.blank = [];
      this.expandNote = false;
    },
  },

};
</script>

<style scoped>
.menu-item {
cursor: pointer;
}
.menu-item:hover {
background-color: rgba(240, 248, 255, 0.212);
}
</style>