// DOM Content Loaded

// bad and deprecated:

// $(document).ready(function() {

// });

$(function () {
  $personForm = $('#persoForm').on('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const person = {};

    for (const fieldData of formData.entries()) {
      const [fieldName, fieldValue] = fieldData;

      person[fieldName] = fieldValue;
    }

    const $personContainer = renderPerson(person);
  });

  // hoisting
  function renderPerson(person) {
    const $personContainer = $('<article>');

    $('<h1>', {
      text: `${person.name} ${person.surname}`,
    }).appendTo($personContainer);

    $('<p>', {
      text: 'Varsta: ${personage',
    }).appendTo($personContainer);

    return $personContainer;
  }
});
