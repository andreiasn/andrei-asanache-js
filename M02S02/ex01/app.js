// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.appendChild(p);

const $body = $('body');
const $p = $('<p>', {
  text: 'Textul paragrafului',
  id: 'myParagraph',
  class: 'clase de css',
});
const $paragraph = $('<p>', {
  text: 'Parola nu trebuie sa fie mai mica de 5.',
});

$p.appendTo($body);
// v2
// $('body').append($p);
$body.append($paragraph);

setTimeout(() => {
  $paragraph.addClass('error');
}, 1000 * 3);

// selection
$('#myParagraph').text('Am schimbat dinamic acest paragraf');

const $span = $('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($paragraph);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($('.container'));

const $navigation = $('<div>', {
  class: 'navigation',
  text: 'Nav goes here',
});
const $container = $('.container');
$container.after($navigation);

const $anchor = $('<a>', {
  class: 'nav-link',
  text: 'Primul link',
  href: '',
});
$navigation.append($anchor);

const $title2 = $('<h2>', {
  text: 'Navigatie',
});

$title2.before($('.navigation .nav-link'));
$title2.appendTo($body);

const $sup = $('<sup>', {
  text: '1',
});
$sup.prependTo($('.nav-link'));
$sup.appendTo($navigation);

$navigation.appendTo($body);

const $title = $('<h1>', {
  text: 'Invat jQuery',
});

$title.before($container);
$title.appendTo($body);

const $finalParagraph = $('<p>', {
  text: 'Documentatia jQuery poate fi gasita ',
});

const $finalAnchor = $('<a>', {
  class: 'final-anchor',
  text: 'aici',
  target: 'blank',
  href: 'https://api.jquery.com',
});

$finalAnchor.appendTo($finalParagraph);
$finalParagraph.appendTo($body);
