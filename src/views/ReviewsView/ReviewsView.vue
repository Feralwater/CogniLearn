<script lang="ts">
import ReviewForm from "@/components/ReviewForm/ReviewForm.vue";
import ReviewList from "@/components/ReviewList/ReviewList.vue";

export default {
  components: {
    ReviewForm,
    ReviewList
  },
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
    <review-form />
    <v-divider></v-divider>
    <review-list :reviews="reviews" />
  </div>
</template>
