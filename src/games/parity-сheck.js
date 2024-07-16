import playGame from '../index.js';

const generateQuestionAndAnswer = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const expectedAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
    return [randomNumber, expectedAnswer];
}

export default () => playGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    generateQuestionAndAnswer
);