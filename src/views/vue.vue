<template>
  <div id="app">
  <v-app class="container">
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="items"
        show-expand
        single-expand
        item-key="name"
        :search="search"
        >
        <template v-slot:item.email="{ value }">
            <a :href="`mailto:${value}`">
              {{ value }}
            </a>
        </template>
        <template v-slot:item.url="{ value }">
            <a target="_blank" :href="value">
              {{ value }}
            </a>
        </template>
      </v-data-table>
    </v-card>
  </v-app>
</div>
</template>

<script>
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data () {
    return {
      search: '',
      items: [
          {
            "_id": "5ea1e60a93027edf047920df",
            "name": {
              "first": "Roxie",
              "last": "Huber"
            },
            "company": "ISOLOGICS",
            "email": "roxie.huber@isologics.name",
            "phone": "+1 (866) 403-3864",
            "url": "//stackoverflow.com",
            "address": "144 Hawthorne Street, Rodman, Mississippi, 5592"
          },
          {
            "_id": "5ea1e60a7104924488c67093",
            "name": {
              "first": "Wilma",
              "last": "Ferrell"
            },
            "company": "OMATOM",
            "email": "wilma.ferrell@omatom.info",
            "phone": "+1 (815) 526-2057",
            "url": "//google.com",
            "address": "621 Pilling Street, Elliston, Arizona, 4968"
          },
          {
            "_id": "5ea1e60a6b9c39839f4edf9d",
            "name": {
              "first": "Adkins",
              "last": "Robertson"
            },
            "company": "MAGNEMO",
            "email": "adkins.robertson@magnemo.com",
            "phone": "+1 (880) 401-3229",
            "url": "//codeply.com",
            "address": "333 Nostrand Avenue, Boomer, Delaware, 4811"
          },
          {
            "_id": "5ea1e60aa27fad0395fbc973",
            "name": {
              "first": "Wright",
              "last": "Lancaster"
            },
            "company": "AMRIL",
            "email": "wright.lancaster@amril.biz",
            "phone": "+1 (853) 553-2228",
            "url": "//codeply.com",
            "address": "925 Cropsey Avenue, Vallonia, Arkansas, 7790"
          }
        ],
      headers: [
        { text: 'company', align: 'left', filterable: false, value: 'company' },
        { text: 'email', value: 'email' },
        { text: 'url', value: 'url' },
        { text: 'address', value: 'address' },
      ],
    }
  },
  
})
</script>

<style>

</style>