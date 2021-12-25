import {userName} from '../src/cli.js';
import * as cli from '../src/cli.js';
import * as utils from '../src/utils.js';
import * as algorithms from '../src/algorithms.js';
import readlineSync from 'readline-sync';

// =====================================================
// =====  Игра "Калькулятор" =====
// =====================================================

cli.askQuestion();
console.log("Answer 'Yes' if the number is even, otherwise answer 'No'");
let mathExpressionArr = generationRandomMathematicalExpression();
//console.log("AAAAAAAAAAA   mathExpression: " + mathExpression);
//utils.recursionAskQuestions(0,mathExpressionArr);
recursionAskQuestions(0,mathExpressionArr);




// =====================================================
// =====  вспомогательные методы =====
// =====================================================


function generationRandomMathematicalExpression(){
 const arr=[];
 //Первый операнд
  arr[0] = algorithms.getRandomInRange(-100,100);
      console.log('aaaaaaaaa arr[0]' + arr[0] );
 //Второй операнд
  arr[1] = algorithms.getRandomInRange(-100,100);
      console.log('aaaaaaaaa arr[1]' + arr[1] );
 //оператор
  arr[2] = (arr[0]).toString()+(arr[1]).toString();
      console.log('aaaaaaaaa arr[2]' + arr[2] );
 return arr;
}



//метод использующий рекурсию!(не рекурсивный процесс!)
function recursionAskQuestions(count, mathExpressionArr){
//console.log(' === SOUT === count  ' + count); //отладка

//момент остановка векурсии.
  if (count === 3) {
    console.log('Congratulations, ' + userName + '!');
    return;
  }

console.log("Question: " + mathExpressionArr[2] + " =?");
let userAnswer = readlineSync.question('Your answer: ');
let correctAnswer = (mathExpression[0])+(mathExpressionArr[1]);

// проверка на правильный ответ или нет
  if(algorithms.isCorrect(correctAnswer,userAnswer)){
  count++;
  console.log("Correct!");
  }else{
  console.log("It is wrong answer. Correct answer was " +convertCorrectAnswer(correctAnswer)+ ". Let's try again, "+ userName + '!');
  return;
  }

  return recursionAskQuestions(count,mathExpressionArr);
};
