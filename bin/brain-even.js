import {userName} from '../src/cli.js';
import * as cli from '../src/cli.js';
import * as algorithms from '../src/algorithms.js';
import readlineSync from 'readline-sync'; // КАК СДЕЛАТЬ ГЛОБАЛЬНЫМ импорт readlineSync


// =====================================================
// =====  Игра "Проверка на чётность" (Check for parity) =====
// =====================================================

cli.askQuestion();
console.log("Answer 'Yes' if the number is even, otherwise answer 'No'");
let countTry=0;
recursionAskQuestions(countTry);





// =====================================================
// =====  вспомогательные методы(Вынести в утилс)  =====
// =====================================================

//можно дополнить вариантами
function setBooleanAnswer(strAnswer){
if (strAnswer=="y" || strAnswer == "Y" || strAnswer == "yes" || strAnswer == "Yes"){
 return true;
 }
 return false;
}

//метод использующий рекурсию!(не рекурсивный процесс!)
function recursionAskQuestions(countTry){
//console.log(' === SOUT === countTry  ' + countTry); //отладка

//момент остановка векурсии.
  if (countTry === 3) {
    console.log('Congratulations, ' + userName + '!');
    return;  //break; todo момент с return
  }
const randomNumber = algorithms.getRandomInRange(1,100);
console.log("Question: " + randomNumber);
let answer = readlineSync.question('Your answer(y/n): ');
let userAnswer=setBooleanAnswer(answer);
let correctAnswer = algorithms.definePrime(randomNumber);

// проверка на правильный ответ или нет
  if(algorithms.isCorrect(correctAnswer,userAnswer)){
  countTry++;
  console.log("Correct!");
  }else{
  console.log("It is wrong answer. Correct answer was " +convertCorrectAnswer(correctAnswer)+ ". Let's try again, "+ userName + '!');
  return;
  }

  return recursionAskQuestions(countTry);
};


function convertCorrectAnswer(boolleanAnswer){
if (boolleanAnswer===true){
 return "'Yes'";
 }
 return "'No'";
}
