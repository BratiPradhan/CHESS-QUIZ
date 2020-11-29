
// CREATED BY - BRATI PRADHAN
// ASSIGNMENT 2 - NEOG CAMP - TANAY PRATAP SIR

var readlineSync = require('readline-sync');
var chalk = require('chalk');

// initial value 
var score = 0;

// level one questions and answer
var levelOneQuestions = [
  {
    "question": chalk.black.bgWhite.bold("Which among these is a CHESS GRANDMASTER? "),
    "options": [chalk.bgMagenta("Viswanathan Anand"), chalk.bgMagenta("Elon Musk"), chalk.bgMagenta("Bill Gates"), chalk.bgMagenta("Pranab Mukherjee")],
    "answer": chalk.bgMagenta("Viswanathan Anand")
  },
  {
    "question": chalk.black.bgWhite.bold("What is the objective of chess? "),
    "options": [chalk.bgMagenta("Capture the queen"), chalk.bgMagenta("Capture all pieces"), chalk.bgMagenta("Checkmate the king"), chalk.bgMagenta("Checkmate the queen")],
    "answer": chalk.bgMagenta("Checkmate the king")
  },
  {
    "question": chalk.black.bgWhite.bold("Which chess piece moves in L shape "),
    "options": [chalk.bgMagenta("Bishop"), chalk.bgMagenta("Knight"), chalk.bgMagenta("Rook"), chalk.bgMagenta("Pawn")],
    "answer": chalk.bgMagenta("Knight")
  }
]

// level one game
function levelOne() {
  console.log(chalk.black.bgRed.bold('----------WELCOME TO LEVEL ONE----------'));

  // level 1 loop 
  for(var i=0; i<levelOneQuestions.length; i++) {
  var index = readlineSync.keyInSelect(levelOneQuestions[i].options, levelOneQuestions[i].question, {cancel: false});
  if(levelOneQuestions[i].options[index] === levelOneQuestions[i].answer) {
    score = score + 1;
    console.log(chalk.black.bgYellowBright.bold('YOU ARE RIGHT!!!'));
  } else {
    console.log(chalk.black.bgYellowBright.bold('CORRECT ANSWER IS: ') + levelOneQuestions[i].answer)
  }
  console.log(chalk.green.bold('YOUR CURRENT SCORE: ' + score));
}
}



// level two questions and answer
var levelTwoQuestions = [
  {
    "question": chalk.black.bgWhite.bold("Who is the present team India Captain? "),
    "options": [chalk.bgMagenta("Viswanathan Anand"), chalk.bgMagenta("Vidit Gujrathi"), chalk.bgMagenta("Sagar Shah"), chalk.bgMagenta("Tania Sachdev")],
    "answer": chalk.bgMagenta("Vidit Gujrathi")
  },
  {
    "question": chalk.black.bgWhite.bold("Who is the first woman to be the youngest GRANDMASTER? "),
    "options": [chalk.bgMagenta("Koneru Humpy"), chalk.bgMagenta("Judit Polgar"), chalk.bgMagenta("Anna Rudolf"), chalk.bgMagenta("Soumya Swaminathan")],
    "answer": chalk.bgMagenta("Judit Polgar")
  },
  {
    "question": chalk.black.bgWhite.bold("Which among the following will end the chess game with a draw? "),
    "options": [chalk.bgMagenta("Pawn Promotion"), chalk.bgMagenta("Castling"), chalk.bgMagenta("Stalemate"), chalk.bgMagenta("En Passant")],
    "answer": chalk.bgMagenta("Stalemate")
  }
]

// level two game
function levelTwo() {
  console.clear();
  console.log(chalk.black.bgYellowBright.bold('----------WELCOME TO LEVEL TWO----------'));

  // level 2 loop 
  for(var i=0; i<levelTwoQuestions.length; i++) {
  var index = readlineSync.keyInSelect(levelTwoQuestions[i].options, levelTwoQuestions[i].question, {cancel: false});
  if(levelTwoQuestions[i].options[index] === levelTwoQuestions[i].answer) {
    score = score + 1;
    console.log(chalk.black.bgYellowBright.bold('YOU ARE RIGHT!!!'));
  } else {
    console.log(chalk.black.bgYellowBright.bold('CORRECT ANSWER IS: ') + levelTwoQuestions[i].answer)
  }
  console.log(chalk.green.bold('YOUR CURRENT SCORE: ' + score));
}
}


// level three questions and answer
var levelThreeQuestions = [
  {
    "question": chalk.black.bgWhite.bold("Which chess piece stays in the same colored square for the entire game? "),
    "options": [chalk.bgMagenta("Bishop"), chalk.bgMagenta("Knight"), chalk.bgMagenta("Queen"), chalk.bgMagenta("King")],
    "answer": chalk.bgMagenta("Bishop")
  },
  {
    "question": chalk.black.bgWhite.bold("Name the special move which involves the King and the Rook in one turn? "),
    "options": [chalk.bgMagenta("En Passant"), chalk.bgMagenta("Pawn Promotion"), chalk.bgMagenta("Stalemate"), chalk.bgMagenta("Castling")],
    "answer": chalk.bgMagenta("Castling")
  },
  {
    "question": chalk.black.bgWhite.bold("Which chess piece has the relative value of 5 points "),
    "options": [chalk.bgMagenta("Bishop"), chalk.bgMagenta("Queen"), chalk.bgMagenta("Knight"), chalk.bgMagenta("Rook")],
    "answer": chalk.bgMagenta("Rook")
  }
]

// level three game
function levelThree() {
  console.clear();
  console.log(chalk.black.bgBlueBright.bold('----------WELCOME TO LEVEL THREE----------'));

  // level 3 loop 
  for(var i=0; i<levelThreeQuestions.length; i++) {
  var index = readlineSync.keyInSelect(levelThreeQuestions[i].options, levelThreeQuestions[i].question, {cancel: false});
  if(levelThreeQuestions[i].options[index] === levelThreeQuestions[i].answer) {
    score = score + 1;
    console.log(chalk.black.bgYellowBright.bold('YOU ARE RIGHT!!!'));
  } else {
    console.log(chalk.black.bgYellowBright.bold('CORRECT ANSWER IS: ') + levelThreeQuestions[i].answer)
  }
  console.log(chalk.green.bold('YOUR CURRENT SCORE: ' + score));
}
}


// Play game 
function play() {
  console.clear();
  console.log(chalk.black.bgMagentaBright('--------RULES----------'))
  console.log(chalk.black.bgWhiteBright(`YOU JUST HAVE TO TYPE AMONG 1,2,3 OR 4. YOU DON'T HAVE TO PRESS ENTER`))
  console.log(chalk.black.bgMagentaBright('-----------------------'))
  console.log(chalk.black.bgCyanBright.bold(`------ALRIGHT LET'S GET STARTED!!!------`));

  levelOne();
  console.clear()

  if(score === levelOneQuestions.length) {
    levelTwo();
    console.clear()
  }

  if(score === (levelOneQuestions.length + levelTwoQuestions.length) ) {
    levelThree();
    console.clear()
  }

  if(score === (levelOneQuestions.length + levelTwoQuestions.length + levelThreeQuestions.length )) {
    console.log(chalk.black.bgCyanBright('WOW, YOU SCORED THE MAXIMUM, KEEP PLAYING THE GAME!!!! '))
  } else {
    console.log(chalk.black.bgRedBright.bold('KEEP PLAYING, KEEP IMPROVING'))
    console.log(chalk.black.bgCyanBright.bold('YOU EITHER WIN OR YOU LEARN!'))
  }
  exitGame();
}

// Exit game
function exitGame() {
  console.log(chalk.green.bold('YOUR FINAL SCORE: ' + score))
  console.log(chalk.black.bgMagentaBright.bold('----------THANK YOU FOR PLAYING THE CHESS QUIZ-----------'));
  console.log(chalk.black.bgYellowBright.bold('---------THIS QUIZ IS CREATED BY: BRATI PRADHAN----------'));
  console.log(chalk.black.bgMagentaBright.bold('-THANK YOU TANAY PRATAP SIR FOR BEING THE AWESOME MENTOR-'));
  score = 0;

  var playAgain = readlineSync.keyInYN(chalk.black.bgRed.bold('BACK TO MAIN MENU? '));
  if(playAgain === true ) {
    intro();
  }
}





// Intro 
function intro() {
  console.clear();
  var userName = readlineSync.question(chalk.bgRedBright("What is your name? "));
  console.clear();
  console.log(chalk.bgBlue('---------Hello ' +userName + '---------'));
  console.log(chalk.black.bgYellow.bold('--WELCOME TO THE CHESS QUIZ--'));

  var choose = [chalk.bgCyan("PLAY GAME"), chalk.bgCyan("EXIT GAME")];
  var index = readlineSync.keyInSelect(choose, chalk.magentaBright.bold(`Press 1 or 2, you don't need to press enter `), {cancel: false});

  if(index === 0) {
    play();
  } else {
    console.clear()
    exitGame()
  }

}
intro();


