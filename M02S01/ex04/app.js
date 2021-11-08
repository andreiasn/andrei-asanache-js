class Car {
  areLightsOn = false;

  constructor(xPos = 0, yPos = 0, color = 'black', wheelsColor = 'black') {
    this.xPos = xPos;
    this.yPos = yPos;
    this.color = color;
    this.wheelsColor = wheelsColor;
  }

  moveTo(x = 0, y = 0) {
    this.frame.style.left = `${x}px`;
    this.frame.style.top = `${y}px`;
  }

  changeBodyColor(color = 'red') {
    this.carBody.style.backgroundColor = color;
    this.carTop.style.backgroundColor = color;
  }

  changeWheelsColor(wheelsColor = 'green') {
    this.wheelFront.style.backgroundColor = wheelsColor;
    this.wheelBack.style.backgroundColor = wheelsColor;
  }

  turnLightsOn() {
    this.areLightsOn = true;
    this.lightFront.classList.add('light--on');
  }

  turnLightsOff() {
    this.areLightsOff = false;
    this.lightFront.classList.remove('light--on');
  }

  engageBreak() {
    this.areLightsOn = true;
    this.lightBack.classList.add('light--on');
  }

  disengageBreak() {
    this.areLightsOn = true;
    this.lightBack.classList.remove('light--on');
  }

  toggleHazards() {
    if (this.intervalId === null) {
      // start interval
      this.intervalId = setInterval(() => {
        if (this.areLightsOn === true) {
          this.turnLightsOff();
        } else {
          this.turnLightsOn();
        }
      }, 5000);
    } else {
      // stop interval
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.turnLightsOff();
    }
  }

  render() {
    // div.frame
    this.frame = document.createElement('div');
    this.frame.classList.add('frame');
    this.moveTo(this.xPos, this.yPos);

    //div.car
    this.car = document.createElement('div');
    this.car.classList.add('car');
    // div.car__top
    this.carTop = document.createElement('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    // div.car__body
    this.carBody = document.createElement('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    // div.light.light--back
    this.lightBack = document.createElement('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);

    // div.light.light--front
    this.lightFront = document.createElement('div');
    this.lightFront.classList.add(
      'light',
      'light--front',
      this.areLightOn === true ? 'light--on' : 'a',
    );
    this.carBody.append(this.lightFront);

    // div.wheel.car__wheel
    this.wheelBack = document.createElement('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.wheelBack.style.backgroundColor = this.color;
    this.carBody.append(this.wheelBack);

    // div.wheel.car__wheel
    this.wheelFront = document.createElement('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.wheelFront.style.backgroundColor = this.color;
    this.carBody.append(this.wheelFront);

    // div wheel_cap
    this.wheelCapBack = document.createElement('div');
    this.wheelCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.wheelCapBack);

    // div wheel_cap
    this.wheelCapFront = document.createElement('div');
    this.wheelCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.wheelCapFront);

    //apend car to frame
    this.frame.append(this.car);

    // real DOM v
    document.body.append(this.frame);
  }
}

const audi = new Car(250, 400, 'black');
audi.render();

console.warn(`Creeaza intr-un folder oarecare un script alaturat unui HTML care sa numere in consola de la 1 la 100 si daca numarul se divide cu 3 scrie Fizz, daca se divide cu 5 scrie Buzz si daca se divide cu ambele, scrie FizzBuzz
(atunci cand scrii cuvintele, omite numerele) `);

var i = 1;
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    console.log('Fizz');
    continue;
  }

  if (i % 5 === 0 && i % 3 !== 0) {
    console.log('Buzz');
    continue;
  }

  if (i % 3 === 0 && i % 5 === 0) {
    console.log('Buzzfizz');
    continue;
  }

  console.log(i);
}
