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
  static MAX_HEALTH = 100; //Add a static MAX_HEALTH property to the Character class, equal to 100.
  static ROLES = ["Fighter", "Healer", "Wizard", "Archer"]; // Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
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
    if (Character.ROLES.includes(role)) {
      //Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.
      this.role = role;
    } else {
      console.log(
        `Invalid role "${role}". Please choose from: ${Character.ROLES}`
      );
    }
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
  duel(adventurer) {
    console.log(this.health);
    console.log(adventurer.health);
    this.roll();
    adventurer.roll();
    while (this.health > 50 && adventurer.health > 50) {
      //hdoufhgidfgnh it not working
      // sofhndfiuhndfhnsdgkoldfgindfh
      // sodigdofihodfingdfogn
      if (adventurer.roll > this.roll) {
        this.roll();
        adventurer.roll();
        this.health--;
        console.log(this.health);
      } else if (adventurer.roll < this.roll) {
        this.roll();
        adventurer.roll();
        adventurer.health--;
        console.log(adventurer.health);
      }
    }
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

// robin.specialAttack();
// robin.companion.bite();
// robin.companion.companion.bite();

//part 4

// // Add a static MAX_HEALTH property to the Character class, equal to 100.
// Add a static ROLES array to the Adventurer class, with the values “Fighter,” “Healer,” and “Wizard.” Feel free to add other roles, if you desire!
// Add a check to the constructor of the Adventurer class that ensures the given role matches one of these values.

const soveliss = new Adventurer("Soveliss", "Archer", "Bullseye!");

//part 5

class AdventurerFactory {
  constructor(role) {
    this.role = role;
    this.adventurers = [];
  }
  generate(name, catchphrase) {
    const newAdventurer = new Adventurer(name, this.role, catchphrase);
    this.adventurers.push(newAdventurer);
  }
  findByIndex(index) {
    return this.adventurers[index];
  }
  findByName(name) {
    return this.adventurers.find((a) => a.name === name);
  }
}

const healers = new AdventurerFactory("Healer");
const shadowheart = healers.generate(
  "Shadowheart",
  "Someone called for a doctor?"
);
// console.log(shadowheart);
// console.log(AdventurerFactory.adventurers);
// console.log(healers);

// part 6

// Create an additional method, duel(), for the Adventurer class with the following functionality:
// Accept an Adventurer as a parameter.
// Use the roll() functionality to create opposing rolls for each adventurer.
// Subtract 1 from the adventurer with the lower roll.
// Log the results of this “round” of the duel, including the rolls and current health values.
// Repeat this process until one of the two adventurers reaches 50 health.
// Log the winner of the duel: the adventurer still above 50 health.

soveliss.duel(robin);
// console.log(soveliss.health);
// console.log(robin.health);
