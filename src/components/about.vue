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
                                    <h2 class="display-1">Мои проекты</h2>

                                    <v-divider class="my-3"></v-divider>

                                    <span class="subheading">Все мои проекты находятся в открытом доступе на <a target="_blank" href="https://github.com/mv-bogdan">GitHub</a></span>
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
        name: "about",
        data: () => ({
            elevations: [18]
        })
    }
</script>

<style scoped>

</style>