<template>
  <v-container class="test">
    <app-stepper :steps="steps" :current-step="currentStep" />

    <div class="quiz-container">
      <v-card density="default" class="quiz-card">
        <v-card-title>
          <div class="question-number">Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}</div>
          <div class="question"> {{ currentQuestion.question }}</div>
        </v-card-title>
        <v-card-text>
          <div class="radio-buttons">
            <label
              v-for="(option, optionIndex) in currentQuestion.options"
              :key="optionIndex"
              :class="['radio-card', { 'radio-card-selected': currentAnswer === option }]"
            >
              <input
                type="radio"
                :name="'question-' + currentQuestionIndex"
                v-model="answers[currentQuestionIndex]"
                :value="option"
              />
              {{ option }}
            </label>
          </div>
        </v-card-text>
        <v-card-actions>
          <div class="quiz-actions">
            <v-btn
              @click="prevQuestion"
              :disabled="currentQuestionIndex === 0"
              color="primary"
            >
              Previous
            </v-btn>
            <v-btn
              @click="nextQuestion"
              :disabled="currentQuestionIndex === questions.length - 1 || !currentAnswer"
              color="primary"
            >
              Next
            </v-btn>
          </div>
        </v-card-actions>
      </v-card>

      <v-progress-linear color="primary" :model-value="progress" />

      <div class="quiz-actions">
        <v-btn
          @click="submitTest" color="primary" class="submit-button"
          v-if="currentQuestionIndex === questions.length - 1"
          :disabled="!currentAnswer"
        >
          Submit Test
        </v-btn>
      </div>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { depressionTestQuestions } from "@/data/depressionQuestions";
import { getTestResult } from "@/utils/testResultProcessor";
import { Routes } from "@/router/routes";
import AppStepper from "@/components/AppStepper/AppStepper.vue";
import router from "@/router";

const steps = [
  { title: "Take Test" },
  { title: "Fill Details" },
  { title: "Get Results" }
];
const currentStep = ref(0);
const questions = ref(depressionTestQuestions);
const currentQuestionIndex = ref(0);
const answers = ref(Array(depressionTestQuestions.length));

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
const progress = computed(() => ((currentQuestionIndex.value + 1) / questions.value.length) * 100);
const currentAnswer = computed(() => answers.value[currentQuestionIndex.value]);

const nextQuestion = () => {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  }
};

const prevQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
  }
};

const submitTest = () => {
  const result = getTestResult(answers.value);
  router.push({
    path: Routes.Results,
    query: { result }
  });
};
</script>

<style>
@import "./DepressionTestView.css";
</style>
