"use strict";

const quizAppQuestions = [
  {
    question: `Name the Radiohead song with the lyrics: "Ambition makes you look pretty ugly.  Kicking squealing Gucci little piggy"`,
    answer1: `High and Dry`,
    answer2: `Paranoid Android`,
    answer3: `The Bends`,
    answer4: `No Surprises`,
    correctanswer: `Paranoid Android`,
  },
  {
    question: `Which song from 1997 included these lyrics: "You and me, we used to be together, everyday together, always"?`,
    answer1: `Semi-Charmed Life`,
    answer2: `Song 2`,
    answer3: `MMMBop`,
    answer4: `Don't Speak`,
    correctanswer: `Don't Speak`,
  },
  {
    question: `Who co-wrote "Lust for Life" with Iggy Pop?`,
    answer1: `Kate Pierson`,
    answer2: `John Cale`,
    answer3: `David Bowie`,
    answer4: `Alice Cooper`,
    correctanswer: `David Bowie`,
  },
  {
    question: `What band recorded "Novocaine for the Soul" in 1996?`,
    answer1: `The Eels`,
    answer2: `The Rentals`,
    answer3: `Cake`,
    answer4: `Blind Melon`,
    correctanswer: `The Eels`,
  },
  {
    question: `Name the Stone Temple Pilots song with these lyrics:  "And I feel that time's a wasted go.  So where you going to tomorrow"`,
    answer1: `No Memory`,
    answer2: `Creep`,
    answer3: `Dead & Bloated`,
    answer4: `Plush`,
    correctanswer: `Plush`,
  },
  {
    question: `Which song from Pearl Jam's "Ten" (1991) featured a highly controversial music video?`,
    answer1: `Black`,
    answer2: `Jeremy`,
    answer3: `Oceans`,
    answer4: `Even Flow`,
    correctanswer: `Jeremy`,
  },
  {
    question: `Which is not a single by Nine Inch Nails?`,
    answer1: `Into the Void`,
    answer2: `Wish`,
    answer3: `Closer`,
    answer4: `Miserable`,
    correctanswer: `Miserable`,
  },
  {
    question: `Which artist released a two-disc set in 1999 entitled 'To Venus and Back'?`,
    answer1: `Fiona Apple`,
    answer2: `Alanis Morissette`,
    answer3: `Tori Amos`,
    answer4: `Gwen Stefani`,
    correctanswer: `Tori Amos`,
  },
  {
    question: `Finish this Green Day lyric: "Do you have the time... to listen to me ________"?`,
    answer1: `complain`,
    answer2: `cry`,
    answer3: `scream`,
    answer4: `whine`,
    correctanswer: `whine`,
  },
  {
    question: `The song "Sweat" by Tool appears on which movie soundtrack?`,
    answer1: `Natural Born Killers`,
    answer2: `Escape from LA`,
    answer3: `Private Parts`,
    answer4: `True Romance`,
    correctanswer: `Escape from LA`,
  }, 
];

var correctAnswers;
var currentQuestionIndex;

function renderStartPage() {
  correctAnswers = 0;
  currentQuestionIndex = 0;
  $("#js-final-page").hide(300);
  $("#js-start-page").show(300);
}

function renderQuestionPage() {
  $("#js-question-number").find("h2").text(`${currentQuestionIndex + 1} of 10`);
  $("#js-current-score").find("h2").text(`Score: ${correctAnswers} of ${currentQuestionIndex}`);
   
  $("#js-question-page").show(300);
  $("#js-start-page").hide(300); 
  $("#js-right-answer").hide(300);
  $("#js-wrong-answer").hide(300);

  let currentQuizQuestion = quizAppQuestions[currentQuestionIndex];
  $("#js-question").text(`${quizAppQuestions[currentQuestionIndex].question}`);
  $("#js-answer-1").attr("value", (`${quizAppQuestions[currentQuestionIndex].answer1}`));
  $("#js-answer-2").attr("value", (`${quizAppQuestions[currentQuestionIndex].answer2}`));
  $("#js-answer-3").attr("value", (`${quizAppQuestions[currentQuestionIndex].answer3}`));
  $("#js-answer-4").attr("value", (`${quizAppQuestions[currentQuestionIndex].answer4}`));
}

function handleClicks() {
  $("#js-start-quiz").click(function () {
    renderQuestionPage();
  });

  $("#js-answer-1").click(function() {
     if (quizAppQuestions[currentQuestionIndex].answer1 === quizAppQuestions[currentQuestionIndex].correctanswer) {
      $("#js-right-answer").show(300);
      $("#js-question-page").hide(300);;
     } else {
      $("#js-wrong-answer").find("p").text(`You got it wrong! The correct answer is: ${quizAppQuestions[currentQuestionIndex].correctanswer}`);
      $("#js-wrong-answer").show(300);
      $("#js-question-page").hide(300);
    }
  });

  $("#js-answer-2").click(function() {
    if (quizAppQuestions[currentQuestionIndex].answer2 === quizAppQuestions[currentQuestionIndex].correctanswer) {
      $("#js-right-answer").show(300);
      $("#js-question-page").hide(300);
     } else {
      $("#js-wrong-answer").find("p").text(`You got it wrong! The correct answer is: ${quizAppQuestions[currentQuestionIndex].correctanswer}`); 
      $("#js-wrong-answer").show(300);
      $("#js-question-page").hide(300);
    }
  });

  $("#js-answer-3").click(function() {
    if (quizAppQuestions[currentQuestionIndex].answer3 === quizAppQuestions[currentQuestionIndex].correctanswer) {
      $("#js-right-answer").show(300);
      $("#js-question-page").hide(300);
    } else {
      $("#js-wrong-answer").find("p").text(`You got it wrong! The correct answer is: ${quizAppQuestions[currentQuestionIndex].correctanswer}`);
      $("#js-wrong-answer").show(300);
      $("#js-question-page").hide(300);
    }
  });

  $("#js-answer-4").click(function() {
    if (quizAppQuestions[currentQuestionIndex].answer4 === quizAppQuestions[currentQuestionIndex].correctanswer) {
      $("#js-right-answer").show(300);
      $("#js-question-page").hide(300);
    } else {
      $("#js-wrong-answer").find("p").text(`You got it wrong! The correct answer is: ${quizAppQuestions[currentQuestionIndex].correctanswer}`); 
      $("#js-wrong-answer").show(300);
      $("#js-question-page").hide(300);
    }
  });

  $("#next-question-right").click(function() {
    renderNextQuestionRight(currentQuestionIndex);
  });

  $("#next-question-wrong").click(function() {
    renderNextQuestionWrong(currentQuestionIndex);
  });

  $("#js-start-quiz-over").click(function () {
    renderStartPage();
  });
}

function renderNextQuestionRight() {
  if(currentQuestionIndex < 9) {
    currentQuestionIndex++;
    correctAnswers++;
    renderQuestionPage();
  } else {
    correctAnswers++;
    renderFinalPage();
  }
}

function renderNextQuestionWrong() {
  if(currentQuestionIndex < 9) {
    currentQuestionIndex++;
    renderQuestionPage();
  } else {
    renderFinalPage();
  }
}

function renderFinalPage() {
  $("#js-right-answer").hide(300);
  $("#js-wrong-answer").hide(300);
  $("#js-final-page").show(300);
  if(correctAnswers <= 3) {
    $("#js-final-page").find("p").text(`You answered ${correctAnswers} correct out of 10.  Were you even alive in the 90's???`);
    $("#js-final-page").css("background-color", "rgba(255, 0, 0, 0.9)");
  } else if(correctAnswers <= 6) {
    $("#js-final-page").find("p").text(`RESULTS: You answered ${correctAnswers} correct out of 10.  Not so good.  You should probably try again...`);
    $("#js-final-page").css("background-color", "rgba(255, 165, 0, 0.9)");
  } else if(correctAnswers <= 9) {
    $("#js-final-page").find("p").text(`RESULTS: You answered ${correctAnswers} correct out of 10.  Not too shabby!`);
    $("#js-final-page").css("background-color", "rgba(0, 255, 0, 0.9)");
  } else {
    $("#js-final-page").find("p").text(`RESULTS: You answered ${correctAnswers} correct out of 10.  PERFECT SCORE! NICE JOB!`);
    $("#js-final-page").css("background-color", "rgba(255, 215, 0, 0.9)");
  }
}

function handleQuizApp() {
  handleClicks();
  renderStartPage();
}

$(handleQuizApp);