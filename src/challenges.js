// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(a) {
  // seu código aqui
  a.split('');
  return a;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(a, b) {
  // seu código aqui
  let wins = 3;
  let ties = 1;
  if (a <= 0 && b <= 0) {
    return 0;
  }
  return a * wins + b * ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
