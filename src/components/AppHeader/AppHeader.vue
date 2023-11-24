<script setup lang="ts">
import logo from "@/assets/icons/logo.svg";
import mapPointer from "@/assets/icons/Map-Pointer.svg";
import user from "@/assets/icons/user-spy.svg";
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
        <v-divider vertical thickness="2" class="hidden" />
        <div class="header-row">
            <span v-if="loginStore.isAuthenticated" class="guest-name">
              {{ `Welcome, ${loginStore.user}` }}
            </span>
          <span v-else>
              Hi, Guest!
            </span>
          <div class="user">
            <v-img :src="user" class="user-icon" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
@import "./AppHeader.css";
</style>