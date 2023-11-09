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
  </v-container>
</template>

<style scoped>
.container {
  margin-top: 136px;
}

.header {
  font-family: 'Abril Fatface', sans-serif;
  font-size: 50px;
  letter-spacing: 4px;
  color: var(--secondary);
  margin: 0;
}

.progress {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.buttonsContainer {
  display: flex;
  margin: 0 15px;
  align-items: center;
  justify-content: flex-end;
  gap: 15px
}

.search-input {
  width: 100%;
}

.right {
  display: flex;
  align-items: center;
  gap: 15px;
}

.search-input:global(.v-field--variant-filled .v-field__overlay) {
  background-color: var(--primary-soft);
}

@media screen and (max-width: 599px) {
  .container {
    margin-top: 56px;
  }

  .header {
    font-size: 26px;
    padding: 0 16px;
  }

  .right {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media screen and (max-width: 768px) {
  .buttonsContainer {
    flex-direction: column;
    align-items: flex-start;
  }

  .right {
    width: 100%;
    justify-content: space-between;
  }
}

</style>

