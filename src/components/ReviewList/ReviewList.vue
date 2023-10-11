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
    <h3 class="header"> Our Reviews </h3>
    <view-item v-for="review in reviews" :key="review.id" :review="review" />
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