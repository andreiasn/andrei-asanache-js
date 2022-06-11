let person1 = {
  name: 'Steven',
  surname: 'Stevenson',
};

let person2 = {
  name: 'Rolf',
  surname: 'Rolfson',
};

let person3 = {
  name: 'Andra',
  surname: 'Andrason',
};

let age1 = {
  age: 20,
};

let age2 = {
  age: 25,
};

const fullPerson1 = { ...person1, ...age1 };
const fullPerson2 = { ...person2, age: 40 };
const fullPerson3 = { ...person3, ...age2 };
const fullPerson4 = { ...fullPerson3, name: 'Anita', age: 36 };
