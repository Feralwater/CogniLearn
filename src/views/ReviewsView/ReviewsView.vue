<script setup lang="ts">
import ReviewList from "@/components/ReviewList/ReviewList.vue";
import type { Review } from "@/types/review";
import ModalWindow from "@/components/ModalWindow/ModalWindow.vue";
import ReviewForm from "@/components/ReviewForm/ReviewForm.vue";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";
import { useReviews } from "@/hooks/useReviews";
import { computed, ref } from "vue";

const itemsPerPage = 5;

const { totalPages, isReviewsLoading, reviews, currentPage } = useReviews(itemsPerPage);


const sortOptions = [
  { value: "nameAsk", title: "Sort by name (A-Z)" },
  { value: "nameDesc", title: "Sort by name (Z-A)" },
  { value: "ratingAsk", title: "Sort by rating (high to low)" },
  { value: "ratingDesc", title: "Sort by rating (low to high)" }
];

const selectedSort = ref("");
const search = ref("");
const dialogVisible = ref(false);
const addReview = (review: Review) => {
  reviews.value = [review, ...reviews.value];
  dialogVisible.value = false;
};

const removeReview = (id: number) => {
  reviews.value = reviews.value.filter(review => review.id !== id);
};

const editingReview = ref<Review | null>(null);

const editReview = (review: Review) => {
  dialogVisible.value = true;

  editingReview.value = review;
};

const onSaveEditedReview = (review: Review) => {
  const index = reviews.value.findIndex(item => item.id === review.id);
  reviews.value[index] = review;
  editingReview.value = null;
  dialogVisible.value = false;
};

const sortedReviews = computed(() => {
  switch (selectedSort.value) {
    case "nameAsk":
      return [...reviews.value].sort((a, b) => a.name.localeCompare(b.name));
    case "nameDesc":
      return [...reviews.value].sort((a, b) => b.name.localeCompare(a.name));
    case "ratingAsk":
      return [...reviews.value].sort((a, b) => b.rating - a.rating);
    case "ratingDesc":
      return [...reviews.value].sort((a, b) => a.rating - b.rating);
    default:
      return reviews.value;
  }
});

const filteredReviews = computed(() => {
  return sortedReviews.value.filter(review => review.name.toLowerCase().includes(search.value.toLowerCase()));
});

</script>

<template>
  <v-container class="container">
    <modal-window v-model:show="dialogVisible">
      <review-form @addReview="addReview" :review="editingReview" @onSaveEditedReview="onSaveEditedReview" />
    </modal-window>
    <h1 class="header">Our Reviews</h1>
    <div class="buttonsContainer">
      <v-text-field
        v-model.trim="search"
        label="Looking for something?"
        class="search-input"
        color="primary"
      />
      <div class="right">
        <v-btn @click="dialogVisible = true" color="primary">Add Review</v-btn>
        <custom-select
          v-model="selectedSort"
          :items="sortOptions"
        />
      </div>
    </div>
    <review-list
      :reviews="filteredReviews"
      @removeReview="removeReview"
      v-if="!isReviewsLoading"
      @editReview="editReview"
    />
    <div v-else class="progress">
      <v-progress-circular
        size="50"
        color="primary"
        indeterminate
      />
    </div>
    <div class="pagination">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        :total-visible="5"
        color="primary"
      />
    </div>
  </v-container>
</template>

<style scoped>
@import "./ReviewsView.css";
</style>

