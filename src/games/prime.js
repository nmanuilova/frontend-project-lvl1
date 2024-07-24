import playGame from '../index.js';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestionAndAnswer = () => {
  const randomNumber = Math.floor(Math.random() * 10);
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
};

export default () => playGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestionAndAnswer,
);
