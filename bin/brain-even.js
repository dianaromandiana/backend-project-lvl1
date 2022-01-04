#!/usr/bin/env node

import {userName} from '../src/cli.js';
import * as cli from '../src/cli.js';
import * as algorithms from '../src/algorithms.js';
import * as utils from '../src/utils.js';
import readlineSync from 'readline-sync';


// =====================================================
// ==========  Игра "Проверка на чётность" ============
// =====================================================

cli.askQuestion();
console.log("Answer 'Yes' if the number is even, otherwise answer 'No'");
let countTry=0;
recursionAskQuestions(countTry);




// =====================================================
// =====  вспомогательные методы(Вынести в утилс)  =====
// =====================================================


//метод использующий рекурсию!(не рекурсивный процесс!)
function recursionAskQuestions(count){
//console.log(' === SOUT === count  ' + count); //отладка

//момент остановка векурсии.
  if (count === 3) {
    console.log('Congratulations, ' + userName + '!');
    return;  //break; todo момент с return
  }
const randomNumber = algorithms.getRandomInRange(1,100);
console.log("Question: " + randomNumber);
let answer = readlineSync.question('Your answer(y/n): ');
let userAnswer=utils.setBooleanAnswer(answer);
let correctAnswer = algorithms.isOdd(randomNumber);

// проверка на правильный ответ или нет
  if(utils.isCorrect(correctAnswer,userAnswer)){
  count++;
  console.log("Correct!");
  }else{
  console.log("It is wrong answer. Correct answer was " + utils.convertCorrectAnswer(correctAnswer)+ ". Let's try again, "+ userName + '!');
  return;
  }

  return recursionAskQuestions(count);
};

