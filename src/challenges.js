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
  return (a.split(' '));
}

// Desafio 4
function concatName(a) {
  // seu código aqui
  return ((a[a.length - 1]) + ', ' + a[0]);
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
function highestCount(a) {
  // seu código aqui
  let maiorNumero = a[0];
  let numeroVezes = 0;

  for (let index = 0; index < a.length; index += 1) {
    if (a[index] < maiorNumero) {
      maiorNumero = a[index];
    } return maiorNumero;
  }
  for (let index = 0; index < a; index += 1) {
    if (maiorNumero === a[index]) {
      numeroVezes += 1;
    }
  }
  return numeroVezes;
}

// function cats(cat1, cat2) {
//   if (cat1 < cat2) {
//     return cat1 += 1;
//   }
// }

// function cat2Mouse(cat2, mouse) {

// }

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

}

// Desafio 8
function fizzBuzz(a) {
  // seu código aqui
  // let retornaArray;
  // for (let index = 0; index < a.length; index += 1) {
  //   if (a[index] ) {    
  //   }
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
