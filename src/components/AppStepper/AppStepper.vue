<script setup lang="ts">
import type { PropType } from "vue";

const props = defineProps({
  steps: {
    type: Array as PropType<{ title: string }[]>,
    required: true
  },
  currentStep: {
    type: Number,
    required: true
  }
});
</script>

<template>
  <div class="stepper-wrapper">
    <div class="stepper-item" v-for="(step, index) in props.steps" :key="index" :class="{ 'completed': index <= props.currentStep }">
      <div class="step-counter">
        {{ index + 1 }}
      </div>
      <div class="step-name">{{ step.title }}</div>
    </div>
  </div>
</template>

<style scoped>
@import "./AppStepper.css";
</style>
