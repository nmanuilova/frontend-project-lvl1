import playGame from '../index.js';


const isPrime = (number) => {
    if (number <= 1) 
        return false; 
    if (number == 2 || number == 3) 
        return true; 
    if (number % 2 == 0 || number % 3 == 0) 
        return false; 
    for (var i = 5; i <= Math.sqrt(number); i = i + 6) 
        if (number % i == 0 || number % (i + 2) == 0) 
            return false; 
    return true; 
}

const generateQuestionAndAnswer = () => {
    const randomNumber = Math.floor(Math.random() * 10);
  const expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [randomNumber, expectedAnswer];
}

export default () => playGame(
  'Answer "yes" if given number is prime. Otherwise answer "no".',
  generateQuestionAndAnswer,
);