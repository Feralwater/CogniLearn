<script setup lang="ts">

import router from "../../router";
</script>

<template>
  <v-container class="container">
    {{ router.currentRoute.value.params.id }}
  </v-container>
</template>

<style scoped>

</style>