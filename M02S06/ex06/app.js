const createPersonsUl = (persons) => {
  const personsUl = document.createElement('ul');

  if (persons.length <= 0) {
    const emptyLi = document.createElement('li');
    emptyLi.textContent = 'No persons on the server';

    personsUl.append(emptyLi);

    document.body.append(personsUl);

    return;
  }

  persons.forEach(({ name, skills }) => {
    // const name = person.name
    // const skills = person.skills
    const personLi = document.createElement('li');
    personLi.innerText = name;

    // one liner
    personLi.append(createSkillsUl(skills));

    personsUl.append(personLi);
  });

  document.body.append(personsUl);
};

const skillsUl = (skills) => {
  const skillsUl = document.createElement('ul');

  // validate data (array length)

  skills.forEach((skill) => {
    const skillLi = document.createElement('li');
    skillLi.innerText - skill;

    skillsUl.append(skillLi);
  });
};

$.get('http://localhost:8080/persons').done((result) => {
  createPersonsUl(result.persons);
});

personForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
