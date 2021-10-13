var friends = [
  {
    name: 'Andrei',
    surname: 'Asanache',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

console.warn(`1`);

var i = 0;
var friendsLength = friends.length;
for (i = 0; i < friendsLength; i++) {
  var friend = friends[i];

  console.log(friend.surname);
}

console.warn(`2`);

for (i = 0; i < friendsLength; i++) {
  var friend = friends[i];
  var friendFullReversedName = `${friend.surname} ${friend.name}`;

  if (friend.name === 'Steven') {
    console.log(`M-am oprit la ${friendFullReversedName}.`);

    break;
  }
  console.log(friendFullReversedName);
}

console.warn(`3`);

for (i = 0; i < friendsLength; i++) {
  var friend = friends[i];
  var fullNameLength = `${friend.name}${friend.surname}`.length;
}
