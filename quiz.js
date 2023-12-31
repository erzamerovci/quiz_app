const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText=document.getElementById("questionCounter");
const scoreText=document.getElementById("score");
let currentQuestion = {};
let acceptAnswers = false;
let score = 0;

let questionCounter = 0;
let availableQuestion = {};

let questions = [
  {
    question: "One loop inside the body of another loop is called:",
    choice1: "Loop in loop",
    choice2: "Nested loop",
    choice3: "Double loops",
    choice4: "Loop inside loop",
    answer: 2,
  },
  {
    question:
      "Which is the command do we use to output data in the screen in C++",
    choice1: "cin<<",
    choice2: "cout>>",
    choice3: "cout<<",
    choice4: "cin>>",
    answer: 3,
  },
  {
    question: "Which is the wrong statement for comments in programming? ",
    choice1:
      "Comments are very important when someone looks our code and tries to understand ",
    choice2: "Multiple line comments are /*Comment*/",
    choice3: "One line comments are //Comment",
    choice4: "Entering comments is a useless task,it will not help in any way ",
    answer: 4,
  },

  {
    question: "What is INT data type used for? ",
    choice1: "Text",
    choice2: "Numbers",
    choice3: "True",
    choice4: "Null ",
    answer: 2,
  },
  {
    question: "What is String data type used for? ",
    choice1: "Text",
    choice2: "Numbers",
    choice3: "True",
    choice4: "Null ",
    answer: 1,
  },

  {
    question:
      "What is called a memory location that holds a single letter or number? ",
    choice1: "Int",
    choice2: "Double",
    choice3: "Char",
    choice4: "Word ",
    answer: 3,
  },

  {
    question: "What is a syntax error? ",
    choice1: "An error due to user error ",
    choice2: "An error caused by language rules being broken",
    choice3: "An error you will never find",
    choice4:
      "An error you find at the end when the program gives out a wrong value due to logic error ",
    answer: 2,
  },

  {
    question:
      "Which is the loop that executes the block of code one time without looking the condition ? ",
    choice1: "Do-while ",
    choice2: "Foreach",
    choice3: "For",
    choice4: "While ",
    answer: 1,
  },
  {
    question: "Which data structure uses LIFO? ",
    choice1: "Array ",
    choice2: "Int",
    choice3: "Stack",
    choice4: "Queues ",
    answer: 3,
  },
  {
    question: "What does this mean:x!=y? ",
    choice1: "x is assigned y ",
    choice2: "y is added to a",
    choice3: "x and y aren't equal",
    choice4: "x and y are equal",
    answer: 3,
  },
];

const CORRECT_BONUS = 10;
const MAX_QUESTION = 10;

startGame = () => {
  questionCounter = 0;
  availableQuestion = [...questions];
  console.log(availableQuestion);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestion.length == 0 || questionCounter >= MAX_QUESTION) {
    return window.location.assign("/end_game.html");
  }
  questionCounter++;

  questionCounterText.innerText=questionCounter+ "/" + MAX_QUESTION;

  const questionIndex = Math.floor(Math.random() * availableQuestion.length);
  currentQuestion = availableQuestion[questionIndex];
  question.innerText = currentQuestion.question;
  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestion.splice(questionIndex, 1);

  acceptAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptAnswers) return;

    acceptAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

      if(classToApply=='correct'){
        incrementScore(CORRECT_BONUS);
      }
    selectedChoice.parentElement.classList.add(classToApply);
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 200);
  });
});

incrementScore = num => {
    score +=num;
    scoreText.innerText=score;
}
startGame();
