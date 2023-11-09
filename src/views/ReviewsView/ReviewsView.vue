<script lang="ts">
import ReviewList from "@/components/ReviewList/ReviewList.vue";
import type { Review, ServerReview } from "@/types/review";
import ModalWindow from "@/components/ModalWindow/ModalWindow.vue";
import ReviewForm from "@/components/ReviewForm/ReviewForm.vue";
import axios from "axios";
import CustomSelect from "@/components/CustomSelect/CustomSelect.vue";

export default {
  components: {
    CustomSelect,
    ReviewForm, ModalWindow,
    ReviewList
  },
  data() {
    return {
      reviews: [] as Review[],
      dialogVisible: false,
      isReviewsLoading: false,
      selectedSort: "",
      page: 1,
      itemsPerPage: 5,
      totalPages: 0,
      sortOptions: [
        { value: "nameAsk", title: "Sort by name (A-Z)" },
        { value: "nameDesc", title: "Sort by name (Z-A)" },
        { value: "ratingAsk", title: "Sort by rating (high to low)" },
        { value: "ratingDesc", title: "Sort by rating (low to high)" }
      ],
      search: ""
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
        this.isReviewsLoading = true;
        const { data, headers } = await axios.get("https://jsonplaceholder.typicode.com/comments", {
          params: {
            _page: this.page,
            _limit: this.itemsPerPage
          }
        });
        this.totalPages = Math.ceil(headers["x-total-count"] / this.itemsPerPage);
        this.reviews = data.map((review: ServerReview) => ({
          id: review.id,
          name: review.name,
          review: review.body,
          rating: Math.floor(Math.random() * 5) + 1
        }));
      } catch (error) {
        alert("Something went wrong. Please try again later.");
      } finally {
        this.isReviewsLoading = false;
      }
    }
  },

  mounted() {
    this.fetchReviews();
  },

  computed: {
    sortedReviews() {
      switch (this.selectedSort) {
        case "nameAsk":
          return [...this.reviews].sort((a, b) => a.name.localeCompare(b.name));
        case "nameDesc":
          return [...this.reviews].sort((a, b) => b.name.localeCompare(a.name));
        case "ratingAsk":
          return [...this.reviews].sort((a, b) => b.rating - a.rating);
        case "ratingDesc":
          return [...this.reviews].sort((a, b) => a.rating - b.rating);
        default:
          return this.reviews;
      }
    },
    filteredReviews() {
      return this.sortedReviews.filter(review => review.name.toLowerCase().includes(this.search.toLowerCase()));
    }
  },

  watch: {
    page() {
      this.fetchReviews();
    }
  }
};
</script>

<template>
  <v-container class="container">
    <modal-window v-model:show="dialogVisible">
      <review-form @addReview="addReview" />
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
    <review-list :reviews="filteredReviews" @removeReview="removeReview" v-if="!isReviewsLoading" />
    <div v-else class="progress">
      <v-progress-circular
        size="50"
        color="primary"
        indeterminate
      />
    </div>
    <div class="pagination">
      <v-pagination
        v-model="page"
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

