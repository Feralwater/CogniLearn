<script lang="ts">
export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: "John",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          rating: 4
        },
        {
          id: 2,
          name: "Jane",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          rating: 5
        },
        {
          id: 3,
          name: "Jim",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          rating: 3
        }
      ]
    };
  }
};
</script>

<template>
  <div>
    <v-form class="review-form">
      <input type="text" placeholder="Name" class="input-field" />
      <textarea placeholder="Review" class="input-field"></textarea>
      <select class="rating-select">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <div class="button-container">
        <v-btn color="primary">Add Review</v-btn>
      </div>
    </v-form>
    <v-divider></v-divider>
    <v-card v-for="review in reviews" :key="review.id" class="mt-4">
      <v-card-title>{{ review.name }}</v-card-title>
      <v-card-text>
        <p>{{ review.review }}</p>
        <p>Rating: {{ review.rating }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
@import "./ReviewsView.css";
</style>