<template>
<v-container >
          <v-card class="error">

        <v-card-title class="d-flex justify-center font-shadow ">Only active users may {{msg}}.</v-card-title>
        <v-card-subtitle class="d-flex justify-center">Contact an admin to activate your account.</v-card-subtitle>
        </v-card>
        <Back/>
        </v-container>
</template>

<script>
import Back from "./Back.vue";
export default {
  name: 'Inactive',
  props: {
    msg: String,

  },
  components: {
Back,

  }
}
</script>

