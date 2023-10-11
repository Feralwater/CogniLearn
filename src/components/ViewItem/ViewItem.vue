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
  <v-card class="card">
    <v-card-title class="card-title">{{ review.name }}</v-card-title>
    <v-card-text class="card-text">
      <p class="review-text">{{ review.review }}</p>
      <p class="rating-text">Rating: {{ review.rating }}</p>
    </v-card-text>
    <div class="button-container">
      <button class="remove-button">Remove</button>
      <button class="edit-button">Edit</button>
    </div>
  </v-card>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
}

.card-text {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 10px;
  color: #666;
}

.review-text {
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 10px;
  color: #333;
}

.rating-text {
  font-size: 18px;
  font-weight: bold;
  color: #FF5722;
}

.button-container {
  margin-top: 10px;
}

.remove-button {
  background-color: #00796B;
  color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
}

.edit-button {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  cursor: pointer;
}
</style>