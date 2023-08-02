<template>
  <div class="contactCard">
    <h3 class="contactCard--header">{{ clinic.name }}</h3>
    <div>
      <p class="contactCard--data">
        <span class="contactCard--data-name">Country:</span>
        <span>{{ clinic.country }}</span>
      </p>
      <p class="contactCard--data">
        <span class="contactCard--data-name">City:</span>
        <span>{{ clinic.city }}</span>
      </p>
      <p class="contactCard--data">
        <span class="contactCard--data-name">Medical Director:</span>
        <span>{{ clinic.medicalDirector }}</span>
      </p>
      <p class="contactCard--data">
        <span class="contactCard--data-name">Phone:</span>
        <span>{{ clinic.phone }}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Clinic {
  id: number;
  name: string;
  country: string;
  city: string;
  medicalDirector: string;
  phone: string;
  lat: number;
  lng: number;
}

export default defineComponent({
  props: {
    clinic: {
      type: Object as () => Clinic,
      required: true
    }
  }
});
</script>

<style scoped>
@import './ContactCard.css';
</style>