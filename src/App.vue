<script setup lang="ts">
import AppHeader from "@/components/AppHeader/AppHeader.vue";
import AppFooter from "@/components/AppFooter/AppFoote.vue";
</script>

<template>
  <v-app>
    <AppHeader />
    <router-view />
    <app-footer />
  </v-app>
</template>

