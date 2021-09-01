<template>
  <v-app>
    <v-row>
      <v-col>
        <side-nav-bar />
      </v-col>
      <v-col cols="10">
        <v-container>
          <!-- Portfolio Summary -->

          <p class="text-h4 font-weight-medium mb-10">Portfolio Summary</p>

          <v-row wrap>
            <!-- Net Position -->
            <v-card
              flat
              class="px-16 py-6 mx-4 mb-5"
              color="grey lighten-3"
              v-for="items in cardItems"
              :key="items.name"
            >
              <v-row >
                <v-avatar class="mr-3 mt-3" color="red lighten-3" size="60">
                  <v-icon x-large color="primary" class="">people</v-icon>
                </v-avatar>
                <v-row>
                  <v-col>
                    <p class="mb-1">{{ items.name }}</p>
                    <p class="text-h4 font-weight-medium">{{ items.amount }}</p>
                  </v-col>
                </v-row>
              </v-row>
            </v-card>
          </v-row>
        </v-container>

        <!-- Portfolio -->
        <p>Portfolio Details</p>
        <v-row> </v-row>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import SideNavBar from "../../components/SideNavBar.vue";
export default {
  components: { SideNavBar },

  data() {
    return {
      cardItems: [
        { name: "Net Position", amount: "$10,000" },
        { name: "Loans", amount: "$10,000" },
        { name: "Uncleared Funds", amount: "$10,000" },
        { name: "Liens on Account", amount: "$10,000" },
        { name: "Non Cash", amount: "$10,000" },
        { name: "Available Balance", amount: "$10,000" },
      ],
    };
  },
};
</script>
