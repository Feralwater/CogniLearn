<script setup lang="ts">
import AppFooter from "@/components/AppFooter/AppFoote.vue";
import AppBar from "@/components/AppBar/AppBar.vue";
</script>

<template>
  <v-app>
    <AppBar />
    <router-view />
    <app-footer />
  </v-app>
</template>

