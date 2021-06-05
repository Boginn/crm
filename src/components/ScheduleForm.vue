<template>
<v-dialog v-model="show" max-width="500px">
  <v-card>
    <v-card-text>
      {{item}}
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text @click.stop="show=false">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
export default {
  created() {
console.log(this.visible)
  },
  props:  ['visible', 'item'],

  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  }
}
</script>