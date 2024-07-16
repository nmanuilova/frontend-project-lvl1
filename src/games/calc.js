import playGame from '../index.js';

const operations = ['*', '+', '-'];

const generateQuestionAndAnswer = () => {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const operation = operations[Math.floor(Math.random() * operations.length)];
        
    const expectedAnswer = operation === '*' 
        ? randomNumber1 * randomNumber2 
        : (operation === '+' 
            ? randomNumber1 + randomNumber2 
            : randomNumber1 - randomNumber2);

    return [`${randomNumber1} ${operation} ${randomNumber2}`, expectedAnswer.toString()];
}

export default () => playGame(
    'What is the result of the expression?',
    generateQuestionAndAnswer
);
