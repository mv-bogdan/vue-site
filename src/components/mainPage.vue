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
                <v-jumbotron>
                    <v-container fill-height>
                        <v-layout>
                            <v-flex>
                                <h8 class="display-1">Главная страница</h8>

                                <v-divider class="my-2"></v-divider>
                                <span class="subheading">*Информация обо мне.*</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-jumbotron>
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
