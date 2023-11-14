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
const isFormValid = computed(() => !!name.value && !!reviewBody.value && !!rating.value);
const isButtonClicked = ref(false);

const addReview = () => {
  isButtonClicked.value = true;
  if (!isFormValid.value) return;
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
  isButtonClicked.value = true;
  if (!isFormValid.value) return;
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
    <v-text-field
      label="Review title"
      v-model.trim="name"
      color="primary"
      variant="outlined"
      density="compact"
      :rules="[v => !!v || 'Name is required']"
    />
    <v-textarea
      label="Share your experience"
      v-model.trim="reviewBody"
      color="primary"
      variant="outlined"
      density="compact"
      :rules="[v => !!v || 'Review is required']"
    />
    <div class="rating-container">
      <span class="rating-label">Rating:</span>
      <rating-stars :rating="rating" :on-rating-change="onRatingChange" />
    </div>
    <div v-if="!rating && isButtonClicked" class="error">
      Please select rating
    </div>
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
  padding: 15px;
  border-radius: 5px;
}

.add-button {
  align-self: flex-end;
  margin-top: 15px;
}

.rating-container {
  display: flex;
  align-items: center;
}

.rating-label {
  margin-right: 10px;
  font-size: 16px;
  color: var(--primary);
}

.error {
  color: var(--important);
  font-size: 10px;
  margin-top: 5px;
}
</style>