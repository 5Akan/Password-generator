const pwEl   = document.getElementById('pw');
const copyEl  = document.getElementById('copy');
const lengthEl  = document.getElementById('length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl  = document.getElementById('number');
const symbolEl  = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbol = '~!@#$%^&()_+:"?><{}-=';

function getUpperCase(params) {
    return upperLetters
    [Math.floor(Math.random() * upperLetters.length)];
    
}

function getLowerCase(params) {
    return lowerLetters
    [Math.floor(Math.random() * lowerLetters.length)];
}

function getNumbers(params) {
    return numbers
    [Math.floor(Math.random() * numbers.length)];
}

function getSymbols(params) {
    return symbol
    [Math.floor(Math.random() * symbol.length)];
}

function generatePassword(params) {
   const len = lengthEl.value; 
    let password = '';


    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
        
    }

    pwEl.innerText = password;
}

function generateX(){
    const xs = [];
    if (upperEl.checked) {
        xs.push(getUpperCase());
    }

    if (lowerEl.checked) {
        xs.push(getLowerCase());
    }

    if (numberEl.checked) {
        xs.push(getNumbers());
    }

    if (symbolEl.checked) {
        xs.push(getSymbols());
    }

    if(xs.length == 0) return "";
    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);