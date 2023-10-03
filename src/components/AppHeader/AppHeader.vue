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
        </div>
      </div>
    </div>
    <nav class="header-navigation">
      <ul class="header-navigation-list header-container">
        <li class="header-navigation-item">
          <router-link :to="Routes.Home" class="header-link">Home</router-link>
        </li>
        <li class="header-navigation-item">
          <router-link :to="Routes.Statistics" class="header-link">Statistics</router-link>
        </li>
        <li class="header-navigation-item">
          <router-link :to="Routes.About" class="header-link">About</router-link>
        </li>
        <li class="header-navigation-item">
          <router-link :to="Routes.Contact" class="header-link">Contact</router-link>
        </li>
        <li class="header-navigation-item">
          <router-link :to="Routes.Login" class="header-link">Login</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
@import "./AppHeader.css";
</style>

<script>
import logo from "@/assets/icons/logo.svg";
import mapPointer from "@/assets/icons/Map-Pointer.svg";
import clock from "@/assets/icons/clock.svg";
import { Routes } from "@/router/routes";

export default {
  data() {
    return {
      logoIcon: logo,
      mapPointer,
      clock,
      Routes,
    };
  },
};
</script>