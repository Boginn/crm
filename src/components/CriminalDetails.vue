<template>
  <v-dialog v-model="show" max-width="750px" :retain-focus="false">
    <v-card max-height="500px" v-if="criminal">
      <v-card-title>
        {{ criminal.name }}
      </v-card-title>
      <v-card-text>
        <SuspectEntry :suspect="criminal" />
      </v-card-text>
      <v-card-actions class="d-flex justify-center" style="margin-top: -10px;">
        <v-btn color="vuegrey" text @click.stop="remove(criminal)"
          >Delete</v-btn
        >
        <v-btn color="vuegrey" text @click.stop="show = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import SuspectEntry from "./SuspectEntry.vue";
export default {
  components: {
    SuspectEntry,
  },

  props: ["visible", "criminal"],

  computed: {
    show: {
      get() {
        return this.visible;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      },
    },
  },

  methods: {
    remove(obj) {
      this.$emit("remove", obj);
      this.show = false;
    },
  },
};
</script>
