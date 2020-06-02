<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item router :to="{name: 'home'}" exact>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-if="!isLogin"
          router :to="{name: 'login'}" exact
          >
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item 
          v-if="isLogin"
          router :to="{name: 'mypage'}" exact
          >
          <v-list-item-content>
            <v-list-item-title>MyPage</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              dark
              v-on="on"
              flat
              icon
            >
              <v-icon>Menu</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item router :to="{name: 'mypage'}">
              <v-list-item-title>My Page</v-list-item-title>
            </v-list-item>
            <v-list-item  @click="$store.dispatch('logout')">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>
      
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    computed: {
      ...mapState(['isLogin'])
    }
  }
</script>