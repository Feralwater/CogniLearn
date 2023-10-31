<script setup>
import banner from "@/assets/images/home/banner.png";
import { Routes } from "@/router/routes";
import SlideGroup from "@/components/SlideGroup/SlideGroup.vue";
import { doctors } from "@/data/doctors";
</script>


<template>
  <div>
    <v-img
      :src="banner"
      max-height="600px"
      cover
    >
      <v-container fluid>
        <div class="banner-content">
          <h1 class="banner-title">
            Welcome to Mind Masters
          </h1>
          <h2 class="banner-subtitle">Your Path to Mental Wellness Starts Here</h2>
          <p class="subheading mb-6 banner-description">
            Take the First Step towards Healing with our
            <router-link :to="Routes.Quiz" class="banner-link">Depression Self-Assessment Test</router-link>
          </p>
          <blockquote class="banner-quote">
            <p class="quote-text">"You're not alone, and we're here for you"</p>
            <p class="quote-author">- Mind Masters Team</p>
          </blockquote>
        </div>
      </v-container>
    </v-img>

    <section>
      <h2>Our Doctors</h2>
      <div class="home-slider">
        <slide-group :sliderItems="doctors" />
      </div>
    </section>
  </div>
</template>

<style>
@import "./HomeView.css";
</style>
