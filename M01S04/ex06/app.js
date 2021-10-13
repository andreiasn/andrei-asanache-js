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
    'jquerry',
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

console.warn(`a1`);

var i;
for (i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

var skillsLength = person.skills.length;

console.warn(`a2`);

for (i = 0; i < skillsLength; i++) {
  var skillName = person.skills[i];
  if (skillName[0].toLocaleLowerCase() !== 'j') {
    console.log(skillName);
  }
}

console.warn(`a3`);

var message = 'Prietenii mei se numesc ';

for (i = 0; i < person.friends.length; i++) {
  var friend = person.friends[i];
  var punctuation = ', ';

  if (i === person.friends.length - 1) {
    punctuation = '.';
  }
  message = `${message}${friend.name} ${friend.surname}${punctuation}`;
}

console.log(message);

console.warn(`a4`);

var sumYears = 0;
var friendsLength = person.friends.length;

for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];

  if (friend.age >= 30) {
    sumYears = sumYears + friend.age;
  }
}
console.log(sumYears.toString());

console.warn(`a5`);
var sumBirthYears = 0;

for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];

  sumBirthYears = sumBirthYears + (2021 - friend.age);
}
console.log(sumBirthYears + '');

console.warn(`a6`);
for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];
  var diff = Math.abs(person.age - friend.age);

  if (diff > 2) {
    console.log(diff);
  }
}

console.warn(`a7`);
message = '';
for (i = 0; i < friendsLength; i++) {
  var friend = person.friends[i];

  if (i === friendsLength - 1) {
    finalSpace = '';
  }

  if (friend.age % 2 !== 0) {
    message = `${message}Intre ${person.name} si ${
      friend.name
    } este o diferenta de ${Math.abs(
      friend.age - person.age,
    )} ani.${finalSpace}`;
  }
}
console.log(message.trim());

console.warn(`a8`);

for (i = skillsLength - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}
