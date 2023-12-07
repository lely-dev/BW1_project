const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

// VARIABLES DEFINITION

let count = 0;
let paragraphQ;
let divContent = document.getElementById("content");
let wrongAnswers = [];
let answerInput;
let labelInput;
let stepButton;
let score = 0;
let dataAnswer;
let correctAnswer;
// -----------------------------------------------------


let end = () => {
  divContent.innerHTML = "";
  paragraphQ = document.createElement("p");
  paragraphQ.innerText = "End of the test! Your score is " + score + " points!!!";
  divContent.appendChild(paragraphQ);
}


let verifyAnswer = () => {

  dataAnswer = document.getElementsByTagName("input");

  for (a = 0; a < dataAnswer.length; a++) {
    console.log("verify");

    testInput = dataAnswer[a].checked;
    console.log("testInput = " + testInput);
    testInputValue = dataAnswer[a].value;
    console.log("testInputValue = " + testInputValue);
    if (testInput === true && testInputValue == "true") {
      console.log(true);
      console.log("incremento Score");
      score++;
      console.log(score);
    }
  }
}



let createPageElements = () => {

  for (i = 0; i < wrongAnswers.length; i++) {
    answerInput = document.createElement("input");
    answerInput.setAttribute("type", "radio");
    answerInput.setAttribute("name", "answer");
    answerInput.setAttribute("id", "answer" + i);
    answerInput.setAttribute("value", false);
    labelInput = document.createElement("label");
    labelInput.setAttribute("for", "answer" + i);
    labelInput.value = wrongAnswers[i];
    labelInput.innerText = wrongAnswers[i];
    toDown = document.createElement("br");
    divContent.appendChild(answerInput);
    divContent.appendChild(labelInput);
    divContent.appendChild(toDown);

  }
  answerInput = document.createElement("input");
  answerInput.setAttribute("type", "radio");
  answerInput.setAttribute("name", "answer");
  answerInput.setAttribute("id", "answer" + (wrongAnswers.length));
  answerInput.setAttribute("value", true);
  labelInput = document.createElement("label");
  labelInput.setAttribute("for", "answer" + (wrongAnswers.length));
  labelInput.value = correctAnswer;
  labelInput.innerText = correctAnswer;
  toDown = document.createElement("br");
  divContent.appendChild(answerInput);
  divContent.appendChild(labelInput);
  divContent.appendChild(toDown);
}

let timeDisplay = document.getElementById("timer_count");

let branchmark = () => {

  divContent.innerHTML = "";
  paragraphQ = document.createElement("p");
  paragraphQ.innerText = questions[count].question;
  divContent.appendChild(paragraphQ);
  wrongAnswers = questions[count].incorrect_answers;
  correctAnswer = questions[count].correct_answer;

  createPageElements();

  stepButton = document.createElement("button");
  stepButton.innerText = "Continue";
  divContent.appendChild(stepButton);

  count++

  if (count === questions.length) {
    count = 0;
    end();
  }

  stepButton.addEventListener("click", verifyAnswer);
  stepButton.addEventListener("click", branchmark);


let secondClock = 60;

const timer = setInterval(function() {

  secondClock--;
  console.log(secondClock);

  if (secondClock === 0) {
    clearInterval(timer);
    console.log("Time's up!");

  }


}, 1000);

}

// branchmark();



