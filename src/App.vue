<template>
  <v-app id="inspire" light class="font-weight-light">
    <v-navigation-drawer
            v-model="drawer"
            clipped
            fixed
            app
            class="green lighten-5"
    >
      <v-list dense>
        <v-list-tile @click="mainPage">
          <v-list-tile-action>
            <v-icon>star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Главная</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="about">
          <v-list-tile-action>
            <v-icon>timeline</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Мои проекты</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left class="green lighten-4">
      <!--<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>-->
      <v-toolbar-title>mbogdan.ru</v-toolbar-title>
      </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
            <router-view/>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer app fixed>
      <v-layout justify-center align-center>
        <span>&copy; {{ dateYear }}</span>
      </v-layout>
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
            this.$router.push('/projects')
        },
    },
    computed: {
        dateYear: function () {
                let date = new Date();
            return date.getFullYear()
        }
    }
}
</script>
