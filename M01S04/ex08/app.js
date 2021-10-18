// var i = 1;

// while (i < 100) {
//   console.log(i);
//   i++;
// }

// var i = 1;

// while (i < 100) {
//   console.log(i);
//   i++;

//   if (i > 50) {
//     break;
//   }
// }

// var i = 1;

// while (i <= 67) {
//   console.log(i);
//   i++;
// }

// var i = 1;

// while (i < 67) {
//   console.log(i);
//   i++;

//   if (i > 12) {
//     break;
//   }
// }

// var i = 1;

// while (i <= 32) {
//   i++;
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(i);
// }

var i = 5;
var testNumber = prompt('Introdu un numar');
var upperLimit = prompt('Introdu limita superioara');

while (i <= upperLimit) {
  if (i % testNumber === 0) {
    console.log(i);
  }

  i++;
}
