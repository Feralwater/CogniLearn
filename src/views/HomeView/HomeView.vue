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
      class="hero"
      gradient="to bottom, rgba(0,0,0,.4), rgba(0,0,0,.1)"
      cover
    >
      <v-container class="hero-container">
        <fieldset class="hero-text">
          <legend class="border-text">Welcome to</legend>
          <h1>Mind Masters</h1>
          <h2>Your Path to Mental Wellness Starts Here</h2>
          <blockquote class="banner-quote">
            <p class="quote-text">"You're not alone, and we're here for you"</p>
            <p class="quote-author">- Mind Masters Team</p>
          </blockquote>
          <router-link class="hero-link" :to="Routes.Quiz">Mental Quiz</router-link>
        </fieldset>
      </v-container>
    </v-img>

    <section>
      <h2 class="doctors--header">Our Doctors</h2>
        <slide-group :sliderItems="doctors" />
    </section>
  </div>
</template>

<style>
@import "./HomeView.css";
</style>
