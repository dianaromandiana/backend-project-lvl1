import readlineSync from 'readline-sync';

export var userName = '';

export function askQuestion(){
console.log("Welcome to the Brain Games!");
userName = readlineSync.question('May I have your name? ');
console.log("Hello, " + userName + "!");
}

