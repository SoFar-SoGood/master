const correctAnswer = 2;
const incorrectAnswer = [2, 3, 4, 7, 10];

const randomNumber = Math.floor(Math.random() * incorrectAnswer.length);

incorrectAnswer.splice(randomNumber, 0, correctAnswer);

console.log(incorrectAnswer);
