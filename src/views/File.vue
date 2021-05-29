<template>
  <div class="mt-5">
    <v-container>
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col class="sixth">
              <h1 class="text-center mb-2">File Criminal Case #{{id}}</h1>
              <v-text-field
                filled
                v-model="name"
                :rules="rules.default"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                filled
                v-model="address"
                :rules="rules.default"
                label="Address"
                required
              ></v-text-field>

              <v-container>
                <v-layout row wrap>
                  <v-menu
                    v-model="expand"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        filled
                        label="Committed on"
                        :value="committed"
                        v-on="on"
                      ></v-text-field>
                    </template>

                    <v-date-picker
                      v-model="input"
                      @input="expand = false"
                    ></v-date-picker>
                  </v-menu>
                </v-layout>
              </v-container>

              <v-row>
                <v-slider
                  class="d-flex align-content-center flex-wrap ml-3"
                  filled
                  track-color="red"
                  thumb-label=""
                  required
                  v-model="severity"
                  label="Severity"
                  hint="The severity of the situation"
                  max="10"
                  min="1"
                ></v-slider>

                <v-select
                  class="mr-3"
                  filled
                  v-model="crimeType"
                  :items="crimeTypes"
                  :rules="rules.default"
                  label="Crime Type"
                  required
                ></v-select>
              </v-row>

              <v-textarea
                filled
                placeholder="Description"
                v-model="shortDesc"
                :rules="rules.description"
                label="Description"
                required
                class="fill-width"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-col>
              <People :people="victims" :crimeId="id" :suspected="false" />
            </v-col>
            <v-col>
              <People :people="suspects" :crimeId="id" :suspected="true" />
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="6" class="pa-0">
              <v-btn
                class="ma-0 rounded-0"
                block
                x-large
                :disabled="!valid"
                color="success"
                @click="validate"
              >
                Submit
              </v-btn>
            </v-col>
            <v-col class="pa-0 ma-0">
              <v-btn
                class="ma-0 rounded-0"
                block
                x-large
                color="error"
                @click="reset"
              >
                Reset
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import People from "../components/People.vue";
import services from "../services/services.js";
import data from "../data/data.js";

export default {
  name: "File",

  created() {
    if (!this.user) {
     
        this.$router.push("/");
      
    }
  },

  components: {
    People,
  },

  computed: {
    id() {
      return this.$store.getters.caseId;
    },
    user() {
      return this.$store.getters.user;
    },
    date() {
      return services.getDateString();
    },
    committed() {
      if (!this.input) return this.date;

      const [year, month, day] = this.input.split("-");
      return `${day}/${month}/${year}`;
    },
    crimeTypes() {
      return data.crimeTypes;
    },
    rules() {
      return services.rules;
    },
    cases() {
      return this.store.getters.cases;
    },
    /*
    bool: {
      get() {
        return this.$store.state.bool;
      },
      set(value) {
        this.$store.commit("SET_BOOL", value);
      },
    },
    */
  },

  data: function() {
    return {
      //date
      expand: false,
      input: null,

      //data
      pickedDate: undefined,
      name: undefined,
      address: undefined,
      crimeType: undefined,

      shortDesc: undefined,
      severity: undefined,
      caseOpen: undefined,
      notes: undefined,
      suspects: [],
      victims: [],

      //functions
      valid: true,
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.fileCrime();
        this.reset();
        console.log(this.$store.getters.cases);
        this.$router.push("/crm");
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    fileCrime() {
      console.log(this.victims);

      // this.victims.forEach((victim) => {
      //   if (this.isEmptyObject(victim))
      //     this.victims.splice(this.victims.indexOf(victim), 1);
      // });

      console.log(this.victims);

      
      let crime = new Object({
        id: this.id,
        name: this.name,
        address: this.address,
        committed: this.committed,
        crimeType: this.crimeType,
        date: this.date,
        shortDesc: this.shortDesc,
        urgency: this.urgency,
        caseOpen: this.caseOpen,
        notes: this.notes,
        suspects: this.suspects,
        victims: this.victims,
      });
      console.log(crime);
      console.log(this.victims);
      this.$store.dispatch("fileCrime", crime);
    },
    isEmptyObject(obj) {
      if (
        obj.name == "" &&
        obj.age == "" &&
        obj.address == "" &&
        obj.phone == ""
      ) {
        return false;
      } else {
        return true;
      }
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `<${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>

<style scoped>
::placeholder {
  color: #babbc3;
}
</style>
