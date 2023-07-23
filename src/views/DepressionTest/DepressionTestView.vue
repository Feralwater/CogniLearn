<template>
  <div>
    <h1>Mood Assessment Quiz</h1>
    <v-card class="question-card" elevation="2" v-if="currentQuestionIndex < questions.length">
      <v-card-text>
        <p>{{ currentQuestion.question }}</p>
        <v-radio-group v-model="currentAnswer">
          <v-radio
            v-for="(option, optionIndex) in currentQuestion.options"
            :key="optionIndex"
            :label="option"
            :value="option"
          />
        </v-radio-group>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="prevQuestion" :disabled="currentQuestionIndex === 0">Previous</v-btn>
        <v-btn @click="nextQuestion" :disabled="currentQuestionIndex === questions.length - 1">Next</v-btn>
      </v-card-actions>
    </v-card>

    <v-progress-linear :value="progress" class="progress-bar" v-if="questions.length > 1" />

    <v-btn @click="submitTest" v-else color="primary">Submit Test</v-btn>
  </div>
</template>

<script>
import { depressionTestQuestions } from "@/data/depressionQuestions";

export default {
  data() {
    return {
      questions: depressionTestQuestions,
      currentQuestionIndex: 0,
      currentAnswer: '',
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    progress() {
      return ((this.currentQuestionIndex + 1) / this.questions.length) * 100;
    },
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
    },
  },
};
</script>

<style>
.question-card {
  max-width: 500px;
  margin: 0 auto;
}

.progress-bar {
  width: 80%;
  margin: 20px auto;
}
</style>
