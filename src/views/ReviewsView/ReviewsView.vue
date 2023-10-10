<script lang="ts">
export default {
  data() {
    return {
      name: "",
      review: "",
      rating: 5,
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
  },
  methods: {
    addReview() {
      this.reviews.push({
        id: Date.now(),
        name: this.name,
        review: this.review,
        rating: this.rating
      });
      this.name = "";
      this.review = "";
      this.rating = 5;
    }
  }
};
</script>

<template>
  <div>
    <v-form class="review-form" @submit.prevent>
      <input type="text" placeholder="Your name" class="input-field" v-model.trim="name" />
      <textarea placeholder="Share your experience" class="input-field" v-model.trim="review"></textarea>
      <select class="rating-select" v-model="rating">
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
      <v-btn class="add-button" color="primary" @click="addReview" type="submit">Add Review</v-btn>
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