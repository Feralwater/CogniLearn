<script setup lang="ts">
import { getTestResultDescription } from "@/utils/testResultProcessor";
import html2pdf from "html2pdf.js";
import { usePatientStore } from "@/stores/patient";
import type { PropType } from "vue";
import { computed } from "vue";


const patient = usePatientStore();
const props = defineProps({
  testResult: {
    type: String as PropType<string>,
    required: true
  }
});

const depressionResults = computed(() => {
  return getTestResultDescription(props.testResult);
});

const downloadPDF = () => {
  const element = document.getElementById("element-to-pdf");

  const options = {
    margin: 10,
    filename: `${patient.firstName} ${patient.lastName} - test results.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf(element, options);
};
</script>

<template>
  <v-btn @click="downloadPDF" color="primary">Download PDF</v-btn>
  <div id="element-to-pdf">
    <v-container>
      <v-img src="/path-to-clinic-logo.png" max-height="100"></v-img>

      <!-- Patient Information -->
      <v-card>
        <v-card-title>Personal Information</v-card-title>
        <v-card-text>
          <div><strong>First Name:</strong> {{ patient.firstName }}</div>
          <div><strong>Last Name:</strong> {{ patient.lastName }}</div>
          <div><strong>Age:</strong> {{ patient.age }}</div>
          <div><strong>Gender:</strong> {{ patient.gender }}</div>
          <div><strong>Phone:</strong> {{ patient.phone }}</div>
          <div><strong>Email:</strong> {{ patient.email }}</div>
          <div><strong>Address:</strong> {{ patient.address }}</div>
        </v-card-text>
      </v-card>

      <!-- Test Results -->
      <v-card>
        <v-card-title>Test Results</v-card-title>
        <v-card-text>
          <div><strong>Test Result:</strong> {{ props.testResult }}</div>
        </v-card-text>
      </v-card>

      <!-- Description -->
      <v-card>
        <v-card-title>Description</v-card-title>
        <v-card-text>
          {{ depressionResults }}
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
@import "./TestResultsView.css";
</style>