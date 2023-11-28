<script setup lang="ts">
import { useRoute } from "vue-router";
import { onMounted } from "vue";

const route = useRoute();

onMounted(() => {
  console.log(route.meta);
});

</script>

<template>
  <div class="container">
    <h1>ProfileView</h1>
  </div>
</template>

<style scoped>

</style>