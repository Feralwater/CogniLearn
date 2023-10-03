<template>
  <div class="chart-container">
    <div class="chart">
      <h1 class="chart-header">Average scores of the last 10 years</h1>
    <Chart :data="chartData" :options="options" />
    </div>
  </div>
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
} from 'chart.js'
import { Line as Chart } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  maintainAspectRatio: false,
}

export default {
  name: 'App',
  components: {
    Chart,
  },
  data() {
    return {
      chartData: {
        labels: ['10 years', '20 years', '30 years', '40 years', '50 years', '60 years', '70 years', '80 years', '90 years'],
        datasets: [
          {
            label: 'Depression level',
            backgroundColor: '#f87979',
            data: [5, 40, 35, 65, 65, 50, 30, 20, 10],
          },
          {
            label: 'Anxiety level',
            backgroundColor: '#79a5f8',
            data: [65, 55, 45, 35, 25, 15, 5, 95, 85],
          },
          {
            label: 'Stress level',
            backgroundColor: '#e1f879',
            data: [15, 25, 35, 45, 55, 65, 75, 85, 95],
          },
          {
            label: 'Anger level',
            backgroundColor: '#a879f8',
            data: [4, 8, 15, 16, 23, 42, 56, 77, 88],
          },
        ]
      },
      options
    }
  },
}
</script>

<style scoped>
@import "./StatisticsView.css";
</style>
