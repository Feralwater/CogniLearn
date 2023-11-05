<template>
  <v-container class="test">
    <app-stepper :steps="steps" :current-step="currentStep" />

    <div class="quiz-container" v-if="currentStep === 0">
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
    <div v-if="testResult">
      {{ testResult }}
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { depressionTestQuestions } from "@/data/depressionQuestions";
import { getTestResult } from "@/utils/testResultProcessor";
import AppStepper from "@/components/AppStepper/AppStepper.vue";

const steps = [
  { title: "Take a Test" },
  { title: "Fill Details" },
  { title: "Get the Results" }
];

const testResult = ref("");
const questions = ref(depressionTestQuestions);
const currentQuestionIndex = ref(0);
const answers = ref(Array(depressionTestQuestions.length));

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
const progress = computed(() => ((currentQuestionIndex.value + 1) / questions.value.length) * 100);
const currentAnswer = computed(() => answers.value[currentQuestionIndex.value]);
const currentStep = computed(() => testResult.value ? 1 : 0);

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
  testResult.value = getTestResult(answers.value);
};
</script>

<style>
@import "./DepressionTestView.css";
</style>
