import {userName} from '../src/cli.js';
import * as cli from '../src/cli.js';
import * as utils from '../src/utils.js';
import * as algorithms from '../src/algorithms.js';
import readlineSync from 'readline-sync';

// =====================================================
// =====  Игра "Калькулятор" =====
// =====================================================

cli.askQuestion();
console.log("What is the result of the expression?");
let mathExpressionArr = generationRandomMathematicalExpression();
recursionAskQuestions(0,mathExpressionArr);



// =====================================================
// =====  вспомогательные методы =====
// =====================================================


function generationRandomMathematicalExpression(){
 const arr=[];
 //Первый операнд
  arr[0] = algorithms.getRandomInRange(0,100);
 //Второй операнд
  arr[1] = algorithms.getRandomInRange(0,100);
 //оператор
  arr[2] =  algorithms.getRandomOperator(arr[0],arr[1]);
 return arr;
}


//метод использующий рекурсию!(не рекурсивный процесс!)
function recursionAskQuestions(count, mathExpressionArr){
//console.log(' === SOUT === mathExpressionArr  ' + mathExpressionArr); //отладка

//момент остановка векурсии.
  if (count === 3) {
    console.log('Congratulations, ' + userName + '!');
    return;
  }

var nameOfMathExpression = mathExpressionArr[2][0]; //символ
var resulrOfMathExpression = mathExpressionArr[2][1]; // результат вычисления

console.log(`Question: ${mathExpressionArr[0]}${nameOfMathExpression}${mathExpressionArr[1]}`);
let userAnswer = readlineSync.question('Your answer: ');
let correctAnswer = resulrOfMathExpression;

// проверка на правильный ответ или нет
  if(correctAnswer==userAnswer){
  count++;
  console.log("Correct!");
  mathExpressionArr = generationRandomMathematicalExpression();
  }else{
  console.log("It is wrong answer. Correct answer was " + correctAnswer + ". Let's try again, "+ userName + '!');
  return;
  }

  return recursionAskQuestions(count,mathExpressionArr);
};
