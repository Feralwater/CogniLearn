<script lang="ts">
import { defineComponent } from "vue";
import grayStar from "@/assets/icons/grayStar.svg";
import yellowStar from "@/assets/icons/yellowStar.svg";

export default defineComponent({
  name: "RatingStars",
  props: {
    rating: {
      type: Number,
      required: true
    },
    onRatingChange: {
      type: Function,
      required: false
    }
  },
  data() {
    return {
      grayStar,
      yellowStar
    };
  }
});
</script>

<template>
  <div class="rating-stars">
    <img v-for="star in 5"
         :key="star"
         :src="star <= rating ? yellowStar : grayStar"
         :class="{ pointer: onRatingChange, star}"
         alt="star"
         @click="onRatingChange && onRatingChange(star)"
    />
  </div>
</template>

<style scoped>
.rating-stars {
  display: flex;
  align-items: center;
}

.star {
  width: 20px;
  height: 20px;
  margin-right: 5px;
}

.pointer {
  cursor: pointer;
}
</style>