type Answer = "Not at all" | "Several days" | "More than half the days" | "Nearly every day" | "No" | "Yes";
type ScoreMapping = {
  [key in Answer]: number;
}

export const calculateTotalScore = (answers: Answer[]) => {
  const scoreMapping: ScoreMapping = {
    "Not at all": 0,
    "Several days": 1,
    "More than half the days": 2,
    "Nearly every day": 3,
    "No": 0,
    "Yes": 2
  };

  return answers.reduce((acc, answer) => {
    return acc + scoreMapping[answer];
  }, 0);
};

export const interpretResults = (totalScore: number) => {
  let testResult: string;

  switch (true) {
    case totalScore <= 10:
      testResult = "No or minimal depression";
      break;
    case totalScore <= 20:
      testResult = "Mild depression";
      break;
    case totalScore <= 30:
      testResult = "Moderate depression";
      break;
    case totalScore <= 40:
      testResult = "Severe depression";
      break;
    default:
      testResult = "Extremely severe depression";
  }

  return testResult;
};

export const getTestResult = (answers: Answer[]) => {
  const totalScore = calculateTotalScore(answers);
  return interpretResults(totalScore);
};

export const getTestResultDescription = (testResult: string) => {
  const testResultDescriptions: { [key: string]: string } = {
    "No or minimal depression": "You are doing well and experiencing no or minimal signs of depression. Keep up the good work and take care of your mental health!",
    "Mild depression": "You might be experiencing mild signs of depression. It's essential to take care of yourself and seek support if needed.",
    "Moderate depression": "You might be experiencing moderate signs of depression. Consider reaching out to a mental health professional for support.",
    "Severe depression": "You have severe depression.",
    "Extremely severe depression": "You might be experiencing severe signs of depression. It's crucial to seek professional help and support as soon as possible."
  };

  return testResultDescriptions[testResult];
}