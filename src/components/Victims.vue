<template>
  <v-row>
    <v-col class="ml-5" cols="9">
      <h2 class="pl-5">
         Victims
      </h2>
      <v-btn outlined @click="addVictim()">
        <v-icon>mdi-account-plus-outline</v-icon>
      </v-btn>
      <v-btn outlined @click="expand = !expand"
        ><v-icon>
          mdi-unfold-more-horizontal
        </v-icon></v-btn
      >

      <div v-if="expand">
        <v-col
          v-for="victim in victims.slice().reverse()"
          :key="victim.id"
          class="mb-5"
        >
          <h3 v-if="victim.name.length">
            {{ victim.name }}, {{ victim.age }}

            <v-divider></v-divider>
          </h3>
          <v-row>
            <v-col>
              <v-text-field
                v-model="victim.name"
                :rules="rules.name"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="victim.address"
                :rules="rules.default"
                label="Address"
                required
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                v-model="victim.age"
                :rules="rules.default"
                label="Age"
                required
              ></v-text-field>

              <v-text-field
                v-model="victim.phone"
                :rules="rules.default"
                label="Phone"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-divider></v-divider>
          <v-btn block outlined @click="removeVictim(victim)"
            ><v-icon>
              mdi-beaker-remove
            </v-icon></v-btn
          >
        </v-col>
      </div>
    </v-col>
    <v-col>
      asdf
    </v-col>
  </v-row>
</template>

<script>
import data from "../data/data.js";
import services from "../services/services.js";
export default {
  name: "Victims",

  props: {
    victims: Array,
    crimeId: Number,
  },

  computed: {
    rules() {
      return services.rules;
    },
  },

  data: () => ({
    expand: true,
    id: 0,
  }),

  methods: {
    addVictim() {
      console.log(this.victims);
      this.id++;
      this.victims.push(new data.Victim(this.id, this.crimeId));
      this.expand = true;
    },
    removeVictim(victim) {
      console.log(this.victims);
      this.victims.splice(this.victims.indexOf(victim), 1);
    },
  },
};
</script>

<style></style>
