<template>
  <v-card class="contactCard">
    <v-card-title class="contactCard--header">
      {{ clinic.name }}
    </v-card-title>
    <v-card-text class="contactCard--data">
      <v-row>
        <v-col class="contactCard--data-name pa-1">
          <v-icon color="primary">mdi-map-marker</v-icon>
          Country:
        </v-col>
        <v-col class="pa-1">{{ clinic.country }}</v-col>
      </v-row>
      <v-row>
        <v-col class="contactCard--data-name pa-1">
          <v-icon color="primary">mdi-city</v-icon>
          City:
        </v-col>
        <v-col class="pa-1">{{ clinic.city }}</v-col>
      </v-row>
      <v-row>
        <v-col class="contactCard--data-name pa-1">
          <v-icon color="primary">mdi-account</v-icon>
          Director:
        </v-col>
        <v-col class="pa-1">{{ clinic.medicalDirector }}</v-col>
      </v-row>
    </v-card-text>
    <v-card-actions>
      <v-icon color="primary">mdi-phone</v-icon>
      <a :href="`tel:${clinic.phone}`" class="contactCard--phone">{{ clinic.phone }}</a>
    </v-card-actions>
  </v-card>
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