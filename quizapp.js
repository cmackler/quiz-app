var correct = 0;
var currentQuestionIndex = 0;
var currentQuestion = 1;
var question;
var option0;
var option1;
var correctAnswer;

//Create the Questions
function Question (question, option0, option1, answer) {
  this.question = question;
  this.option0 = option0;
  this.option1 = option1;
  this.answer = answer;
}

Question.prototype.toHTML = function() {
  question = this.question;
  option0 = this.option0;
  option1 = this.option1;
  correctAnswer = this.answer;
  document.getElementById("question").innerHTML = question;
  document.getElementById("choice0").innerHTML = option0;
  document.getElementById("choice1").innerHTML = option1;
  document.getElementById("questionNumber").innerHTML = currentQuestion;
  document.getElementById("totalQuestions").innerHTML = quiz.questions.length;
};

//Create the Quiz
function Quiz() {
  this.questions = [];
  this.currentQuestion = 1;
}

Quiz.prototype.add = function(question) {
  this.questions.push(question);
};

Quiz.prototype.renderOnPage = function() {
  if(currentQuestionIndex >= this.questions.length){
    document.getElementById("quiz").innerHTML = quiz.result();
  } else {
    this.questions[currentQuestionIndex].toHTML();
  }
};

Quiz.prototype.isCorrect = function(selection){
   if (selection === correctAnswer){
    alert("Good Job!");
    correct++; 
   } else {
    alert("Sorry, that is not correct."); 
   }
   currentQuestionIndex++;
   currentQuestion++;
}

Quiz.prototype.result = function(){
  var htmlString = ''; 
  htmlString = '';
  htmlString += '<h1>Simple Quiz App</h1>';
  htmlString += '<h2 id="question" class="headline-secondary--grouped">Results:</h2>';
  htmlString += '<p>You got ' + correct + ' questions correct out of ' + quiz.questions.length + '!</p>';
  return htmlString;
}

//Add new questions here
var question1 = new Question ("Who was the first President of the United States?", "George Washington", "Thomas Jefferson", "George Washington");

var question2 = new Question ("Who was NOT a member of the Beatles?", "Ringo Star", "Eric Clapton", "Eric Clapton");

var question3 = new Question ("What year did Roger Maris hit 61 home runs?", "1982", "1961", "1961");

var question4 = new Question ("What is our year of independence?", "1812", "1776", "1776");

//Display the app
var quiz = new Quiz();

//Add questions to the Quiz
quiz.add(question1);
quiz.add(question2);
quiz.add(question3);
quiz.add(question4); 

quiz.renderOnPage();

//User interactivity
var guess0Button = document.getElementById("guess0");
var guess1Button = document.getElementById("guess1");

guess0Button.onclick = function(){
  quiz.isCorrect(option0); 
  quiz.renderOnPage();
}

guess1Button.onclick = function(){
  quiz.isCorrect(option1);
  quiz.renderOnPage();
}


