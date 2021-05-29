<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="pa-5 ma-3">
          <v-row>
            <v-col>
              <v-card-text>
                <h3>Name: {{ crime.name }}</h3>
                <div>Type: {{ crime.crimeType }}</div>
                <div>Address: {{ crime.address }}</div>
                <div>Committed on: {{ crime.committed }}</div>
              </v-card-text>
            </v-col>

            <v-col>
              <v-card-text>
                <h3>
                  Case: <span v-if="crime.caseOpen">Open</span
                  ><span v-else>Closed</span>
                </h3>
              </v-card-text>
              <v-card-text class="fifth">
                {{ crime.shortDesc }}
              </v-card-text>
            </v-col>
          </v-row>

          <v-row>
            <v-col>
              <div class="secondary">
                <v-card-title>Victims:</v-card-title>
                <v-card-text v-for="victim in crime.victims" :key="victim.id">
                  <div>Name: {{ victim.name }}</div>
                  <div>Age: {{ victim.age }}</div>
                  <div>Address: {{ victim.address }}</div>
                  <div>Phone: {{ victim.phone }}</div>
                </v-card-text>
              </div>
            </v-col>
            <v-col>
              <div class="warning">
                <v-card-title>Suspects:</v-card-title>
                <v-card-text
                  v-for="suspect in crime.suspects"
                  :key="suspect.id"
                >
                  <div>Name: {{ suspect.name }}</div>
                  <div>Age: {{ suspect.age }}</div>
                  <div>Address: {{ suspect.address }}</div>
                  <div>Phone: {{ suspect.phone }}</div>
                  <div>Ever jailed: {{ suspect.hasBeenToPrison }}</div>
                  <div>Note: {{ suspect.note }}</div>
                </v-card-text>
              </div>
            </v-col>
          </v-row>

          <v-row>
            <!-- TODO: ADD NOTE -->
            <v-col v-if="crime.notes">
              <v-card-text
                class="fifth"
                v-for="note in crime.notes.slice().reverse()"
                :key="note.id"
              >
                {{ note.date }}: {{ note.body }}
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
        <v-btn class="ma-0" block @click="$router.go(-1)">back</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CaseDetails",

  props: {},

  data: function() {
    return {};
  },

  computed: {
    crime() {
      console.log(this.$store.getters.cases[this.$route.params.id - 1])
      return this.$store.getters.cases[this.$route.params.id - 1];
    },
  },
};
</script>
