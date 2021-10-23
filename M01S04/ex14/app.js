var person = {
  firstName: 'Andrei',
  lastName: 'Asanache',
  birthYear: 1992,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  `Afiseaza in consola folosind metoda forEach() numele fiecarui animal. `,
);
person.pets.forEach(function (pet) {
  var petName = pet.name;

  console.log(petName);
});

console.warn(`Folosind o bucla for afiseaza suma anilor animalelor. `);
var petsLength = person.pets.length;
var sumYears = 0;
for (i = 0; i < petsLength; i++) {
  var pet = person.pets[i];
  var petAge = pet.age;

  sumYears = sumYears + petAge;
}
console.log(sumYears);

console.warn(
  `Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.`,
);

person.pets.forEach(function (pet) {
  var petName = pet.name;
  var petSpec = pet.species;
  var petAge = pet.age;

  console.log(`${petName} este ${petSpec} si are ${petAge} ani.`);
});

console.warn(
  `Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).`,
);

for (i = 0; i < petsLength; i++) {
  var pet = person.pets[i];
  var petName = pet.name;
  var personName = person.firstName;
  var petAge = pet.age;
  var personAge = 2021 - person.birthYear;
  var ageDiff = personAge - petAge;

  console.log(
    `Intre ${personName} si ${petName} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(
  `Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”. `,
);

for (i = petsLength - 1; i >= 0; i--) {
  var pet = person.pets[i];
  var petName = pet.name;

  console.log(`Animalul meu se numeste ${petName}`);
}

console.warn(
  `Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai `,
);
for (i = 0; i < petsLength; i++) {
  var pet = person.pets[i];
  var petName = pet.name;
  var petAge = pet.age;
  var personAge = 2021 - person.birthYear;
  var ageDiff = personAge - petAge;
  var oldestPet = person.pets[0].age;

  oldestPet = Math.max(oldestPet, petAge);
}
console.log(
  `${petName} este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${ageDiff} ani.`,
);

console.warn(
  `Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.`,
);

var message = 'Am ';
person.pets.forEach(function (pet, index) {
  var petSpec = pet.species;
  var punctuation = ', ';

  if (index === person.pets.length - 1) {
    punctuation = '.';
  }

  if (index === person.pets.length - 2) {
    punctuation = ' si ';
  }

  message = `${message}${petSpec}${punctuation}`;
});
console.log(message);
