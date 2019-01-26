<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center
                v-for="elevation in elevations"
                :key="elevation"
                md12>
            <v-sheet
                    :elevation="elevation"
                    class="mx-auto"
                    height="800"
                    width="75%"
                    maxwidth="90%"
            >
                <p>Компонент главной страницы</p>
            </v-sheet>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
    export default {
        name: "mainPage",
        data: () => ({
            elevations: [18]
        })
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
