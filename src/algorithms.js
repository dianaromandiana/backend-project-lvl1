//Проверка на нечетность
export function isOdd(number){
return (number % 2 == 0) ? true : false;
}

//Проверка на простое ли число number?
export function isPrime(number){
let flag = true;
for (let i = 2; i < number; i++) {
	if (number % i == 0) {
		flag = false; // если хотя бы один раз поделилось
		break; // выйдем из цикла
	}
}
return flag;
}

//Случайное целое число в диапазоне, включая минимальное и максимальное.
export function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Случайный оператор. Вернётся как строка
export function getStrOperator() {
  let characters = [ '+', '*','-']
  let result = characters[(Math.floor(Math.random() * 3))];
 return result;
}

//Случайный оператор. Вернётся как массив( 1 - символ, 2 - результат выражения)
export function getRandomOperator(x,y) {
  let operator = [ add(x,y), multiply(x,y), subtract(x,y) ];
  let result = operator[(Math.floor(Math.random() * 3))];
  console.log('===  getRandomOperator() === result = ' + result );
 return result;
}

export function add(x,y) {
  let arr = [];
  arr[0] = '+';
  arr[1] = x + y
  return arr;
}

export function multiply(x,y) {
  let arr = [];
  arr[0] = '*';
  arr[1] = x * y
  return arr;
}

export function subtract(x,y) {
  let arr = [];
  arr[0] = '-';
  arr[1] = x - y;
  return arr;
}

//Find the greatest common divisor (GCD)
//Найти наибольший общий делитель (НОД)
export function gcd_rec(a, b) {
    if (b) {
        return gcd_rec(b, a % b);
    } else {
        return Math.abs(a);
    }
}

//Generate random  numbers in Progression by Array, size 10 - better.
//Генерация рандомной прогрессии как массив, длиной 10 - лучше .
export function  generatedArithmeticProgression(userCount) {

 //First Number
 let startSequence = getRandomInRange(1,100);
 //Рекомендуемая длина прогрессии – 10 чисел. Длина может генерироваться случайным образом, но должна содержать не менее 5 чисел
 let randomCount = getRandomInRange(5,10);
 //Progression Size
 let arrayCount=10;
 if(userCount>5){
 arrayCount  = userCount;
 }
 //Difference (delta) - Progression Step
 let delta  = getRandomInRange(1,10);

 let progression=generatedSequence(startSequence, arrayCount, delta);
 return progression;
}

const generatedSequence = (start, size, step) => {
  let arr = [start];
  for (let i = 1; i <= size-1; i++){
  arr[i]= arr[i-1]+step ;
  }
  return arr;
};

