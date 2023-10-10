<script lang="ts">
export default {
  data() {
    return {
      name: "",
      review: "",
      rating: 5
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
      this.rating = 5;
    }
  }
};
</script>

<template>
  <v-form class="review-form" @submit.prevent>
    <input type="text" placeholder="Your name" class="input-field" v-model.trim="name" />
    <textarea placeholder="Share your experience" class="input-field" v-model.trim="review"></textarea>
    <select class="rating-select" v-model="rating">
      <option value="5">5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
    <v-btn class="add-button" color="primary" @click="addReview" type="submit">Add Review</v-btn>
  </v-form>
</template>

<style scoped>
.review-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: var(--vt-c-white-mute);
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 5px;
  margin-bottom: 15px;
}

.input-field {
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid var(--vt-c-divider-light-1);
  border-radius: 3px;
}

.rating-select {
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