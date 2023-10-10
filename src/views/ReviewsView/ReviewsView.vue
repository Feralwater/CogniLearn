<script lang="ts">
export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: "John",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          rating: 4
        },
        {
          id: 2,
          name: "Jane",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          rating: 5
        },
        {
          id: 3,
          name: "Jim",
          review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
          rating: 3
        }
      ]
    };
  }
};
</script>

<template>
  <div>
    <div v-for="review in reviews" :key="review.id">
      <div>
        <h4>{{ review.name }}</h4>
        <p>{{ review.review }}</p>
        <p>Rating: {{ review.rating }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>