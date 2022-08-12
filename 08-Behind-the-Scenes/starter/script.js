'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     const outPut = `${firstName} You are ${age}, bron in ${birthYear}`;
//     console.log(outPut);
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       const str = `oh, and you are a millenial, ${firstName}`;
//       console.log(str);
//     }
//     console.log(str);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Sadid';
// calcAge(1992);
// console.log(age);
// printAge();

// const sadid = {
//   year: 1992,
//   calcAge: function () {
//     console.log(2037 - this.year);
//   },
// };

// const jones = {
//   year: 1996,
// };
// jones.calcAge = sadid.calcAge;

// console.log(jones);
// sadid.calcAge();
// jones.calcAge();

const sadid = {
  firstName: 'Sadid',
  year: 1992,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // const self = this;
    // const isMillenial = function () {
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => console.log(`Hey ${this.firstName}`),
};

// sadid.greet();
// sadid.calcAge();

// argument key words

// const addExpr = function (a, b) {
//   console.log(arguments);
//   console.log(arguments[2]);
//   return a + b;
// };
// addExpr(2, 5, 8, 12);
// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5, 8);

const me = {
  name: 'Sadid',
  age: 30,
};
const friend = me;

friend.age = 27;
console.log('Me:', me);
console.log('Friend:', friend);
