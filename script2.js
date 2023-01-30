const pwEl = document.getElementById('pw');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const btnEl = document.getElementById('generate');

let upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
let numbers = '0123456789';
let symbols = "!@#$%^&*";

function getUpper(params) {
    const upper = upperLetters
    [Math.floor(Math.random() * upperLetters.length)];
    /**Math.floor alwys returns numbers below 1 so it used with
     * Math.random to return random integers, the syntax is given below
     * Math.floor(Math.random * 10) returns numbers from 0 to 9 
     */
    return upper;
}

function getLower(params) {
    const lower = lowerLetters
    [Math.floor(Math.random() * lowerLetters.length)];
    return lower;
}

function getNumbers(params) {
    const num = numbers
    [Math.floor(Math.random() * numbers.length)];
    return num;
}

function getSymbols(params) {
    return symbols
    [Math.floor(Math.random() * symbols.length)];
    
}

 function generatePw(){
     
     let password = '';

     const len = lengthEl.value;

     for (let i = 0; i < len; i++) {
         password += generateX()
     }

      pwEl.innerText = password;//password carries the value, value is always after
 }

 function generateX(){
     let xs = [];
     if (upperEl.checked) {
          xs.push(getUpper());
     }

     if (lowerEl.checked) {
        xs.push(getLower());
    }

    if (numberEl.checked) {
        xs.push(getNumbers());
    }

    if (symbolEl.checked) {
        xs.push(getSymbols());
    }

    if (xs.length==0) return '';

    return xs[Math.floor(Math.random() * xs.length)]
 }

 btnEl.addEventListener('click', generatePw);