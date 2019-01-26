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
                    <p>Мои проекты</p>
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