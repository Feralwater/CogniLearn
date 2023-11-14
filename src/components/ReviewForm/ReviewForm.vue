<script lang="ts" setup>
import RatingStars from "@/components/RatingStars/RatingStars.vue";
import type { Review } from "@/types/review";
import { computed, ref } from "vue";

const props = defineProps({
  review: {
    type: Object as () => Review | null,
    required: false
  }
});

const emit = defineEmits(["add-review", "on-save-edited-review"]);

const name = ref(props.review?.name ?? "");
const reviewBody = ref(props.review?.review ?? "");
const rating = ref(props.review?.rating ?? 0);
const isEditing = computed(() => props.review !== null);

const addReview = () => {
  emit("add-review", {
    id: -Date.now(),
    name: name.value,
    review: reviewBody.value,
    rating: rating.value
  });
  name.value = "";
  reviewBody.value = "";
  rating.value = 0;
};

const onSaveEditedReview = () => {
  emit("on-save-edited-review", {
    ...props.review,
    name: name.value,
    review: reviewBody.value,
    rating: rating.value
  });
};

const onRatingChange = (stars: number) => {
  rating.value = stars;
};

</script>

<template>
  <v-form class="review-form" @submit.prevent>
    <input type="text" placeholder="Your name" class="input-field" v-model.trim="name" />
    <textarea placeholder="Share your experience" class="input-field" v-model.trim="reviewBody"></textarea>
    <rating-stars :rating="rating" :on-rating-change="onRatingChange" />
    <v-btn
      class="add-button"
      color="primary"
      @click="isEditing ? onSaveEditedReview() : addReview()"
      type="submit"
    >
      <v-icon>{{ isEditing ? "mdi-pencil" : "mdi-plus" }}</v-icon>
      {{ isEditing ? "Update" : "Add" }}
    </v-btn>
  </v-form>
</template>

<style scoped>
.review-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--white);
  border: 1px solid var(--black);
  border-radius: 5px;
}

.input-field {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid var(--black);
  border-radius: 3px;
}

.add-button {
  align-self: flex-end;
  margin-top: 15px;
}

</style>