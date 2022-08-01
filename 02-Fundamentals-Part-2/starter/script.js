// "use strict";

// let hasDriversLicense = false;

// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive");

// const interface = "audio";
// const private = 5374;

// function logger() {
//   console.log(" My name is Sadid");
// }

// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juices = `Juices with ${apples} apples and ${oranges} oranges `;
//   return juices;
// }
// const applesJuices = fruitProcessor(5, 0);
// console.log(applesJuices);
// console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const friends = ["a", "b", "c"];

// const l = friends.push("d");
// console.log(friends);
// console.log(l);
// friends.unshift("a1");
// friends.pop();
// friends.pop();
// friends.shift();
// console.log(friends.indexOf("b"));
// console.log(friends);
// console.log(friends.includes("a"));
// console.log(friends.includes("m"));

// const sadid = {
//   firstName: "Sadid",
//   lastName: "369",
//   age: 2037 - 1992,
//   friends: ["a", "b", "c"],
// };

// console.log(sadid.firstName);
// console.log(sadid.friends[1]);

// const sadid = {
//   firstName: "Sadid",
//   lastName: "369",
//   age: 2037 - 1992,
//   friends: ["a", "b", "c"],
// };
// console.log(sadid);

// console.log(sadid.lastName);
// console.log(sadid["lastName"]);
// const nameKey = "Name";
// console.log(sadid["first" + nameKey]);
// console.log(sadid["last" + nameKey]);

// const a = prompt("What do know");

// sadid.location = "Barisal";
// sadid["twitter"] = "Sadid_369";

// if (sadid[a]) {
//   console.log(sadid[a]);
// } else {
//   console.log("wrong req");
// }
// console.log(
//   `${sadid.firstName} has ${sadid.friends.length} and his best friend is ${sadid.friends[0]}`
// );

// const sadid = {
//   firstName: "Sadid",
//   lastName: "369",
//   birthYear: 1992,
//   job: "Flutter Developer",
//   friends: ["a", "b", "c"],
//   hasDriverLicense: true,
//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },
//   // calcAge: function () {
//   //   console.log(this);
//   //   return 2037 - this.birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     // return this.age;
//   },
//   getSummary: function () {
//     this.summary = `${this.firstName} is a ${this.age}-year old ${
//       this.job
//     }, and he has ${this.hasDriverLicense ? "a" : "No"} driver's license `;
//   },
// };
// sadid.calcAge();
// sadid.getSummary();
// // const age1 = sadid["calcAge"](sadid["birthYear"]);
// // console.log(age1);

// console.log(sadid.summary);

// let user = {
//   id: 339,
//   name: "Sadid",
//   age: 30,
//   // education: {
//   //   degree: "BBA",
//   // },
// };

// const { name, ...rest } = user;

// var numbers = [1, 2, 3, 4, 6];
// const [a, b] = numbers;
// console.log(a, b);

// var a, b;
// ({ a, b } = { a: 10, b: 20 });
// console.log(a, b);
// var user = {
//   id: 339,
//   name: "Sadid",
//   age: 30,
// };

// function show({ id, name, age }) {
//   console.log(id, name, age);
// }
// function show(z) {
//   return z;
// }
// // const x = show(user);
// // const { id, name, age } = x;
// // const { ...rest } = x;
// // console.log(name, id, age);
// // console.log(rest);

// const { id, name, age } = show(user);
// const { ...rest } = show(user);
// console.log(name, id, age);
// console.log(rest);

// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBMI();
// console.log(mark.bmi);
// john.calcBMI();
// console.log(john.bmi);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: prompt("Degrees celsius: "),
  };
  // console.warn(measurement.value);
  // console.error(measurement.value);
  console.log(typeof measurement.value);
  console.table(measurement);
  const kelvin = Number.parseInt(measurement.value) + 273;
  return kelvin;
};
console.log(measureKelvin());
