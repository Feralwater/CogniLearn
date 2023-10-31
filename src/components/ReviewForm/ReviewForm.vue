<script lang="ts">
import RatingStars from "@/components/RatingStars/RatingStars.vue";

export default {
  components: { RatingStars },
  data() {
    return {
      name: "",
      review: "",
      rating: 0,
    };
  },
  methods: {
    addReview() {
      this.$emit("add-review", {
        id: Date.now(),
        name: this.name,
        review: this.review,
        rating: this.rating
      });
      this.name = "";
      this.review = "";
      this.rating = 0;
    },
    onRatingChange(rating: number) {
      this.rating = rating;
    }
  }
};
</script>

<template>
  <v-form class="review-form" @submit.prevent>
    <input type="text" placeholder="Your name" class="input-field" v-model.trim="name" />
    <textarea placeholder="Share your experience" class="input-field" v-model.trim="review"></textarea>
    <rating-stars :rating="rating" :on-rating-change="onRatingChange" />
    <v-btn class="add-button" color="primary" @click="addReview" type="submit">Add Review</v-btn>
  </v-form>
</template>

<style scoped>
.review-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--white-mute);
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 5px;
}

.input-field {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 3px;
}

.add-button {
  align-self: flex-end;
  margin-top: 15px;
}

</style>