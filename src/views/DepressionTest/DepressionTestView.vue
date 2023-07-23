<template>
  <div>
    <h1>Depression Test</h1>
    <div v-for="(question, index) in questions" :key="index">
      <p>{{ question.text }}</p>
      <v-radio-group v-model="answers[index]">
        <v-radio v-for="(option, optionIndex) in question.options" :key="optionIndex" :label="option" :value="option" />
      </v-radio-group>
    </div>
    <v-btn @click="submitTest" color="primary">Submit Test</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          text: 'Question 1: Do you often feel sad or hopeless?',
          options: ['Yes', 'No'],
        },
        // Add more questions and options as needed
      ],
      answers: Array(5).fill(''),
    };
  },
  methods: {
    submitTest() {
      // Process the test results
      console.log(this.answers);
    },
  },
};
</script>

<style>

</style>
