<script setup lang="ts">
import logo from "@/assets/icons/logo.svg";
import mapPointer from "@/assets/icons/Map-Pointer.svg";
import clock from "@/assets/icons/clock.svg";
import { useLoginStore } from "@/stores/login";

const loginStore = useLoginStore();
</script>

<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo mobile-hidden">
        <v-img :src="logo" height="64" width="80" />
        <span class="project-name black">mind</span>
        <span class="project-name green">masters</span>
      </div>
      <div class="header-row">
        <div class="header-column">
          <span>Emergency Help</span>
          <a href="tel:+1 (234) 567-890" class="column-name green phone">+1 (234) 567-890</a>
        </div>
        <v-divider vertical thickness="2" />
        <div class="header-row hidden">
          <v-img :src="mapPointer" height="35" width="35" />
          <div class="header-column">
            <span>PO Box 16122 Collins Street West</span>
            <span>Victoria 8007 Australia</span>
          </div>
        </div>
        <div class="header-row hidden">
          <v-divider vertical thickness="2" />
          <v-img :src="clock" height="30" width="30" />
          <div class="header-column">
            <span>Monday - Saturday - 8:00 - 18:00</span>
            <span>Sunday - 8:00 - 14:00</span>
          </div>
          <v-divider vertical thickness="2" />
        </div>
        <div class="header-column">
            <span v-if="loginStore.isAuthenticated" class="guest-name">
              {{ `Welcome, ${loginStore.user}` }}
            </span>
          <span v-else>
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