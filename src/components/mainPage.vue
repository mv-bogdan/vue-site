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
                    <v-container wrap row>
                        <v-layout>
                            <v-flex>
                                <h8 class="display-1">Обо мне</h8>
                                <v-divider class="my-1"></v-divider>
                            </v-flex>
                         </v-layout>
                    </v-container>
                    <v-container grid-list-md>
                        <v-layout row wrap>
                            <v-flex xs12 sm3>
                                <v-card
                                    :elevation = "12"
                                >
                                    <v-img
                                       :src="`https://pp.userapi.com/c845523/v845523597/8e58f/6BonQGUGGDQ.jpg`"
                                    >
                                    </v-img>
                                </v-card>
                            </v-flex>
                            <!--<v-flex xs12 sm9>
                                <v-img
                                        :src="`http://www.vesvks.ru/public/article/images/ed8e13c307e611a5e05f82eb77ca30dd7d27eb2d.jpg`"
                                >
                                </v-img>
                            </v-flex>-->
                            <v-flex xs12 sm9>
                                <span class="subheading">Меня зовут Богдан, я - студент {{dateYear - 2018}}-го курса МГТУ им. Баумана. Учусь на кафедре ФН-12 "Математическое моделирование" </span>
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
