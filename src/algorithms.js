//Проверка на четность
export function definePrime(prime){
return (prime % 2 == 0) ? true : false;
}

//Случайное целое число в диапазоне, включая минимальное и максимальное.
export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Проверка на корректность
export function isCorrect(correctAnswer,checkAnswer){
return (correctAnswer==checkAnswer) ? true : false;
}

