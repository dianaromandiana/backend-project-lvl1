//можно дополнить вариантами
function setBooleanAnswer(strAnswer){
if (strAnswer=="y" || strAnswer == "yes" ){
 return true;
 }
// if (strAnswer=="n" || strAnswer == "no" ){
 return false;
// }
}



function convertCorrectAnswer(boolleanAnswer){
if (boolleanAnswer===true){
 return "'Yes'";
 }
 return "'No'";
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


