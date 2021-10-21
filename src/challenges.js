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

// Desafio 6 Não estou conseguindo verifiar negativo nem 0
function highestCount(lagerInArray) {
  // seu código aqui-
  let maxnumber = lagerInArray[0];
  let count = 0;

  for (let index = 0; index < lagerInArray.length; index += 1) {
    if (lagerInArray[index] > maxnumber[index]) {
      maxnumber = lagerInArray[index];
      maxnumber += 1;
      console.log(maxnumber);
    } else if (lagerInArray[index] >= 9) {
      count += 1;
      // console.log(count);
    } else if (lagerInArray[index] < maxnumber) {
      maxnumber = maxnumber * -1;
      count += 1;
    }
  }
  return count;
}
highestCount([-2, -2, -1]);
// Desafio 7 
// Referencia (https://github.com/tryber/sd-014-b-project-playground-functions/blob/9b948a8ece32f5b0ef3b594b79951f99502ca1fe/src/challenges.js)

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat2Diff = cat2 - mouse;
  let cat1Diff = cat1 - mouse;
  let winningCat;

  if (cat1Diff < 0) {
    cat1Diff = cat1Diff * -1;
  }

  if (cat2Diff < 0) {
    cat2Diff = cat2Diff * -1;
  } 
  
  if (cat2Diff < cat1Diff) {
    winningCat = 'cat2';
  } else if (cat1Diff < cat2Diff) {
    winningCat = 'cat1';
  } else if (cat1Diff === cat2Diff){
    winningCat = 'os gatos trombam e o rato foge';
  }
  return winningCat;
}
catAndMouse(1, 0, 2);

// Desafio 8
function fizzBuzz(params) {
  // seu código aqui
  let retornaArray;
  for (let key of params) {
    if (params[key] % 3 === 0) {
      retornaArray = 'fizz';
      console.log(retornaArray);
    }    
  }
  return retornaArray;
}
// fizzBuzz([2, 15, 7, 9, 45]);
// Desafio 9
function encode() {
  // seu código aqui
  // for (let index = 0; index < params.length; index += 1) {
    
  //   for (let jdex = 0; jdex < params.length; jdex += 1) {
  //     if (params[jdex] = ) {
        
  //     }
  //   }
  // }
}

encode();
function decode() {
  // seu código aqui
}
decode();
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
