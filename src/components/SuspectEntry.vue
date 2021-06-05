<template>
  <span>
    <v-row>
      <v-col>
        <div>
          Name: <span class="lime--text">{{ suspect.name }}</span>
        </div>

        <div>
          Age: <span class="pink--text">{{ suspect.age }}</span>
        </div>

        <div>
          Address:
          <span class="amber--text">{{ suspect.address }}</span>
        </div>

        <div>
          Phone:
          <span class="orange--text">{{ suspect.phone }}</span>
        </div>

        <div>
          Ever jailed:
          <span class="red--text" v-if="suspect.hasBeenToPrison">Yes</span
          ><span class="green--text" v-else>No</span>
        </div>
      </v-col>

      <v-col>
        <div class="fifth fill-height pa-2">
          <sup style="color: #babbc3">
            Note:
          </sup>

          <div style="font-size: 8pt">{{ suspect.note }}</div>
        </div>
      </v-col>
    </v-row>
    <v-divider class="mt-3"></v-divider>
  </span>
</template>

<script>
export default {
  name: "SuspectEntry",
  props: { suspect: Object },
};
</script>
