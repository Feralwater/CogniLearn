<script lang="ts">
import ReviewList from "@/components/ReviewList/ReviewList.vue";
import type { Review, ServerReview } from "@/types/review";
import ModalWindow from "@/components/ModalWindow/ModalWindow.vue";
import ReviewForm from "@/components/ReviewForm/ReviewForm.vue";
import axios from "axios";

export default {
  components: {
    ReviewForm, ModalWindow,
    ReviewList
  },
  data() {
    return {
      reviews: [] as Review[],
      dialogVisible: false
    };
  },

  methods: {
    addReview(review: Review) {
      this.reviews.push(review);
      this.dialogVisible = false;
    },
    removeReview(id: number) {
      this.reviews = this.reviews.filter(review => review.id !== id);
    },
    async fetchReviews() {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/comments?_limit=10");
        this.reviews = data.map((review: ServerReview) => ({
          id: review.id,
          name: review.name,
          review: review.body,
          rating: Math.floor(Math.random() * 5) + 1
        }));
      } catch (error) {
        alert("Something went wrong. Please try again later.");
      }
    }
  },

  mounted() {
    this.fetchReviews();
  }
};
</script>

<template>
  <div>
    <modal-window v-model:show="dialogVisible">
      <review-form @addReview="addReview" />
    </modal-window>
    <div class="headerContainer">
      <h3 class="header">Our Reviews</h3>
      <v-btn @click="dialogVisible = true" color="primary">Add Review</v-btn>
    </div>
    <v-divider></v-divider>
    <review-list :reviews="reviews" @removeReview="removeReview" />
  </div>
</template>

<style scoped>
.header {
  font-size: 32px;
  font-weight: bold;
  color: #333;
}

.headerContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 15px;
}

</style>

