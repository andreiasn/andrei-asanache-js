const paragraphLog = () => {
  let logContainer = document.querySelector('.logs');
  const messageElement = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');
    document.body.append(logContainer);
  }

  for (i = 0; i < arguments.length; i++) {
    console.log;
  }

  messageElement.innerText = message;

  logContainer.append(messageElement);
};
