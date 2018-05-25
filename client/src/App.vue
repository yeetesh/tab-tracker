<template>
  <v-app>
    <v-toolbar>
      <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
      <v-toolbar-title><router-link to="/" tag="span" style="cursor: pointer">Tab-Tracker</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat router to="/songs">Songs</v-btn>
        <v-btn flat router to="/create">Create</v-btn>
        <v-btn flat router to="/register" v-if="!$store.state.isUserLoggedIn">Register</v-btn>
        <v-btn flat router to="/login" v-if="!$store.state.isUserLoggedIn">Login</v-btn>
        <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logout">Logout</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  methods : {
    logout() {
      this.$store.dispatch('setUser',null)
      this.$store.dispatch('setToken',null)
      this.$router.push('/')
    }
  }
}
</script>