<template>
      <v-form ref="form">
        <v-col cols="12">
          <v-text-field
            filled
            dense
            v-model="subject.name"
            :rules="rules.default"
            label="Description"
            required
          ></v-text-field>
          <v-select
            :placeholder="user.badge"
            filled
            dense
            :item-value="user.badge"
            v-model="assigned"
            :items="badges"
            required
          >
          </v-select>
          <v-btn small outlined @click="validate()" title="Ok"
            ><v-icon>
              mdi-check
            </v-icon></v-btn
          >
                        <v-btn small outlined @click="cancel()" title="Cancel"
                ><v-icon>
                  mdi-cancel
                </v-icon></v-btn>
        </v-col>
      </v-form>
</template>

<script>
export default {
  name: "AddTask",

  props: {
    rules: Array,
    subject: Object,
  }

};
</script>
