<template>
<span>

    <v-icon @click="$router.go(-1)" >mdi-arrow-left</v-icon>
    <v-icon @click="$router.push('/')" >mdi-home</v-icon>
    <v-icon @click="$router.go(1)" >mdi-arrow-right</v-icon>

</span>
</template>

<script>
export default {
  name: "RouteNav",

};
</script>
