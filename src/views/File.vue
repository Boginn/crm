<template>
  <div class="mt-5">
    <v-container>
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col class="sixth">
              <h1 class="text-center mb-2">File Criminal Case #{{ id }}</h1>
              <v-container >
                <v-row>

                <v-text-field
                class="mr-1"
                  filled
                  v-model="address"
                  :rules="rules.default"
                  label="Address"
                  required
                ></v-text-field>

                <v-text-field
                class="ml-1"
                  filled
                  v-model="postcode"
                  :rules="rules.default"
                  label="Post code"
                  required
                ></v-text-field>
                </v-row>

              </v-container>

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
                  class="d-flex align-content-center flex-wrap ml-6"
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
                auto-grow
                v-model="shortDesc"
                :rules="rules.description"
                label="Description"
                required
                class="fill-width"
              ></v-textarea>
            </v-col>
          </v-row>
          <v-row class="mb-3">
            <v-col         cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12"  >
              <People :people="victims" :crimeId="id" :suspected="false" />
            </v-col>
            <v-col         cols="12"
        xl="6"
        lg="6"
        md="6"
        sm="12"
        xs="12" >
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
      return services.getDate();
    },
    dateValue() {
      let value = new Date();
      return Date.parse(value);
    },
    committed() {
      if (this.input) {
        return services.getDateFromString(this.input);
      } else {
        return services.getDate();
      }
    },
    committedValue() {
      let value = new Date(this.input);
      return Date.parse(value);
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
  },

  data: function() {
    return {
      //date
      expand: false,
      input: "",

      //form data
      address: undefined,
      postcode: undefined,
      crimeType: undefined,
      shortDesc: undefined,
      severity: undefined,
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
        this.$router.push("/cases/");
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    fileCrime() {
      let crime = new data.Crime(this.id, services.getDate());
      crime.name = `${this.crimeType} ${this.committed} ${this.address}`;
      crime.address = this.address;
      crime.postcode = this.postcode;
      crime.severity = this.severity;
      crime.crimeType = this.crimeType;
      crime.dateValue = this.dateValue;
      crime.committed = this.committed;
      crime.committedValue = this.committedValue;
      crime.shortDesc = this.shortDesc;
      crime.suspects = this.suspects;
      crime.victims = this.victims;
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
  },
};
</script>

<style scoped>
::placeholder {
  color: #babbc3;
}
</style>
