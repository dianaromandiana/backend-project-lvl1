import {userName} from '../src/cli.js';
import * as cli from '../src/cli.js';
import * as algorithmes from '../src/algorithmes.js';
import readlineSync from 'readline-sync'; // КАК СДЕЛАТЬ ГЛОБАЛЬНЫМ импорт readlineSync

//cli.askQuestion();
//console.log("Answer 'Yes' if the number is even, otherwise answer 'No'");

let countTry=3;
let countFalse=3;
while (countTry==3 || countFalse==3 ) { // когда countTry или countFalse будет равно 0, условие станет ложным, и цикл остановится

// задавай вопрос в цикле
const randomNumber = algorithmes.getRandomInRange(1,100);
console.log("Question: " + randomNumber);
let answer = readlineSync.question('Your answer(y/n): ');
let userAnswer=setBooleanAnswer(answer);
let correctAnswer = algorithmes.definePrime(randomNumber);

// проверка на правильный ответ или нет
  if(algorithmes.isCorrect(correctAnswer,userAnswer)){
  console.log('Variant 1 ' + ' countFalse= '+ countFalse + ' countTry= ' + countTry);
  countTry--;
  }else{
    console.log('Variant 2 ' + ' countFalse= '+ countFalse + ' countTry= ' + countTry);
  countFalse--;
  }

}




//console.log('Congratulations, ' + userName + '!');


//можно дополнить
function setBooleanAnswer(strAnswer){
if (strAnswer=="y" || strAnswer == "Y" || strAnswer == "yes" || strAnswer == "Yes"){
 return true;
 }
 return false;
}
