<template>
  <v-container fluid class="primary pa-0">
    <v-navigation-drawer app fixed clipped width="15%" color="primary" dark>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="secondary--text">
          <router-link to="/">
            <v-list-item>
              <v-list-item-title><p class="text-h6">JMMB</p></v-list-item-title>
            </v-list-item>
          </router-link>

          <v-list-item to="/dashboard">
            <v-list-item-icon>
              <v-icon>person</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item to="/merchant-orders">
            <v-list-item-icon>
              <v-icon>local_offer</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Transactions</v-list-item-title>
          </v-list-item>

          <v-list-item to="/merchant-products">
            <v-list-item-icon>
              <v-icon>list</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Information</v-list-item-title>
          </v-list-item>

          <v-list-item to="/marketplace">
            <v-list-item-icon>
              <v-icon>store</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Other Services</v-list-item-title>
          </v-list-item>

          <v-list-item to="/customers">
            <v-list-item-icon>
              <v-icon>groups</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item>

          <v-list-item to="/customers">
            <v-list-item-icon>
              <v-icon>groups</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item>

          <v-list-item to="/customers">
            <v-list-item-icon>
              <v-icon>groups</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Help</v-list-item-title>
          </v-list-item>

          <v-list-item to="/customers">
            <v-list-item-icon>
              <v-icon>groups</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Log Out</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: "Sharmeel",
      drawer: false,
      group: null,
      storeName: "GCIC",
    };
  },
  methods: {
    search() {
      this.$router.push("/search");
    },
  },
};
</script>

<style scoped>
.pc {
  background: red !important;
}
</style>
