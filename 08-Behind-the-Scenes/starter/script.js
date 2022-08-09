'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const outPut = `${firstName} You are ${age}, bron in ${birthYear}`;
    console.log(outPut);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }
    console.log(str);
  }
  printAge();

  return age;
}

const firstName = 'Sadid';
calcAge(1992);
// console.log(age);
// printAge();
