<template>
  <div class="quiz-container">
    <h1 class="quiz-header">Mood Assessment Quiz</h1>
    <v-card density="default"
            width="50vw"
    >
      <v-card-title class="question-title">{{ currentQuestion.question }}</v-card-title>
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
        <button @click="prevQuestion" :disabled="currentQuestionIndex === 0" class="prev-button">Previous</button>
        <button @click="nextQuestion" :disabled="currentQuestionIndex === questions.length - 1" class="next-button">
          Next
        </button>
      </v-card-actions>
    </v-card>

    <v-progress-linear color="primary" :model-value="progress"></v-progress-linear>

    <v-btn @click="submitTest" color="primary" class="submit-button"
           v-if="currentQuestionIndex === questions.length - 1">Submit Test
    </v-btn>
  </div>
</template>

<script>
import { depressionTestQuestions } from "@/data/depressionQuestions";

export default {
  data() {
    return {
      questions: depressionTestQuestions,
      currentQuestionIndex: 0,
      answers: Array(depressionTestQuestions.length).fill("")
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    progress() {
      return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    },
    currentAnswer() {
      return this.answers[this.currentQuestionIndex];
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    },
    prevQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },
    submitTest() {
      // Process the test results
      console.log(this.answers);
    }
  }
};

</script>

<style>
@import "./DepressionTestView.css";
</style>
