import playGame from '../index.js';

export default () => {
    const randomNumber = Math.floor(Math.random() * 10);
    const extectedAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    playGame(
        'Answer "yes" if the number is even, otherwise answer "no".',
        randomNumber,
        extectedAnswer
    );
}