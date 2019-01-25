<template>
  <v-app id="inspire" light>
    <v-navigation-drawer
            v-model="drawer"
            clipped
            fixed
            app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title><v-link href="/" @click="about">Пункт_1</v-link></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Пункт_2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title><v-btn href="/" @click="mainPage">mbogdan.ru</v-btn></v-toolbar-title>
      </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'mbogdan.ru'
    }
  },
  name: 'App',
    methods: {
        mainPage: function () {
            this.$router.push('/')
        },
        about: function () {
            this.$router.push('/about')
        },
    },

}
</script>
