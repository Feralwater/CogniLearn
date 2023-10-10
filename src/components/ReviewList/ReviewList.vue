<script lang="ts">
export default {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
};
</script>

<template>
  <v-card v-for="review in reviews" :key="review.id" class="mt-4">
    <v-card-title>{{ review.name }}</v-card-title>
    <v-card-text>
      <p>{{ review.review }}</p>
      <p>Rating: {{ review.rating }}</p>
    </v-card-text>
  </v-card>
</template>

<style scoped>

</style>