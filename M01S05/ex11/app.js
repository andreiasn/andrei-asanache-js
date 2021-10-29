console.warn(`Creeaza o functie overloaded pentru calcularea suprafetelor numita calculateSurface.
Daca primeste un parametru, sa calculeze suprafata unui patrat. Daca primeste doi, a unui dreptunghi.
Daca primeste trei, sa calculeze suprafata totala a paralelipipedului. Foloseste structura switch.`);

function calculateSurface(L, l, h) {
  switch (arguments.length) {
    case 1:
      return L ** 2;
      break;
    case 2:
      return L * l;
      break;
    case 3:
      return L * l * h;
      break;
  }
}
//  ?? nu am inteles ce trebuie sa calculeze la 3 parametri
// sa fie volumul ? dar inseamna ca e gresit pixeltab
console.warn(
  `Creeaza o functie numita calculateCircleArea() si afiseaza suprafata unor cercuri cu raza de 2, 20 si 16. `,
);
function calculateCircleArea(r) {
  return Math.PI * r ** 2;
}
console.log(calculateCircleArea(2));
console.log(calculateCircleArea(20));
console.log(calculateCircleArea(16));

console.warn(
  `Creeaza un obiect numit pet cu urmatoarele metode: getName, getSpecies si getAge.`,
);

var pet = {
  getName: () => {
    return 'Max';
  },
  getSpecies: () => {
    return 'dog';
  },
  getAge: () => {
    return 10;
  },
};

console.warn(
  `Folosind metodele obiectului pet afiseaza propozitia: “nnnn este ssss si are aaaa ani.”`,
);
const accessor = (methodSuffix) => {
  const methodName = `get${methodSuffix}`;

  if (pet[methodName] === undefined) {
    throw new Error('Method not found');
  }
  return pet[methodName]();
};
console.log(
  `${accessor('Name')} este ${accessor('Species')} si are ${accessor(
    'Age',
  )} ani.`,
);

console.warn(
  `Folosind metoda getAge calculeaza si salveaza intr-o variabila numita petAge varsta animalului si afiseaza propozitia: “Animalul meu are petAge ani”`,
);
const petAge = accessor('Age');
console.log(`Animalul meu are ${petAge} ani.`);
