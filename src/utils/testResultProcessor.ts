type Answer = "Not at all" | "Several days" | "More than half the days" | "Nearly every day";
type ScoreMapping = {
  [key in Answer]: number;
}

export const calculateTotalScore = (answers: Answer[]) => {
  const scoreMapping: ScoreMapping = {
    "Not at all": 0,
    "Several days": 1,
    "More than half the days": 2,
    "Nearly every day": 3,
  };

  return answers.reduce((acc, answer) => {
    return acc + scoreMapping[answer];
  }, 0);
};

export const interpretResults = (totalScore: number) => {
  let testResult: string;

  switch (true) {
    case totalScore <= 5:
      testResult = "No or minimal depression";
      break;
    case totalScore <= 10:
      testResult = "Mild depression";
      break;
    case totalScore <= 15:
      testResult = "Moderate depression";
      break;
    case totalScore <= 20:
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
    "No or minimal depression": "Congratulations, you are doing exceptionally well, and there are no or minimal signs of depression in your life. Your mental well-being is on the right track, but remember to continue taking proactive steps to maintain your mental health. Stay connected with friends and family, engage in activities you enjoy, and practice self-care regularly.",
    "Mild depression": "You might be experiencing some mild signs of depression. It's important to acknowledge your feelings and take proactive steps to care for yourself. Consider confiding in a trusted friend or family member about what you're going through. Additionally, engaging in activities that bring you joy and seeking professional support, such as therapy or counseling, can be beneficial during this time.",
    "Moderate depression": "You might be facing moderate signs of depression. It's crucial to prioritize your mental health at this point. Reach out to a mental health professional or therapist who can provide guidance and support tailored to your needs. Additionally, lean on your support network, engage in relaxation techniques, and consider practicing mindfulness to help manage your symptoms.",
    "Severe depression": "You have reached a severe level of depression. It's essential to seek immediate professional help from a mental health expert. Depression of this magnitude can have a significant impact on your life, but with the right treatment and support, there is hope for improvement. Reach out to a therapist, psychiatrist, or counselor as soon as possible to start your journey toward recovery.",
    "Extremely severe depression": "You might be grappling with extremely severe signs of depression. It's crucial to recognize the gravity of your situation and take immediate action. Seek emergency mental health services or contact a mental health crisis helpline. Remember that you don't have to face this alone; there are professionals and resources available to support you on the path to recovery. Reach out for help without delay."
  };

  return testResultDescriptions[testResult];
}