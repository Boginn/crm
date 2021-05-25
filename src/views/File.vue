<template>
  <div class="mt-5">
    <v-container>
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col>
              <h1 class="text-center">File a crime</h1>
              <v-text-field
                v-model="name"
                :rules="rules.name"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="address"
                :rules="rules.default"
                label="Address"
                required
              ></v-text-field>

              <v-select
                v-model="crimeType"
                :items="crimeTypes"
                :rules="rules.default"
                label="Crime Type"
                required
              ></v-select>

              <v-slider
                track-color="red"
                thumb-label=""
                required
                v-model="severity"
                label="Severity"
                hint="The severity of the situation"
                max="10"
                min="1"
              ></v-slider>

              <v-text-field
                v-model="shortDesc"
                :rules="rules.description"
                label="Description"
                required
              ></v-text-field>
            </v-col>

            <v-col class="text-center">
              <v-date-picker v-model="pickedDate" color="tertiary"
                >Select the date of the crime</v-date-picker
              >
                        <v-container>

          </v-container>
            </v-col>
          </v-row>

          <People :people="victims" :crimeId="id" :suspected="false" />

          <People :people="suspects" :crimeId="id" :suspected="true" />
                      <v-row>
              <v-col>
                <v-btn
                x-large
                                    :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                >
                  Submit
                </v-btn>

                <v-btn
                x-large color="error" class="mr-4" @click="reset">
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

  created() {},

  components: {
    People,
  },

  computed: {
    id() {
      return this.$store.getters.id;
    },
    date() {
      return services.getDateString();
    },
    committed() {
      if (this.pickedDate) {
        return services.convert(this.pickedDate);
      } else {
        return services.getDateString();
      }
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
      this.$store.dispatch("fileCrime", crime);
    },
  },
};
</script>
