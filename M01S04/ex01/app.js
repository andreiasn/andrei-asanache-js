// var value = window.prompt('Introdu o valoare');
// var messageParagraph = document.getElementById('message');
// var oddMessage = 'Numarul este impar';
// var evenMessage = 'Numarul este par';
// var invalidInputMessage = 'Nu ai introdus un numar';

// value = Number(value);

// if (isNaN(value)) {
//   throw new Error(invalidInputMessage);
// }

// console.log(`Valoarea este ${value}`);

// if (value % 2 === 0) {
//   messageParagraph.innerText = evenMessage;
// } else {
//   messageParagraph.innerText = oddMessage;
// }

var value = prompt('Introdu un numar');
var paragraphElement = document.getElementById('message');
var badInputMessage = 'Nu ai introdus un numar';

if (value === null) {
  value = NaN;
} else {
  if (value.trim().length <= 0) {
    value = NaN;
  }
}

value = Number(value);

if (isNaN(value) === false) {
  if (value < 20) {
    paragraphElement.innerText = `Numarul este mai mic decat 20`;
  } else if (value === 20) {
    paragraphElement.innerText = `Numarul este 20`;
  } else {
    paragraphElement.innerText = `Numarul este mai mare decat 20.`;
  }
} else {
  paragraphElement.innerText = badInputMessage;
}
