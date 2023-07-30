<template>
  <div>
    <h1>Your result: {{ $route.query.result }}</h1>
    <h2>{{ depressionResults }}</h2>
  </div>
</template>


<script>
import { getTestResultDescription } from "@/utils/testResultProcessor";

export default {
  data() {
    return {
      depressionResults: "",
    };
  },
  created() {
    this.depressionResults = getTestResultDescription(this.$route.query.result);
  },
};
</script>