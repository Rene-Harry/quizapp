const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";
  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.innerHTML =
    "Your score is " + score + " out of " + questions.length;
  nextButton.innerHTML = "Restart";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

const questions = [
  {
    question: "What is the main characteristic of sickle cell anemia?",
    answers: [
      { text: "Abnormal red blood cell shape", correct: true },
      { text: "Weakened immune system", correct: false },
      { text: "Low hemoglobin levels", correct: false },
      { text: "Lack of oxygen in the blood", correct: false },
    ],
  },
  {
    question: "Sickle cell anemia is inherited from:",
    answers: [
      { text: "Only the mother", correct: false },
      { text: "Only the father", correct: false },
      { text: "Both parents carrying the trait", correct: true },
      { text: "A random mutation", correct: false },
    ],
  },
  {
    question: "Which of these is NOT a common symptom of sickle cell anemia?",
    answers: [
      { text: "Fatigue", correct: false },
      { text: "Shortness of breath", correct: false },
      { text: "Fever", correct: false },
      { text: "Good appetite", correct: true },
    ],
  },
  {
    question: "Painful episodes in sickle cell anemia are called:",
    answers: [
      { text: "Anemia attacks", correct: false },
      { text: "Sickle cell crises", correct: true },
      { text: "Red blood cell blockages", correct: false },
      { text: "Hemoglobin deficiencies", correct: false },
    ],
  },
  {
    question: "How can doctors diagnose sickle cell anemia?",
    answers: [
      { text: "Blood test", correct: false },
      { text: "X-ray", correct: false },
      { text: "Skin biopsy", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "What is the main treatment for sickle cell anemia?",
    answers: [
      { text: "Antibiotics", correct: false },
      { text: "Pain medication", correct: false },
      { text: "Blood transfusions", correct: false },
      { text: "There is no cure, only management", correct: true },
    ],
  },
  {
    question:
      "What complication can occur when sickle cells block blood vessels?",
    answers: [
      { text: "Organ damage", correct: true },
      { text: "Delayed growth", correct: false },
      { text: "Increased infections", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question: "How can people with sickle cell anemia stay healthy?",
    answers: [
      { text: "Eat a balanced diet", correct: false },
      { text: "Drink plenty of fluids", correct: false },
      { text: "Get regular exercise", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "Sickle cell trait carriers:",
    answers: [
      { text: "Have no symptoms", correct: true },
      { text: "Develop mild sickle cell disease over time", correct: false },
      { text: "Are at high risk for organ failure", correct: false },
      {
        text: "Cannot participate in strenuous physical activity",
        correct: false,
      },
    ],
  },
  {
    question: "Research for sickle cell anemia treatments:",
    answers: [
      { text: "Is ongoing and looking for a cure", correct: true },
      { text: "Has stopped due to lack of funding", correct: false },
      { text: "Is only focused on managing symptoms", correct: false },
      { text: "Has already found a complete cure", correct: false },
    ],
  },
];

startQuiz();
