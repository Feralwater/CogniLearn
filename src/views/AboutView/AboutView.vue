<template>
  <v-container class="container">
    <v-row>
      <v-col>
        <h1 class="heading">Welcome to Our Mental Health Clinics</h1>
        <p class="description">
          We are a dedicated team of experienced professionals who are passionate about supporting your mental
          well-being. With years of expertise and a commitment to your mental health, we are here to help you navigate
          life's challenges and find the balance you seek. Trust our caring "mind masters" to guide you on your journey
          to better mental health.
        </p>
      </v-col>
      <v-col>
        <v-card min-width="288px">
          <v-img :src="director" cover />
          <v-card-title>
            Dr. Mindy Klein
          </v-card-title>
          <v-card-subtitle class="pt-4">
            Neurologist, Psychiatrist PhD
            <v-icon class="ml-2">mdi-school</v-icon>
          </v-card-subtitle>

          <v-card-text>
            Hi. I'm Dr. Mindy Klein, director of Mind Masters.
            If you are looking for a safe place to talk about your mental health,
            you've come to the right place.
          </v-card-text>

          <v-card-actions>
            <a href="tel:+1234567890" class="link">
              <v-icon size="18" left>mdi-cellphone</v-icon>
              call me
            </a>
            <a href="mailto:fackeMail@mindmasters.com" class="link">
              <v-icon size="18" left>mdi-email</v-icon>
              email me
            </a>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import director from "@/assets/images/director/director.png";
</script>

<style scoped>
@import "./AboutView.css";
</style>
