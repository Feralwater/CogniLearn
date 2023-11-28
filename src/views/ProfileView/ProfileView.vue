<script setup lang="ts">
import { useLoginStore } from '@/stores/login';

const {user} = useLoginStore();
</script>

<template>
  <v-container class="container">
    <h1>{{ user }}</h1>
  </v-container>
</template>

<style scoped>

</style>