<script setup lang="ts">
import interview from "@/assets/images/quiz/interview.png";
import { Routes } from "@/router/routes";

const listItems = [
  {
    icon: "mdi-check",
    title: "Quick and Informative",
    subtitle: "Answer a few questions to gain insights."
  },
  {
    icon: "mdi-shield-check",
    title: "Professional Quiz",
    subtitle: "Developed by mental health experts."
  },
  {
    icon: "mdi-hospital-building",
    title: "Doctor Assistance",
    subtitle: "Helps your doctor make an accurate diagnosis."
  },
  {
    icon: "mdi-account",
    title: "Personalized Results",
    subtitle: "Get results tailored to your answers."
  },
  {
    icon: "mdi-chart-line",
    title: "Track Progress",
    subtitle: "Track your progress over time."
  },
  {
    icon: "mdi-clipboard-check",
    title: "Evidence-Based",
    subtitle: "Based on the DSM-5 diagnostic criteria."
  },
  {
    icon: "mdi-clipboard-text",
    title: "Free",
    subtitle: "No cost to take the quiz."
  },
  {
    icon: "mdi-account-heart",
    title: "Confidential",
    subtitle: "Your answers are not stored."
  }
];
const listColors = [
  "#FF5733", "#00A896", "#FFC300", "#D62828", "#845EC2", "#FF8C00", "#56A3A6", "#4EA8DE"];
</script>

<template>
  <v-container class="quiz">
    <v-row align="center">
      <v-col cols="12" md="9">
        <h1 class="heading">Begin Your Mental Health Journey: Take the Depression Test</h1>
        <p class="subtitle">Do You Have Temporary Low Mood or Real Depression?</p>
        <p class="description">
          Understanding your feelings is the first step in finding the support and solutions you need. This
          quick assessment will provide you with valuable information to make informed decisions about your mental
          health. It's time to prioritize your
          mental well-being -
          <router-link :to="Routes.DepressionTest" class="quiz-link">
            start the test now!
          </router-link>
        </p>
      </v-col>
      <v-col cols="12" md="3">
        <v-img
          :src="interview"
          alt="doctor is interviewing a patient"
        />
      </v-col>
    </v-row>
    <v-list class="info-list">
      <li
        class="info-list-item"
        v-for="(item, index) in listItems"
        :key="item.title"
        :style="{'--accent-color': listColors[index]}"
      >
        <div>
          <v-icon class="icon" size="32">{{ item.icon }}</v-icon>
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="descr">{{ item.subtitle }}</div>
      </li>
    </v-list>
  </v-container>
</template>

<style scoped>
@import "./QuizView.css";
</style>