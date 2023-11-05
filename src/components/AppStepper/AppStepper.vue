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
  <div class="stepper">
    <div v-for="(step, index) in props.steps" :key="index" class="step" :class="{ 'active': index === props.currentStep }">
      {{ step.title }}
    </div>
  </div>
</template>

<style scoped>
.stepper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f0f0f0;
  padding: 10px;
}

.step {
  flex: 1;
  text-align: center;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.step.active {
  background-color: #007bff;
  color: #fff;
}
</style>