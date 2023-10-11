<script lang="ts">
import type { Review } from "@/types/review";
import ViewItem from "@/components/ViewItem/ViewItem.vue";

export default {
  components: { ViewItem },
  props: {
    reviews: {
      type: Array as () => Array<Review>,
      required: true
    }
  },
  methods: {
    removeReview(id: number) {
      this.$emit("remove-review", id);
    }
  }
};
</script>

<template>
  <div v-if="reviews.length > 0">
    <h3 class="header"> Our Reviews </h3>
    <view-item
      v-for="review in reviews"
      :key="review.id"
      :review="review"
      @removeReview="removeReview"
    />
  </div>
  <div v-else>
    <h3 class="header"> No Reviews Yet </h3>
  </div>
</template>

<style scoped>
.header {
  font-size: 32px;
  font-weight: bold;
  margin: 15px;
  color: #333;
}
</style>