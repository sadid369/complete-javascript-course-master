'use strict';

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
