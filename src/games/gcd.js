import playGame from '../index.js';

const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

const generateQuestionAndAnswer = () => {
  const randomNumber1 = Math.floor(Math.random() * 50);
  const randomNumber2 = Math.floor(Math.random() * 50);
  const expectedAnswer = gcd(randomNumber1, randomNumber2);
  return [`${randomNumber1} ${randomNumber2}`, expectedAnswer.toString()];
};

export default () => playGame(
  'Find the greatest common divisor of given numbers.',
  generateQuestionAndAnswer,
);
