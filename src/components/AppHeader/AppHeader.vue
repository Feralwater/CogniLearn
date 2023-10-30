<script setup lang="ts">
import logo from "@/assets/icons/logo.svg";
import mapPointer from "@/assets/icons/Map-Pointer.svg";
import clock from "@/assets/icons/clock.svg";
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();
</script>

<template>
  <header class="header-container">
    <div class="header-logo">
      <v-img :src="logo" height="64" width="80" />
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
  </header>
</template>

<style scoped>
@import "./AppHeader.css";
</style>