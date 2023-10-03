<template>
  <div class="chart-container">
    <Line :data="chartData" :options="options" />
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
import { Line } from 'vue-chartjs'

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
    Line
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
          }
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
