<script lang="ts">
import type { Review } from "@/types/review";

export default {
  props: {
    review: {
      type: Object as () => Review,
      required: true
    }
  }
};
</script>

<template>
  <v-card>
    <v-card-title>{{ review.name }}</v-card-title>
    <v-card-text>
      <p>{{ review.review }}</p>
      <p>Rating: {{ review.rating }}</p>
    </v-card-text>
  </v-card>
</template>
