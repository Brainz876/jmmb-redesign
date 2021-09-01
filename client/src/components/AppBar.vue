<template>
  <v-container fluid class="primary pa-0">
    <v-app-bar flat color="primary">
      <router-link to="/">
        <v-toolbar-title class="white--text"> Logo </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>


      <router-link to="/">
        <p class="white--text mb-0 mr-10">Rates</p>
      </router-link>

      <router-link to="/">
        <p class="white--text mb-0 mr-10">Contact</p>
      </router-link>

      <router-link to="/">
        <p class="white--text mb-0 mr-10">Login</p>
      </router-link>

      <v-btn depressed class="mr-10">Sign Up</v-btn>

    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "Sharmeel",
      searchWord: "",
      drawer: false,
      group: null,
    };
  },
  computed: {},
  methods: {
    search() {
      this.$router.push("/search");
      this.$store.state.searchWord = this.searchWord;
    },
  },
};
</script>

<style scoped>
.pc {
  background: red !important;
}
</style>
