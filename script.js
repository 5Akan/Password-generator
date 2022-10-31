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
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumbers(params) {
    return numbers
    [Math.floor(Math.random() * numbers.length)];
}

function getSymbols(params) {
    return symbol
    [Math.floor(Math.random() * symbol.length)];
}

alert(getNumbers())