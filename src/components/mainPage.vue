<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <p>Компонент главной страницы</p>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
    export default {
        name: "mainPage"
    }
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
