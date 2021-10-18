var person = {
  name: 'Andrei',
  surname: 'Asanache',
  age: 29,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.`,
);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(`In mod similar, afiseaza skillurile care contin litera a.`);
person.skills.forEach(function (skill) {
  if (skill.indexOf('a') === true) {
    console.log(skill);
  }
});

console.warn(
  ` Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."`,
);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var name = friend.name;
  var surname = friend.surname;
  var punctuation = ', ';

  if (index === friends.length - 1) {
    punctuation = '.';
    // } else if (index === friends.length - 2) {
    //   punctuation = ' si ';
    // }
  }

  message = `${message}${name} ${surname}${punctuation}`;
});
console.log(message);

console.warn(`
  Folosind forEach, afiseaza numarul total de ani
  pe care il au persoanele din arrayul friends,
  doar daca au varsta mai mare decat 30 inclusiv.
`);
var sumYears = 0;
person.friends.forEach(function (friend) {
  var age = friend.age;
  if (age >= 30) {
    // sumYears = sumYears + age;
    sumYears += age;
  }
});
console.log(sumYears.toString());

console.warn(`
  Folosind forEach, afiseaza suma anilor de nastere a
  persoanelor care au varsta impara.
`);
var sumBirthYears = 0;
person.friends.forEach(function ({ age }) {
  // Date()
  if (age % 2 === 0) {
    return;
  }

  var birthYear = 2021 - age;

  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(`
  Afiseaza diferenta de varsta dintre
  persoana si prietenii din arrayul friends
  daca aceasta este mai mare sau egala cu 2 ani.
`);
person.friends.forEach(function (friend) {
  var { age } = friend;
  // age = friend.age;
  var ageDiff = Math.abs(person.age - age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(`
  Folosind metoda reverse si apoi forEach,
  afiseaza in ordine inversa elementele arrayului skills.
`);
person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });

console.warn(`
  Afiseaza fraza:
  "Intre Dragos si Larry este o diferenta de xx ani.
  Intre Dragos si Steven... "`);
var message = '';
person.friends.forEach(function (friend, index, friends) {
  var ageDiff = Math.abs(friend.age - person.age);
  var finalSpace = index === friends.length - 1 ? '' : ' ';

  // if (index === friends.length - 1) {
  //   finalSpace = '';
  // } else {
  //   finalSpace = ' ';
  // }

  message = `${message}Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.${finalSpace}`;
});
console.log(message);

console.warn(
  `Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.`,
);

person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(`In mod similar, afiseaza skillurile care nu incep cu j.`);

person.skills.forEach(function (skill) {
  if (skill.startsWith('j') !== true) {
    console.log(skill);
  }
});

console.warn(
  ` Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."`,
);

var message = 'Numele mari ale prietenilor mei sunt ';

person.friends.forEach(function (friend, index, friends) {
  var friendName = friend.surname;
  var punctuation = ', ';

  if (index === friends.length - 1) {
    punctuation = '.';

    // ptr pixeltab verde
    friendName = friend.name;
  }

  message = `${message}${friendName}${punctuation}`;
});
console.log(message);

console.warn(
  ` Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends `,
);

var totalAge = 0;
person.friends.forEach(function ({ age }) {
  totalAge = totalAge + age;
});
console.log(totalAge.toString());

console.warn(
  ` Folosind forEach, afiseaza suma anilor de nastere a persoanelor `,
);

var sumBirthYears = 0;
person.friends.forEach(function ({ age }) {
  var birthYear = 2021 - age;

  sumBirthYears += birthYear;
});
console.log(sumBirthYears.toString());

console.warn(
  ` Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.`,
);

person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(friend.age - person.age);

  console.log(ageDiff);
});

console.warn(
  ` Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.`,
);

person.friends
  .slice()
  .reverse()
  .forEach(function (friend) {
    var friendName = friend.name;
    var friendSurname = friend.surname;

    console.log(`${friendName} ${friendSurname}`);
  });
