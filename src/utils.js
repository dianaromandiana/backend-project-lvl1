//можно дополнить вариантами
export function setBooleanAnswer(strAnswer){
if (strAnswer=="y" || strAnswer == "Y" || strAnswer == "yes" || strAnswer == "Yes"){
 return true;
 }
 return false;
}

export function convertCorrectAnswer(boolleanAnswer){
if (boolleanAnswer===true){
 return "'Yes'";
 }
 return "'No'";
}

//Проверка на корректность
export function isCorrect(correctAnswer,checkAnswer){
return (correctAnswer===checkAnswer) ? true : false;
}