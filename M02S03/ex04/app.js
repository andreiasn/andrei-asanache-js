// load image & p element from DOM
const imageElement = document.geElementsByTagName('img');
const messageElement = document.querySelector('.message');

console.log(imageElement.complete);
// bind event to image
// imageElement.addEventListener('load', () => {
//   messageElement.textContent = 'Imaginea s-a incarcat.';
// });

// v2
imageElement.onload = () => {
  messageElement.textContent = 'Imaginea s-a incarcat';
  console.log(imageElement.complete);
};
