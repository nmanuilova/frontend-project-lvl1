import playGame from '../index.js';

const operations = ['*', '+', '-'];

export default () => {
    const randomNumber1 = Math.floor(Math.random() * 10);
    const randomNumber2 = Math.floor(Math.random() * 10);
    const operation = operations[Math.floor(Math.random() * operations.length)];
        
    const expectedAnswer = operation === '*' 
        ? randomNumber1 * randomNumber2 
        : (operation === '+' 
            ? randomNumber1 + randomNumber2 
            : randomNumber1 - randomNumber2);

    playGame(
        'What is the result of the expression?',
        `${randomNumber1} ${operation} ${randomNumber2}`,
        expectedAnswer.toString()
    )
}
