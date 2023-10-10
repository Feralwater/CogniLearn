<script lang="ts">
import ReviewForm from "@/components/ReviewForm/ReviewForm.vue";
import ReviewList from "@/components/ReviewList/ReviewList.vue";
import type { Review } from "@/types/review";

export default {
  components: {
    ReviewForm,
    ReviewList
  },
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
  },

  methods: {
    addReview(review: Review) {
      this.reviews.push(review);
    }
  }
};
</script>

<template>
  <div>
    <review-form @addReview="addReview" />
    <v-divider></v-divider>
    <review-list :reviews="reviews" />
  </div>
</template>
