<script lang="ts">
import { defineComponent } from "vue";
import type { Doctor } from "@/types/doctor";
import RatingStars from "@/components/RatingStars/RatingStars.vue";

export default defineComponent({
  name: "DoctorCard",
  components: { RatingStars },
  props: {
    doctor: {
      type: Object as () => Doctor,
      required: true
    }
  },
  data() {
    return {
      localDoctor: { ...this.doctor }
    };
  }
});
</script>

<template>
  <v-card class="doctor-card">
    <v-img :src="localDoctor.photo" class="doctor-card-image" height="200"></v-img>

    <v-card-title class="headline">{{ localDoctor.name }}</v-card-title>
    <v-card-subtitle>{{ localDoctor.speciality }}</v-card-subtitle>

    <v-card-text>
      <rating-stars :rating="localDoctor.rating" />
      {{ localDoctor.reviews }} Reviews
    </v-card-text>
  </v-card>
</template>

<style scoped>
@import "./DoctorCard.css";
</style>