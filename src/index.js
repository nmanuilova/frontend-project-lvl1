import readlineSync from 'readline-sync';

const maxNumberOfRounds = 3;

export default (goalMessage, generateQuestionAndAnswerCallback) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(goalMessage);

  let questionNumber = 1;
  let isAnswerCorrect = true;

  while (isAnswerCorrect && questionNumber <= maxNumberOfRounds) {
    const [question, expectedAnswer] = generateQuestionAndAnswerCallback();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    if (userAnswer === expectedAnswer) {
      console.log('Correct!');
      questionNumber += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
      isAnswerCorrect = false;
    }
  }

  if (isAnswerCorrect) {
    console.log(`Congratulations, ${name}!`);
  }
};
