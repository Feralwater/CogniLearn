<template>
  <div>
    <h1>Your result: {{ $route.query.result }}</h1>
    <h2>{{ depressionResults }}</h2>

    <v-btn
      class="downloadBtn"
      color="primary"
    >
      Download PDF
    </v-btn>
  </div>
</template>


<script>
import { getTestResultDescription } from "@/utils/testResultProcessor";

export default {
  data() {
    return {
      depressionResults: ""
    };
  },
  created() {
    this.depressionResults = getTestResultDescription(this.$route.query.result);
  }
};
</script>

<style scoped>
.downloadBtn {
  margin: 20px 0 0 20px;
  cursor: pointer;
}
</style>
