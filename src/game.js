import readlineSync from 'readline-sync';


const playGame = () => {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let questionNumber = 1;
    let isAnswerCorrect = true;
    while (isAnswerCorrect && questionNumber <= 3) {
        const randomNumber = Math.floor(Math.random() * 10);
        const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
        const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
        if (userAnswer === correctAnswer) {
            console.log('Correct!');
            questionNumber++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`);
            isAnswerCorrect = false;
        }
    }

    if (isAnswerCorrect) {
        console.log(`Congratulations, ${name}!`);
    }
}

export default playGame;