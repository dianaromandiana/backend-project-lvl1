
export function definePrime(prime){
return (prime % 2 == 0) ? true : false;
}

export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isCorrect(correctAnswer,checkAnswer){
return (correctAnswer==checkAnswer) ? true : false;
}

