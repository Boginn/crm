<template>
  <div class="mt-5">

    <v-container>
      <v-col>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row class="d-flex justify-center">
            <v-col
              class="sixth"
              cols="12"
              xl="10"
              lg="10"
              md="10"
              sm="10"
              xs="12"
            >
              <h1 class="text-center mb-2">File Report #{{ id }}</h1>
              <v-container>
                <v-row>

                  <v-select
                    placeholder="Select the crime you are reporting on"
                    filled
                    dense
                    
                   :rules="rules.default"
                    :item-value="crime.name"
                    v-model="assigned"
                    :items="names"
                    required
                  >
                  </v-select>
</v-row>
<v-row>
  
</v-row>
                <v-row>
                  <v-textarea
                    class=""
                    filled
                    auto-grow
                    v-model="report"
                    :rules="rules.default"
                    label="Report"
                    required
                  ></v-textarea>
                </v-row>


              </v-container>

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
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-container>
  </div>
</template>

<script>
import services from "../services/services.js";
import data from "../data/data.js";

export default {
  name: "Report",

  created() {
    if (!this.user) {
      this.$router.push("/");
    }

  },

  props: {},


  computed: {

    id() {
      return this.$store.getters.reportId;
    },
    user() {
      return this.$store.getters.user;
    },
    reports() {
      return this.$store.getters.reports;
    },

    rules() {
      return services.rules;
    },
    crimes() {
      return this.$store.getters.cases;
    },
    crime() {
return this.assigned ? this.$store.getters.getCrimeByName(this.assigned) : this.$store.getters.cases[0];
      
    },
    names() {
      let names = [];
      this.crimes.forEach((crime) => {
        names.push(crime.name);
      });

      return names;
    },
  },

  data: function() {
    return {
      assigned: undefined,
      //form
      report: undefined,
      //functions
      valid: true,
    };
  },

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.fileReport();
        this.reset();
      }
    },
    reset() {
     
      this.$refs.form.reset();
    },
    fileReport() {
      let report = new data.Report(this.id, this.crime.id);
      report.badge = this.user.badge;
      report.body = this.report;
      this.$store.dispatch("fileReport", report);
    },
  },
};
</script>

<style scoped>
::placeholder {
  color: #babbc3;
}

</style>
