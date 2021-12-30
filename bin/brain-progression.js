import {userName} from '../src/cli.js';
import * as cli from '../src/cli.js';
import * as utils from '../src/utils.js';
import * as algorithms from '../src/algorithms.js';
import readlineSync from 'readline-sync';

// =====================================================
// =====  Игра "Арифметическая прогрессия" =====
// =====================================================



cli.askQuestion();
let size=10;
var progression = algorithms.generatedArithmeticProgression(size);
//Позиция спрятанного элемента каждый раз изменяется (выбирается случайным образом)
let positionHiddenElement=algorithms.getRandomInRange(0,size-1);
let hiddenElement=progression[positionHiddenElement];

//скрываем элемент у прогрессии
progression[positionHiddenElement]='..';

var mathExpression = hiddenElement;
var question = generatedQuestion(progression);
recursionAskQuestions(0,mathExpression,question);




// =====================================================
// =====  вспомогательные методы =====
// =====================================================

function generatedQuestion(progression){
 return "What number is missing in the progression? " + progression;
}



//метод использующий рекурсию(не рекурсивный процесс!)
function recursionAskQuestions(count, mathExpression, question){
//console.log(' === SOUT === mathExpression  ' + mathExpression); //отладка

//момент остановка рекурсии.
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

  // ===== todo КАК БЫ СДЕЛАТЬ ЭТО УНИВЕРСАЛЬНО ЁПРСТ
  // ===== todo generatedPath();
  progression = algorithms.generatedArithmeticProgression(size);
  positionHiddenElement=algorithms.getRandomInRange(0,size-1);
  hiddenElement=progression[positionHiddenElement];
  progression[positionHiddenElement]='..';
  mathExpression = hiddenElement;
  question = generatedQuestion(progression);
  // =====

  }else{
  console.log("It is wrong answer. Correct answer was " +mathExpression + ". Let's try again, "+ userName + '!');
  return;
  }

  return recursionAskQuestions(count,mathExpression, question);
};







