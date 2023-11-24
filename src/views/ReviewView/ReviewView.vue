<script setup lang="ts">
import router from "../../router";
import RatingStars from "@/components/RatingStars/RatingStars.vue";
import { useReview } from "@/hooks/useReview";
import { computed, ref } from "vue";

const id = router.currentRoute.value.params.id as string;

const { review, randomDoctor } = useReview(id);
const rating = ref(Math.floor(Math.random() * 5) + 1);
const recommended = computed(() => rating.value * 20);

</script>

<template>
  <v-container class="container review-container">
    <v-row>
      <v-col>
        <h1 class="doctor-name">{{ randomDoctor.name }}</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-lg-space-between mb-3">
        <rating-stars :rating="rating" />
        <p :class="recommended > 50 ? 'recommended-text' : 'not-recommended-text'"
        >
          recommended by {{ recommended }}% of patients
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6" md="4">
        <v-img :src="randomDoctor.photo" :alt="randomDoctor.name" class="doctor-img" />
      </v-col>
      <v-col cols="6" md="8">
        <div class="review-details">
          <p><strong class="label">Doctor:</strong> {{ randomDoctor.name }}</p>
          <p><strong class="label">Speciality:</strong> {{ randomDoctor.speciality }}</p>
          <p><strong class="label">Clinic:</strong> Hermes Medical Center, 33, 5th Avenue, New York, NY 10003
          </p>
        </div>
      </v-col>
    </v-row>
    <v-divider class="section-divider" />
    <v-row class="patient-info">
      <v-col>
        <p class="label">Patient</p>
        <p v-if="review">{{ review.email }}</p>
        <v-skeleton-loader v-else type="text" />
      </v-col>
      <v-col>
        <p class="label">Appointment Date</p>
        <p>12/12/2020</p>
      </v-col>
    </v-row>
    <v-divider class="section-divider" />
    <v-row class="review-section">
      <v-col>
        <p class="reviewer-name" v-if="review">{{ review.name }}</p>
        <v-skeleton-loader v-else type="text" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p v-if="review">{{ review.body }}</p>
        <v-skeleton-loader v-else type="text" />
      </v-col>
    </v-row>
    <v-divider class="section-divider" />
    <v-row>
      <v-col>
        <p class="label">Patient Feedback</p>
      </v-col>
      <v-col>
        <rating-stars :rating="Math.floor(Math.random() * 5) + 1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

.review-container {
  max-width: 900px;
}

.doctor-name {
  font-size: 24px;
  color: var(--indigo);
}

.recommended-text {
  color: var(--success);
  margin-left: 10px;
}

.not-recommended-text {
  color: var(--important);
  margin-left: 10px;
}

.doctor-img {
  width: 100%;
  max-width: 200px;
  border-radius: 8px;
}

.section-divider {
  margin: 20px 0;
}

.reviewer-name {
  font-weight: bold;
  font-size: 18px;
  color: var(--secondary);
}

.label {
  font-size: 18px;
  color: var(--secondary);
}
</style>