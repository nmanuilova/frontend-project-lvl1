import playGame from '../index.js';

const progressionLength = 7;

const generateProgression = () => {
  const step = Math.floor(Math.random() * 10) + 1;
  let previousNumber = Math.floor(Math.random() * 10);
  const progression = [`${previousNumber}`];

  for (let i = 1; i < progressionLength; i += 1) {
    previousNumber += step;
    progression.push(`${previousNumber}`);
  }

  return progression;
};

const generateQuestionAndAnswer = () => {
  const progression = generateProgression();
  const indexOfItemWithPoint = Math.floor(Math.random() * (progressionLength - 1));
  const expectedAnswer = progression[indexOfItemWithPoint];
  progression[indexOfItemWithPoint] = '..';

  return [progression.join(' '), expectedAnswer];
};

export default () => playGame(
  'What number is missing in the progression?',
  generateQuestionAndAnswer,
);
