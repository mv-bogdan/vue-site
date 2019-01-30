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
                                <h1 align="center" class="display-1">Мои проекты</h1>
                                <v-divider class="my-2"></v-divider>
                            </v-flex>
                        </v-layout>
                        <v-layout row wrap>
                            <v-flex xs12 sm9>
                                <span class="subheading">Все мои проекты находятся в открытом доступе на <a target="_blank" href="https://github.com/mv-bogdan">GitHub</a></span>
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
        name: "about",
        data: () => ({
            elevations: [18]
        })
    }
</script>

<style scoped>

</style>