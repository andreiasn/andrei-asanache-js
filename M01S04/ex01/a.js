var name = prompt('Introdu numele tau');
var messageContainer = document.getElementById('message');
var alternateMessageContainer = document.getElementById('alternate-message');
var inputLength = name.replaceAll(' ', '').length;
var testLetter = 'a';
var message = '';

if (inputLength <= 3) {
  message = 'Nu ai introdus un nume suficient de lung.';
} else {
  message = `Numele meu este: ${name}`;
}

var lengthMessage = `Numele introdus are ${inputLength} caractere.`;
var inclusionMessage = '';

if (name.includes('a')) {
  inclusionMessage = `Numele contine litera ${testLetter}`;
} else {
  inclusionMessage = `Numele nu contine litera ${testLetter}`;
}

messageContainer.innerText = message;
alternateMessageContainer.innerText = `${lengthMessage} | ${inclusionMessage}`;

const name = document.getElementById('name');
const button = document.getElementsByName('submit');
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  const alertMessage = name.value;

  if (alertMessage.length === 0) {
    alert('Please add a name.');
  } else {
    alert(alertMessage);
  }

  e.preventDefault();
});
