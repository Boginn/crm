<template>
  <v-container>
    <v-row class="d-flex justify-start">


      <Search :location="$options.name"/>


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

      <v-data-table
        :headers="headers"
        :items="criminals"
        :search="search"
        :items-per-page="10"
        item-key="id"
        class="elevation-6 sixth ma-5 pa-4 fill-width font-shadow"
      >


        <template v-slot:item.name="{ item }">
        <span class="lime--text">  {{item.name}} {{item.id}}</span>
        </template>

        <template v-slot:item.address="{ item }">
        <span class="amber--text">  {{item.address}}</span>
        </template>

        <template v-slot:item.age="{ item }">
        <span class="pink--text">  {{item.age}}</span>
        </template>

        <template v-slot:item.phone="{ item }">
        <span class="orange--text">  {{item.phone}}</span>
        </template>

      </v-data-table>
    </v-row>

    <Back />
  </v-container>
</template>

<script>
import Search from "../components/Search";
import NavChip from "../components/NavChip.vue";
import Back from "../components/Back";
import data from "../data/data.js";
import services from "../services/services.js";

export default {
  name: "Perps",

   created() {
    if (!this.user) {
      this.$router.push("/");
    }
  },

  components: {
    Search,
    NavChip,
        Back,
  },

  computed: {
    id() {
      return this.$store.getters.criminalId;
    },
    user() {
      return this.$store.getters.user;
    },

    criminals() {
      return this.$store.getters.criminals;
    },
    search() {
      return this.$store.getters.search;
    },

    headers() {
      return data.headers.perps;
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
  },

  data: function() {
    return {
      expand: false,

        blank: [],
    };
  },

  methods: {
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
        this.$store.dispatch('addCriminal', this.blank[0]);
      }
      this.cancel();
    },
    cancel() {
      this.blank = [];
      this.expand = false;
    },
  },
};
</script>
