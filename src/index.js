import readlineSync from 'readline-sync';


export default (goalMessage, question, expectedAnswer) => {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(goalMessage);

    let questionNumber = 1;
    let isAnswerCorrect = true;

    while (isAnswerCorrect && questionNumber <= 3) {
        const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
        if (userAnswer === expectedAnswer) {
            console.log('Correct!');
            questionNumber++;
        } else {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.\nLet's try again, ${name}!`);
            isAnswerCorrect = false;
        }
    }

    if (isAnswerCorrect) {
        console.log(`Congratulations, ${name}!`);
    }
}