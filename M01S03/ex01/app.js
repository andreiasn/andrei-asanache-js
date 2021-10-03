console.warn(
  `Afiseaza fraza "Ma numesc xxx yyy si am xx ani." in consola folosind operatorul de concatenare`,
);

console.log(
  'Ma numesc ' +
    person.name +
    ' ' +
    person.surname +
    ' ' +
    'si am ' +
    person.age +
    ' ani.',
);

console.log((2021 - person.age).toString());

console.log(
  person.name + ' ' + person.surname + ' are ' + person.age + ' ani.',
);
