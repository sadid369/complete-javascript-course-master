'use strict';
/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const sadid = new Person('Sadid', 1992);
console.log(sadid);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('matilda', 2017);
const jack = new Person('jack', 1975);
console.log(matilda, jack);
const jay = 'jay';
console.log(jack instanceof Person);
console.log(sadid instanceof Person);
console.log(matilda instanceof Person);
console.log(matilda instanceof Person);
console.log(jay instanceof Person);

// new Person('sadid', 1992).calcAge();

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

sadid.calcAge();
matilda.calcAge();
console.log(sadid.__proto__);
console.log(sadid.__proto__ === Person.prototype);

Person.prototype.species = 'Homo Sapiens';

console.log(jack.species, matilda.species);

console.log(sadid.hasOwnProperty('firstName'));
console.log(sadid.hasOwnProperty('species'));

console.log(sadid.__proto__.__proto__);
console.log(sadid.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);


const Car = function (speed) {
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};
Car.prototype.break = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const bmw = new Car(120);
const mercedes = new Car(95);
bmw.accelerate();
bmw.break();
mercedes.accelerate();
mercedes.break();


class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
  get age() {
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) {
      this._fullName = name;
    } else {
      alert(`${name} is not full name`);
    }
  }
  get fullName() {
    return this._fullName;
  }
  static hey() {
    console.log('Hey Therererererere');
    console.log(this);
  }
}

const sadid = new PersonCl('Sadid M', 1992);
sadid.calcAge();

sadid.greet();

const account = {
  owner: 'sadid',
  movements: [200, 53, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};
console.log(account.latest);

account.latest = 50;
console.log(account.movements);

const walter = new PersonCl('Waletr White', 1965);
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.hey = function () {
  console.log('Hey There ✋🏽');
};

Person.hey();
PersonCl.hey();

class Car {
  constructor(speed) {
    this.speed = speed;
  }
  // set speedUS(speed) {
  //   this._speed = speed * 1.6;
  // }
  accelerate() {
    this.speed = this.speed + 10;
    console.log(this.speed);
  }
  break() {
    this.speed = this.speed - 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const car1 = new Car(120);
console.log(car1.speedUS);
car1.speedUS = 50;
car1.accelerate();
car1.break();
*/

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My Name is ${this.firstName} and I study ${this.course} `);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge();
