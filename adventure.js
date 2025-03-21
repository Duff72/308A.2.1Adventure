//part 1

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

// adventurer.roll();
// adventurer.roll();
// adventurer.roll();

//part 2

class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }
}

// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// robin.roll();
// robin.companion.roll();
// robin.companion.companion.roll();

//part 3

class Adventurer extends Character {
  constructor(name, role, catchphrase) {
    super(name);
    this.role = role;
    this.inventory.push("bedroll", "50 gold coins");
    this.catchphrase = catchphrase;
  }
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  specialAttack() {
    console.log(`${this.name} attacks and says "${this.catchphrase}"`);
    super.roll(5);
  }
}

class Companion extends Character {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  bite() {
    console.log(`${this.name} bites their enemy!`);
    super.roll(-2);
  }
}

const robin = new Adventurer(
  "Robin",
  "Fighter",
  "I think that enemy got the point!"
);

robin.inventory.push("sword", "potion", "artifact");
robin.companion = new Companion("Leo", "Cat");
robin.companion.companion = new Companion("Frank", "Flea");
robin.companion.companion.inventory.push("small hat", "sunglasses");

robin.specialAttack();
robin.companion.bite();
robin.companion.companion.bite();

//part 4
