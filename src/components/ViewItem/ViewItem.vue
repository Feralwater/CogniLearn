<script lang="ts">
import type { Review } from "@/types/review";
import RatingStars from "@/components/RatingStars/RatingStars.vue";
import { Routes } from "@/router/routes";

export default {
  components: { RatingStars },
  props: {
    review: {
      type: Object as () => Review,
      required: true
    }
  },

  methods: {
    removeReview(id: number) {
      this.$emit("remove-review", id);
    },

    editReview(review: Review) {
      this.$emit("edit-review", review);
    },

    openReview() {
      this.$router.push(Routes.ReviewsId.replace(":id", this.review.id.toString()));
    }
  }
};
</script>

<template>
  <v-card class="card" @click="openReview">
    <v-card-title class="card-title">{{ review.name }}</v-card-title>
    <v-card-text>
      <rating-stars :rating="review.rating" />
      <p class="review-text">{{ review.review }}</p>
    </v-card-text>
    <div class="button-container" v-if="review.id < 0">
      <v-btn
        color="primary"
        @click.stop="removeReview(review.id)"
      >
        <v-icon>mdi-delete</v-icon>
        Remove
      </v-btn>
      <v-btn color="primary" @click.stop="editReview(review)">
        <v-icon>mdi-pencil</v-icon>
        Edit
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.card {
  border: 1px solid var(--border);
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  background-color: var(--background);
  box-shadow: 0 2px 4px var(--secondary-60);
  cursor: pointer;
}

.card-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--indigo);
}

.review-text {
  font-size: 16px;
  line-height: 1.4;
  margin: 10px 0;
  color: var(--black);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.button-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
}
</style>