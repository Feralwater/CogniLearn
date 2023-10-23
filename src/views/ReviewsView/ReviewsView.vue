<script lang="ts">
import ReviewList from "@/components/ReviewList/ReviewList.vue";
import type { Review } from "@/types/review";
import ModalWindow from "@/components/ModalWindow/ModalWindow.vue";
import ReviewForm from "@/components/ReviewForm/ReviewForm.vue";

export default {
  components: {
    ReviewForm, ModalWindow,
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
      ],
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
    }
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

