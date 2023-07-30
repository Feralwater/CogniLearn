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
    "Yes": 2,
  };

  return answers.reduce((acc, answer) => {
    return acc + scoreMapping[answer];
  }, 0);
};

export const interpretResults = (totalScore: number) => {
  let testResult: string;

  switch (true) {
    case totalScore <= 10:
      return testResult = "No or minimal depression";
    case totalScore <= 20:
      return testResult = "Mild depression";
    case totalScore <= 30:
      return testResult = "Moderate depression";
    case totalScore <= 40:
      return testResult = "Severe depression";
    default:
      return testResult = "Extremely severe depression";
  }
};

export const getTestResult = (answers: Answer[]) => {
  const totalScore = calculateTotalScore(answers);
  return interpretResults(totalScore);
}