import {userName} from '../src/cli.js';
import * as cli from '../src/cli.js';
import * as utils from '../src/utils.js';
import * as algorithms from '../src/algorithms.js';
import readlineSync from 'readline-sync';

// =====================================================
// =====  Игра "НОД" =====
// =====================================================



{
var randomNumber1 = algorithms.getRandomInRange(1,100);
var randomNumber2 = algorithms.getRandomInRange(1,100);
var mathExpression = algorithms.gcd_rec(randomNumber1,randomNumber2);
     console.log(' === SOUT === init mathExpression :  ' + mathExpression); //отладка
var question = generatedQuestion(randomNumber1,randomNumber2);
}

//стрелочная функция
let generatedPath = () =>
{
   randomNumber1 = algorithms.getRandomInRange(1,100);
   randomNumber2 = algorithms.getRandomInRange(1,100);
   mathExpression = algorithms.gcd_rec(randomNumber1,randomNumber2);
   question = generatedQuestion(randomNumber1,randomNumber2);
     console.log(' === SOUT === generatedPath mathExpression :  ' + mathExpression); //отладка
     console.log(' === SOUT === generatedPath question :  ' + question); //отладка
};


// ОСНОВНОЙ код программы
cli.askQuestion();
//init();
recursionAskQuestions(0,mathExpression,question);




// =====================================================
// =====  вспомогательные методы =====
// =====================================================


//метод использующий рекурсию!(не рекурсивный процесс!)
function recursionAskQuestions(count, mathExpression, question){
//console.log(' === SOUT === mathExpression  ' + mathExpression); //отладка

//момент остановка векурсии.
  if (count === 3) {
    console.log('Congratulations, ' + userName + '!');
    return;
  }

console.log(question);
let userAnswer = readlineSync.question('Your answer: ');
let correctAnswer = mathExpression;

// проверка на правильный ответ или нет
  if(correctAnswer==userAnswer){
  count++;
  console.log("Correct!");

  // ===== todo КАК БЫ СДЕЛАТЬ ЭТО УНИВЕРСАЛЬНО
  randomNumber1 = algorithms.getRandomInRange(1,100);
  randomNumber2 = algorithms.getRandomInRange(1,100);
  mathExpression = algorithms.gcd_rec(randomNumber1,randomNumber2);
  question = generatedQuestion(randomNumber1,randomNumber2);
  // ===== todo generatedPath();
  // generatedPath();

  }else{
  console.log("It is wrong answer. Correct answer was " + mathExpression  + ". Let's try again, "+ userName + '!');
  return;
  }

  return recursionAskQuestions(count,mathExpression, question);
};



function generatedQuestion(randomNumber1, randomNumber2){
 return "Find the greatest common divisor of given numbers: " + randomNumber1+ " " + randomNumber2;
}




/*function generatedPath(){
   randomNumber1 = algorithms.getRandomInRange(1,100);
   randomNumber2 = algorithms.getRandomInRange(1,100);
   mathExpression = algorithms.gcd_rec(randomNumber1,randomNumber2);
   question = generatedQuestion(randomNumber1,randomNumber2);
     console.log(' === SOUT === generatedPath mathExpression :  ' + mathExpression); //отладка
     console.log(' === SOUT === generatedPath question :  ' + question); //отладка
}*/


