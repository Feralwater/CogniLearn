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
    <div v-if="currentStep === 1">
      <h1 class="heading">Amazing! Now please fill in your details</h1>
      <p class="quiz-description">
        Note: we do not store any of your personal information, this is just for your doctor. If you will not print the
        results, the data will not be stored anywhere.
      </p>
      <patient-data-form :on-submit="onSubmitData" />
    </div>

    <div v-if="currentStep === 2">
      <h1 class="heading">Your results</h1>
      <p class="quiz-description">
        {{ testResult }}
      </p>
      <p> {{ patient.firstName }}</p>
      <p> {{ patient.lastName }}</p>
      <p> {{ patient.gender }}</p>
      <p> {{ patient.age }}</p>
      <p> {{ patient.hasFamilyDepression }}</p>
      <p> {{ patient.hoursOfSleep }}</p>
      <p> {{ patient.hasMedicalTreatment }}</p>
      <p> {{ patient.address }}</p>
      <p> {{ patient.firstName }}</p>
      <p> {{ patient.badHabits }}</p>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { depressionTestQuestions } from "@/data/depressionQuestions";
import { getTestResult } from "@/utils/testResultProcessor";
import AppStepper from "@/components/AppStepper/AppStepper.vue";
import PatientDataForm from "@/components/PatientDataForm/PatientDataForm.vue";
import { usePatientStore } from "@/stores/patient";

const patient = usePatientStore();
const steps = [
  { title: "Take a Test" },
  { title: "Fill Details" },
  { title: "Get the Results" }
];

const testResult = ref("");
const currentStep = ref(testResult.value ? 1 : 0);
const questions = ref(depressionTestQuestions);
const currentQuestionIndex = ref(0);
const answers = ref(Array(depressionTestQuestions.length));

const currentQuestion = computed(() => questions.value[currentQuestionIndex.value]);
const progress = computed(() => ((currentQuestionIndex.value + 1) / questions.value.length) * 100);
const currentAnswer = computed(() => answers.value[currentQuestionIndex.value]);

const onSubmitData = () => currentStep.value = 2;

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
  currentStep.value = 1;
};
</script>

<style>
@import "./DepressionTestView.css";
</style>
