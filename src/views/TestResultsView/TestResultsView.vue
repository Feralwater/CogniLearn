<script setup lang="ts">
import { getTestResultDescription } from "@/utils/testResultProcessor";
import html2pdf from "html2pdf.js";
import { usePatientStore } from "@/stores/patient";
import type { PropType } from "vue";
import { computed } from "vue";
import logo from "@/assets/icons/logo.svg";


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
const patientId = computed(() => {
  return Math.floor(Math.random() * 1000000000);
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
      <header class="header">
        <div class="header-logo">
          <v-img :src="logo" height="64" width="80" />
          <span class="project-name black">mind</span>
          <span class="project-name green">masters</span>
        </div>
        <div class="header-text">We are here to help you!</div>
      </header>
      <section class="registration">
        <v-row>
          <v-col cols="12" class="registration-heading">
            Patient Info
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-account</v-icon>
            <span class="registration-field">Name: </span>
            <span class="registration-data">{{ patient.firstName }} {{ patient.lastName }}</span>
          </v-col>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-card-account-details</v-icon>
            <span class="registration-field">Patient ID: </span>
            <span class="registration-data">{{ patientId }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-human-male</v-icon>
            <span class="registration-field">Age: </span>
            <span class="registration-data">{{ patient.age }}</span>
          </v-col>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-gender-male-female</v-icon>
            <span class="registration-field">Gender: </span>
            <span class="registration-data">{{ patient.gender }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-phone</v-icon>
            <span class="registration-field">Phone: </span>
            <span class="registration-data">{{ patient.phone }}</span>
          </v-col>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-email</v-icon>
            <span class="registration-field">Email: </span>
            <span class="registration-data">{{ patient.email }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="registration-col">
            <v-icon color="primary" size="18">mdi-map-marker</v-icon>
            <span class="registration-field">Address: </span>
            <span class="registration-data">{{ patient.address }}</span>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="registration-heading">
            Medical Info
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            Bad Habits: {{ patient.badHabits }}
          </v-col>
          <v-col cols="6">
            Medications: {{ patient.hasMedicalTreatment }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            Family History: {{ patient.hasFamilyDepression }}
          </v-col>
          <v-col cols="6">
            Medical History:
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="registration-heading">
            Test Info
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            Date: {{ new Date().toLocaleDateString() }}
          </v-col>
          <v-col cols="6">
            Time: {{ new Date().toLocaleTimeString() }}
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            Test Result: {{ testResult }}
          </v-col>
          <v-col cols="6">
            Description: {{ depressionResults }}
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<style scoped>
@import "./TestResultsView.css";
</style>