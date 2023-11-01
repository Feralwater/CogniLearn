<template>
  <v-container class="statistics">
    <h1 class="statistics-header">Mental Health Symptom Trends: You Are Not Alone</h1>
    <v-row>
      <v-col md="6">
        <Chart :data="chartData" :options="options" />
      </v-col>
      <v-col md="6">
        <div class="statistics-description">
          <p>
            In a world that often makes us feel isolated and overwhelmed, it's crucial to remember that
            <strong class="strong">you are not alone</strong> in your mental health journey. We are dedicated to
            providing support, understanding, and care to those who seek it.
          </p>
          <v-list class="list">
            <v-list-item class="list-item"><strong class="strong">Raise Awareness:</strong> Understanding that mental
              health challenges affect a significant portion of the population can help reduce the stigma surrounding
              mental health issues.
            </v-list-item>
            <v-list-item class="list-item"><strong class="strong">Empowerment Through Knowledge:</strong> Knowledge is a
              powerful tool. By being informed about the prevalence and trends of mental health symptoms, you can better
              navigate your own mental health journey or provide support to loved ones.
            </v-list-item>
            <v-list-item class="list-item"><strong class="strong">Highlight Progress and Hope:</strong> While mental
              health challenges can be daunting, it's important to see the positive side too. With the right support and
              resources, healing and growth are possible.
            </v-list-item>
            <v-list-item class="list-item"><strong class="strong">Guide Our Clinic's Approach:</strong> The data
              presented in this chart helps our clinic continually improve our services and tailor our approach to meet
              the evolving needs of our community. Your experiences
              and feedback shape the way we provide care, ensuring it remains relevant and effective.
            </v-list-item>
          </v-list>
        </div>
      </v-col>
    </v-row>
    <v-row class="expertise">
      <v-col md="4">
        <div class="achievement">
          <v-icon>mdi-account-group</v-icon>
          <div><span class="important">30000+</span> lives changed</div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="achievement">
          <v-icon>mdi-clock-time-three-outline</v-icon>
          <div><span class="important">50+</span> years of experience</div>
        </div>
      </v-col>
      <v-col md="4">
        <div class="achievement">
          <v-icon>mdi-star-circle</v-icon>
          <div><span class="important">10+</span> world-class experts</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line as Chart } from "vue-chartjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false
};

export default {
  name: "App",
  components: {
    Chart
  },
  data() {
    return {
      chartData: {
        labels: ["1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015", "2020"],
        datasets: [
          {
            label: "Depression level",
            backgroundColor: "#e81111",
            data: [26, 32, 36, 33, 48, 52, 60, 65, 70]
          },
          {
            label: "Anxiety level",
            backgroundColor: "#2f72ea",
            data: [2, 8, 15, 16, 23, 42, 35, 28, 27]
          },
          {
            label: "Stress level",
            backgroundColor: "#16b211",
            data: [15, 25, 20, 38, 44, 40, 29, 55, 60]
          },
          {
            label: "Anger level",
            backgroundColor: "#e39a3c",
            data: [45, 35, 25, 15, 25, 45, 56, 67, 74]
          }
        ]
      },
      options
    };
  }
};
</script>

<style scoped>
@import "./StatisticsView.css";
</style>
