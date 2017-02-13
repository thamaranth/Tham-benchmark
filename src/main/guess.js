const readline = require('readline');

const numberToGuess =  Math.floor(Math.random() * 100)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('A random number has just been generarted, what is your guess? ',
 (answer) => {
   var answerNum = parseInt(answer)

  if (answerNum === numberToGuess) {
    console.log('Whoo, you right as hell')
  } else if (answerNum > numberToGuess) {
    console.log('Guess too high, are you?')
  } else if (answerNum < numberToGuess) {
    console.log('Guess too low, we are sorry')
  } else if (answer === 'exit') {
    rl.close()
  } else {
    console.log("Wrong AF, don't do drugs")
  }

  rl.close();
});
