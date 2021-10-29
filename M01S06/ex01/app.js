const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  isTrunkOpen: false,
  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },
  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },
  popTrunk: function () {
    this.openTrunk();

    setTimeout(() => {
      this.closeTrunk();
    }, 5000);
  },
  areLightsOn: false,
  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  flashLights: function () {
    this.turnLightsOn();

    setTimeout(() => {
      this.turnLightsOff();
    }, 2000);
  },
  topSpeed: 160,
  topReverseSpeed: -50,
  stop() {
    this.speed = 0;

    console.log(this.speed);
  },
  setSpeed(speed) {
    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    this.speed = speed;
  },
};

console.warn(
  `Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".`,
);
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);

console.warn(
  `Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".`,
);
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
car.decelerate();
console.log(`Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h.`);
