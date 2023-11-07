<script setup lang="ts">
import { getTestResultDescription } from "@/utils/testResultProcessor";
import html2pdf from "html2pdf.js";
import { usePatientStore } from "@/stores/patient";
import type { PropType } from "vue";
import { computed, ref } from "vue";
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
const habits = computed(() => {
  return patient.badHabits.join(", ");
});
const testData = ref(new Date().toLocaleDateString());
const testTime = ref(new Date().toLocaleTimeString());

const downloadPDF = () => {
  const element = document.getElementById("element-to-pdf");

  const options = {
    filename: `${patient.firstName} ${patient.lastName} - test results.pdf`,
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
  };

  html2pdf(element, options);
};
</script>

<template>
  <v-container>
    <div class="registration-pdf">
      <div class="registration-note">
        Remember, that this test is not a diagnosis. It is just a tool to help you and your doctor to understand your
        mental health condition.
      </div>
      <v-btn
        @click="downloadPDF"
        color="primary"
        variant="text"
      >
        <v-icon>mdi-download</v-icon>
        Download PDF
      </v-btn>
    </div>
    <div id="element-to-pdf">
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
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-smoking</v-icon>
            <span class="registration-field">Habits: </span>
            <span class="registration-data">{{ habits }}</span>
          </v-col>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-medical-bag</v-icon>
            <span class="registration-field">Medical treatment: </span>
            <span class="registration-data">{{ patient.hasMedicalTreatment ? "Yes" : "No" }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-heart-pulse</v-icon>
            <span class="registration-field">Family mental issues</span>
            <span class="registration-data">{{ patient.hasFamilyDepression ? "Yes" : "No" }}</span>
          </v-col>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-pill</v-icon>
            <span class="registration-field">Details: </span>
            <span class="registration-data">{{ patient.medicalTreatmentDetails }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-sleep</v-icon>
            <span class="registration-field">Hours of sleep: </span>
            <span class="registration-data">{{ patient.hoursOfSleep }} hours per day</span>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" class="registration-heading">
            Test Info
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-calendar</v-icon>
            <span class="registration-field">Date: </span>
            <span class="registration-data">{{ testData }}</span>
          </v-col>
          <v-col cols="6" class="registration-col">
            <v-icon color="primary" size="18">mdi-clock</v-icon>
            <span class="registration-field">Time: </span>
            <span class="registration-data">{{ testTime }}</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" class="registration-col">
            <v-icon color="primary" size="18">mdi-emoticon-sad-outline</v-icon>
            <span class="registration-field">Test result: </span>
            <span class="registration-data">{{ props.testResult }}</span>
          </v-col>
          <v-col cols="12" class="registration-col">
            <v-icon color="primary" size="18">mdi-information-outline</v-icon>
            <span class="registration-field">Test result description: </span>
            <span class="registration-data">{{ depressionResults }}</span>
          </v-col>
        </v-row>
        <v-row class="registration-comment">
          <v-col cols="12" class="registration-col">
            <v-icon color="primary" size="18">mdi-comment-text-outline</v-icon>
            <span class="registration-field">Doctor`s comment: </span>
          </v-col>
          <v-col cols="12" class="registration-col"/>
          <v-col cols="12" class="registration-col"/>
          <v-col cols="12" class="registration-col"/>
          <v-col cols="12" class="registration-col"/>
        </v-row>
      </section>
    </div>
  </v-container>
</template>

<style scoped>
@import "./TestResultsView.css";
</style>