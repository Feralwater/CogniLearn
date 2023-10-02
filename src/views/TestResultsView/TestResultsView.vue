<template>
  <div>
    <h1 class="result-title">
      Your result: {{ $route.query.result }}
    </h1>
    <div class="result-description">
      {{ depressionResults }}
    </div>

    <template>
      <div id="element-to-pdf">
        <h1 class="result-title">
          Your result: {{ $route.query.result }}
        </h1>
        <div class="result-description">
          {{ depressionResults }}
        </div>
      </div>
    </template>

    <v-btn
      class="downloadBtn"
      color="primary"
      @click="downloadPDF()"
    >
      Download test result as PDF
    </v-btn>
  </div>
</template>


<script>
import { getTestResultDescription } from "@/utils/testResultProcessor";
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      depressionResults: ""
    };
  },
  mounted() {
    this.depressionResults = getTestResultDescription(this.$route.query.result);
  },

  methods: {
    downloadPDF() {
      const element = document.getElementById("element-to-pdf");

      const options = {
        margin: 10,
        filename: "your test result.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
      };

      html2pdf(element, options);
    }
  }
};
</script>

<style scoped>
@import "./TestResultsView.css";
</style>
