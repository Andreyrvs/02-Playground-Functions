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
function splitSentence(cutArray) {
  // seu código aqui
  return (cutArray.split(' '));
}

// Desafio 4
function concatName(theLastFirst) {
  // seu código aqui
  return `${theLastFirst[theLastFirst.length - 1]}${','} ${theLastFirst[0]}`;
}
// Desafio 5
function footballPoints(victoryPoints, tiePoints) {
  // seu código aqui
  let wins = 3;
  let ties = 1;
  if (victoryPoints <= 0 && tiePoints <= 0) {
    return 0;
  }
  return victoryPoints * wins + tiePoints * ties;
}

// Desafio 6
function highestCount(lagerInArray) {
  // seu código aqui
  let maiorNumero = lagerInArray[0];
  let ocorrencias = 0;

  for (let i = 0; i < lagerInArray.length; i += 1) {
    if (maiorNumero > lagerInArray[i]) {
      maiorNumero = lagerInArray[i];
    } else if (maiorNumero === lagerInArray[i]) {
      ocorrencias += 1;
    } else if (lagerInArray <= 0) {
      ocorrencias += 1;
    }
    return ocorrencias;
  }
}

function closerCat(mouse, cat2) {
  let cat2Distance;
  if (cat2 < mouse) {
    cat2Distance = 'cat2';
  }
  return cat2Distance;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1Distance;
  if (cat1 < closerCat(mouse, cat2)) {
    cat1Distance = 'cat1';
  }
  return cat1Distance;
}
catAndMouse(1, 0, 2);
// Desafio 8
function fizzBuzz() {
  // seu código aqui
  // let retornaArray;
  // for (let index = 0; index < a.length; index += 1) {
  //   if (a[index] ){  //   }
  // }
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
