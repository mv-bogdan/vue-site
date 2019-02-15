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
                <v-container grid-list-md>
                    <v-layout>
                            <v-flex>
                                <h1 align="center" class="display-1">Обо мне</h1>
                                <v-divider class="my-2"></v-divider>
                            </v-flex>
                         </v-layout>
                        <v-layout row wrap>
                            <v-flex xs12 sm3>
                                <v-card
                                    :elevation = "12"
                                >

                                </v-card>
                            </v-flex>
                            <v-flex xs12 sm9>
                                <span class="subheading">Меня зовут Богдан, мне 18 лет. Я - студент {{dateYear - 2018}}-го курса МГТУ им. Баумана. Учусь на кафедре ФН-12 "Математическое моделирование".</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
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
        }),
        computed: {
            dateYear: function () {
                let date = new Date();
                return date.getFullYear()
            }
        }
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
