<template>
  <header>
    <div class="header-container">
      <div class="header-logo">
        <v-img :src="logoIcon" height="64" width="80" />
        <span class="project-name black">mind</span>
        <span class="project-name green">masters</span>
      </div>
      <div class="header-row">
        <div class="header-column">
          <span class="column-name">Emergency Help</span>
          <span class="column-name green phone">123-456-7890</span>
        </div>
        <v-divider vertical thickness="2" />
        <div class="header-row hidden">
          <v-img :src="mapPointer" height="35" width="35" />
          <div class="header-column">
            <span class="column-name">PO Box 16122 Collins Street West</span>
            <span class="column-name">Victoria 8007 Australia</span>
          </div>
        </div>
        <div class="header-row hidden">
          <v-divider vertical thickness="2" />
          <v-img :src="clock" height="30" width="30" />
          <div class="header-column">
            <span class="column-name">Monday - Saturday - 8:00 - 18:00</span>
            <span class="column-name">Sunday - 8:00 - 14:00</span>
          </div>
          <v-divider vertical thickness="2" />
          <div class="header-column">
            <span v-if="loginStore.isAuthenticated" class="guest-name">
              {{ `Welcome, ${loginStore.user}` }}
            </span>
            <span v-else class="guest-name">
              Hi, Guest!
            </span>
          </div>
        </div>
      </div>
    </div>
    <nav class="header-navigation">
      <ul class="header-navigation-list header-container">
        <li class="header-navigation-item" v-for="link in links" :key="link.route">
          <router-link :to="link.route" class="header-link">{{ link.text }}</router-link>
        </li>
        <li class="header-navigation-item">
          <router-link
            v-if="!loginStore.isAuthenticated"
            :to="Routes.Login" class="header-link">Login
          </router-link>
          <span v-else class="header-link" @click="logout">Logout</span>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import "./AppHeader.css";
</style>

<script>
import { ref } from "vue";
import logo from "@/assets/icons/logo.svg";
import mapPointer from "@/assets/icons/Map-Pointer.svg";
import clock from "@/assets/icons/clock.svg";
import { Routes } from "@/router/routes";
import { useLoginStore } from "@/stores/login";

export default {
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

    const toggleDrawer = () => {
      drawer.value = !drawer.value;
    };

    return {
      loginStore,
      logout,
      toggleDrawer,
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
