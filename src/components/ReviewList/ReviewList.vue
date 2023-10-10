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
  }
};
</script>

<template>
  <div>
    <h3> Our Reviews </h3>
    <view-item v-for="review in reviews" :key="review.id" :review="review" />
  </div>
</template>
