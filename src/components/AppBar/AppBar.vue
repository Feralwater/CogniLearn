<template>
  <v-app-bar>
    <v-app-bar-nav-icon
      @click="drawer = !drawer"
      class="d-flex d-sm-none burger-icon"
    />
    <app-header />

    <template v-slot:extension>
      <app-navbar :links="links" />
    </template>

  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    absolute
    temporary
  >
    <v-list nav dense>
      <v-list-item v-for="link in links" :key="link.route" link>
        <v-list-item-title @click="drawer = false">
          <router-link :to="link.route">{{ link.text }}</router-link>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
:global(.v-toolbar__content) {
  height: 100% !important;
  background-color: var(--secondary);
}

.burger-icon {
  color: var(--white);
}

</style>

<script>
import { ref } from "vue";
import logo from "@/assets/icons/logo.svg";
import mapPointer from "@/assets/icons/Map-Pointer.svg";
import clock from "@/assets/icons/clock.svg";
import { Routes } from "@/router/routes";
import { useLoginStore } from "@/stores/login";
import AppNavbar from "@/components/AppNavigation/AppNavigation.vue";
import AppHeader from "@/components/AppHeader/AppHeader.vue";

export default {
  components: { AppHeader, AppNavbar },
  setup() {
    const loginStore = useLoginStore();
    const drawer = ref(false);
    const logoIcon = logo;
    const links = [
      { text: "Home", route: Routes.Home },
      { text: "Statistics", route: Routes.Statistics },
      { text: "Reviews", route: Routes.Reviews },
      { text: "About", route: Routes.About },
      { text: "Contact", route: Routes.Contact }
    ];

    const logout = () => {
      loginStore.logout();
    };

    return {
      loginStore,
      logout,
      drawer,
      logoIcon,
      mapPointer,
      clock,
      Routes,
      links
    };
  }
};
</script>
