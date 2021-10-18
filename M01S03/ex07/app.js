var person = {
  firstName: 'Andrei',
  lastName: 'Asanache',
  email: 'andrei@andrei.ro',
  birthYear: 1992,
  pets: [
    {
      name: 'Max',
      species: 'dog',
      age: 10,
    },
    {
      name: 'Hera',
      species: 'dog',
      age: 11,
    },
    {
      name: 'Catia',
      species: 'cat',
      age: 4,
    },
  ],
  zipCode: '020202',
};

console.warn(
  `Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”.
Nu uita de proprietatea length a arrayului pets.`,
);

console.log(
  `Numele meu este: ${person.firstName} si ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn(`Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.`);

console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  `Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”`,
);

console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[1].species} si are ${person.pets[1].age} ani.`,
);

console.warn(
  `Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.`,
);

console.log((2021 - person.pets[2].age).toString());

console.warn(`
Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent.`);

var difference = 2021 - person.birthYear - person.pets[0].age;

console.log(difference.toString());

console.warn(`Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName.
Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.
`);

var petName = person.pets[0].name;

// console.log($petName);
console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

// Folosind metoda document.getElementById() afiseaza urmatoarele 4 afirmatii despre obiectul person.
var firstItem = document.getElementById('prop01');
var secondItem = document.getElementById('prop02');
var thirdItem = document.getElementById('prop03');
var fourthItem = document.getElementById('prop04');

// Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)
firstItem.innerText = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;

// Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2
var ageDif = person.pets[0].age - person.pets[2].age;
secondItem.innerText = `Intre ${person.pets[0].name} si ${person.pets[2].name} este o diferenta de ${ageDif} ani.`;

// Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”
var name = person.firstName;
var surname = person.lastName;
var birthYear = person.birthYear;
var zipCode = person.zipCode;

thirdItem.innerText = `Ma numesc ${name} ${surname}, m-am nascut in ${birthYear} si codul meu postal este: ${zipCode}.`;

// Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea.

var firstPetBirthAge = 2021 - person.pets[0].age;
var secondPetBirthAge = 2021 - person.pets[1].age;
var thirdPetBirthAge = 2021 - person.pets[2].age;

fourthItem.innerText = `Animalele mele s-au nascut in ${firstPetBirthAge}, ${secondPetBirthAge}, respectiv ${thirdPetBirthAge}.`;
