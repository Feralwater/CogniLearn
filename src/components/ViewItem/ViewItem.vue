<script lang="ts">
import type { Review } from "@/types/review";
import RatingStars from "@/components/RatingStars/RatingStars.vue";

export default {
  components: { RatingStars },
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
      <rating-stars :rating="review.rating" />
    </v-card-text>
    <div class="button-container">
      <v-btn color="primary"
             @click="$emit('remove-review', review.id)"
      >Remove
      </v-btn>
      <v-btn color="primary">Edit</v-btn>
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

.button-container {
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 15px;
}

</style>