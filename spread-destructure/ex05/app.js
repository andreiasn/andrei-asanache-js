let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: ['html', 'javascript', 'css'],
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

console.warn(`1`);
// sintactic sugar pt const skills = person.skills[2]
const [skill1, , skill3] = person.skills;
console.log(`Cunosc ${skill1} si ${skill3}.`);

console.warn('2');
const [, { name: friend2Name, surname: friend2Surname, age: friend2Age }] =
  person.friends;
console.log(
  `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} de ani.`,
);
