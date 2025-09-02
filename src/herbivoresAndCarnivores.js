'use strict';

class Animal {
  static alive = [];
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;

    Animal.alive.push(this);
  }
}

class Herbivore extends Animal {
  constructor(health = 100, name) {
    super(health, name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(obj) {
    if (obj instanceof Herbivore && !obj.hidden) {
      obj.health -= 50;
      Animal.alive = Animal.alive.filter((animal) => animal !== obj);
    }
    if (obj.health <= 0) {
      Animal.alive = Animal.alive.filter((animal) => animal !== obj);
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
