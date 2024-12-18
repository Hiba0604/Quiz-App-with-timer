/*const questions = [
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter"],
      answer: "Jupiter"
    },
    {
      question: "What is the capital city of France?",
      options: ["Paris", "London", "Rome"],
      answer: "Paris"
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7"],
      answer: "7"
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
      answer: "William Shakespeare"
    },
    {
      question: "What is the process by which plants make their own food called?",
      options: ["Respiration", "Photosynthesis", "Digestion"],
      answer: "Photosynthesis"
    },
    {
      question: "Which animal is known as the 'King of the Jungle'?",
      options: ["Tiger", "Elephant", "Lion"],
      answer: "Lion"
    },
    {
      question: "What is the boiling point of water in degrees Celsius?",
      options: ["90°C", "100°C", "120°C"],
      answer: "100°C"
    },
    {
      question: "How many days are there in a leap year?",
      options: ["364", "365", "366"],
      answer: "366"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
      answer: "Mount Everest"
    }
  ];
  
  let currentQuestion = 0;
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.getElementsByClassName("option");
  
    questionElement.textContent = questions[currentQuestion].question;
    options[0].textContent = questions[currentQuestion].options[0];
    options[1].textContent = questions[currentQuestion].options[1];
    options[2].textContent = questions[currentQuestion].options[2];
  }
  
  function checkAnswer(selectedOption) {
    const answer = questions[currentQuestion].answer;
    if (selectedOption.textContent === answer) {
      alert("Correct!");
    } else {
      alert("Wrong answer!");
    }
    
    currentQuestion = (currentQuestion + 1) % questions.length;
    loadQuestion();
  }
  
  document.addEventListener("DOMContentLoaded", loadQuestion);*/


  const questions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter"],
        answer: "Jupiter"
    },
    {
        question: "What is the capital city of France?",
        options: ["Paris", "London", "Rome"],
        answer: "Paris"
    },
    {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7"],
        answer: "7"
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain"],
        answer: "William Shakespeare"
    },
    {
        question: "What is the process by which plants make their own food called?",
        options: ["Respiration", "Photosynthesis", "Digestion"],
        answer: "Photosynthesis"
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        options: ["Tiger", "Elephant", "Lion"],
        answer: "Lion"
    },
    {
        question: "What is the boiling point of water in degrees Celsius?",
        options: ["90°C", "100°C", "120°C"],
        answer: "100°C"
    },
    {
        question: "How many days are there in a leap year?",
        options: ["364", "365", "366"],
        answer: "366"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
        answer: "Leonardo da Vinci"
    },
    {
        question: "What is the tallest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
        answer: "Mount Everest"
    }
];

let currentQuestion = 0;
let timer; // To track the countdown
let timeRemaining = 30; // 30 seconds for each question
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const options = document.getElementsByClassName("option");
    const timerElement = document.getElementById("timer");

    // Reset timer
    clearInterval(timer);
    timeRemaining = 30;

    // Display the question and options
    questionElement.textContent = questions[currentQuestion].question;
    options[0].textContent = questions[currentQuestion].options[0];
    options[1].textContent = questions[currentQuestion].options[1];
    options[2].textContent = questions[currentQuestion].options[2];

    // Update and start the countdown
    timerElement.textContent = `Time Remaining: ${timeRemaining}s`;
    timer = setInterval(() => {
        timeRemaining--;
        timerElement.textContent = `Time Remaining: ${timeRemaining}s`;
        if (timeRemaining <= 0) {
            clearInterval(timer);
            alert("Time's up! Moving to the next question.");
            nextQuestion();
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    const answer = questions[currentQuestion].answer;
    if (selectedOption.textContent === answer) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong answer!");
    }
    nextQuestion();
}

function nextQuestion() {
    currentQuestion = (currentQuestion + 1) % questions.length; // Cycle to next question
    loadQuestion();
}

document.addEventListener("DOMContentLoaded", loadQuestion);
