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
        <v-col>
          <h2 class="heading2">We provide the best care</h2>
        </v-col>
        <v-row>
          <v-col>
            <!-- First Column -->
            <div class="column" @dragover.prevent @drop="dropHandler(1, $event)">
              <h3 class="column-header">Healthcare Triad Metrics</h3>
              <div
                class="card"
                v-for="(metric, index) in metrics"
                :key="index"
                draggable="true"
                @dragstart="dragStartHandler(index, 1, $event)"
              >
                {{ metric.name }}
              </div>
            </div>
          </v-col>

          <v-col>
            <!-- Second Column -->
            <div class="column" @dragover.prevent @drop="dropHandler(2, $event)">
              <h3 class="column-header">Choose Metrics for yourself</h3>
              <div
                class="card"
                v-for="(metric, index) in chosenMetrics"
                :key="index"
                draggable="true"
                @dragstart="dragStartHandler(index, 2, $event)"
              >
                {{ metric.name }}
              </div>
            </div>
          </v-col>
        </v-row>
        <v-col>
          <div class="userChoice">
            You have chosen: {{ userChoice }}
          </div>
        </v-col>
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
interface Metric {
  name: string;
}

import director from "@/assets/images/director/director.png";
import { computed, ref } from "vue";

const metrics = ref<Array<Metric>>([
  { name: "Fast" },
  { name: "Cheap" },
  { name: "Good" }
]);

const chosenMetrics = ref<Array<Metric>>([]);

const userChoice = computed(() => {
  const chosen = chosenMetrics.value.map((metric) => metric.name).join(", ");
  const notChosen = metrics.value.map((metric) => metric.name).join(" and ");
  return chosenMetrics.value.length ? `${chosen}, but not ${notChosen}` : "nothing";
});

const dragStartHandler = (index: number, column: number, event: DragEvent) => {
  event.dataTransfer?.setData("text/plain", index + "-" + column);
};

const dropHandler = (toColumn: number, event: DragEvent) => {
  const data = event.dataTransfer?.getData("text/plain").split("-") ?? [];
  const index = parseInt(data[0]);
  const fromColumn = parseInt(data[1]);


  if (fromColumn === 1 && toColumn === 2 && chosenMetrics.value.length < 2) {
    chosenMetrics.value.push(metrics.value[index]);
    metrics.value.splice(index, 1);
  }
  if (fromColumn === 1 && toColumn === 2) {
    metrics.value.push(chosenMetrics.value[0]);
    chosenMetrics.value.shift();
    chosenMetrics.value.push(metrics.value[index]);
    metrics.value.splice(index, 1);
  }
  if (fromColumn === 2 && toColumn === 1) {
    metrics.value.push(chosenMetrics.value[index]);
    chosenMetrics.value.splice(index, 1);
  }
};
</script>

<style scoped>
@import "./AboutView.css";
</style>
