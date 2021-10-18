// var i = 1;

// do {
//   if (i > 50) {
//     break;
//   }

//   console.log(i);

//   i++;
// } while (i < 100);

// var i = 1;

// do {
//   if (i > 12) {
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i < 52);

// var i = 8;

// do {
//   i++;
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log(i);
// } while (i < 33);

var testNumber = prompt('Introdu un numar');
var lowerLimit = prompt('Introdu limita inferioara');
var upperLimit = prompt('Introdu limita superioara');

var i = lowerLimit;
do {
  if (i % testNumber === 0) {
    console.log(i);
  }

  i++;
} while (i < upperLimit);
