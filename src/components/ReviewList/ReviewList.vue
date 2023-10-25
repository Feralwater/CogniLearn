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
    <transition-group name="reviews-list" tag="div">
      <view-item
        v-for="review in reviews"
        :key="review.id"
        :review="review"
        @removeReview="removeReview"
      />
    </transition-group>
  </div>
  <div v-else>
    <h3 class="header"> No Reviews Yet </h3>
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  margin: 20px 0;
  font-size: 30px;
  color: var(--vt-c-text-light-1);
}

.reviews-list-enter-active,
.reviews-list-leave-active {
  transition: all .5s ease;
}

.reviews-list-enter-from,
.reviews-list-leave-to {
  opacity: 0;
  transform: translateX(200px);
}

</style>
