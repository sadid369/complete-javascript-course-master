'use strict';

// // Data needed for a later exercise

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = '20:00',
//     address,
//   }) {
//     console.log(starterIndex, mainIndex, time, address);
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `Here is your declious pasta with ${ing1} ,${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredient) {
//     console.log(mainIngredient, otherIngredient);
//   },
// };

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);
// // // restaurant.numGuests = 0;
// // const guests = restaurant.numGuests || 10;
// // console.log(guests);
// // //Nullish: null and undefined (NOT 0 or "")
// // const guestCorrect = restaurant.numGuests ?? 10;
// // console.log(guestCorrect);

// // console.log('----OR----');
// // console.log(3 || 'Sadid');
// // console.log('' || 'Sadid');
// // console.log(true || 0);
// // console.log(undefined || null);
// // console.log(null || undefined);
// // // restaurant.numGuests = 23;
// // const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// // console.log(guests1);

// // const guests2 = restaurant.numGuests || 10;
// // console.log(guests2);
// // console.log('----AND----');
// // console.log(0 && 'Sadid');
// // console.log(7 && 'Sadid');

// // restaurant.orderPizza('Mashroom', 'a', 'b', 'c');
// // restaurant.orderPizza('a');
// // const arr = [1, 2, ...[3, 4]];
// // const [a, b, ...others] = [1, 2, 3, 4, 5];
// // console.log(a, b, others);
// // const [pizza, , risotto, ...others] = [
// //   ...restaurant.mainMenu,
// //   ...restaurant.starterMenu,
// // ];
// // console.log(pizza, risotto, others);

// // objects

// // const { sat, ...weekdays } = restaurant.openingHours;
// // console.log(weekdays);
// // const add = function (...num) {
// //   let sum = 0;
// //   for (let i = 0; i < num.length; i++) {
// //     sum += num[i];
// //   }
// //   console.log(sum);
// // };
// // add(1, 5, 8, 5, 8, 93, 4, 7878, 5);

// // const x = [23, 5, 7];
// // add(...x);
// // const { name, openingHours, categories } = restaurant;
// // console.log(name, openingHours, categories);
// // const {
// //   name: restaurantName,
// //   openingHours: hours,
// //   categories: tags,
// // } = restaurant;
// // console.log(restaurantName, hours, tags);

// // const { manu = [], starterMenu: starters = [] } = restaurant;
// // console.log(manu, starters);

// // let a = 111;
// // let b = 999;

// // const obj = { a: 23, b: 7, c: 14 };
// // ({ a, b } = obj);
// // console.log(a, b);

// // const {
// //   fri: { open: o, close: c },
// // } = openingHours;
// // console.log(o, c);

// // restaurant.orderDelivery({
// //   time: '22:30',
// //   address: 'Barisal',
// //   mainIndex: 2,
// //   starterIndex: 2,
// // });
// // restaurant.orderDelivery({
// //   address: 'Barisal',
// // });
// // const arr = [7, 8, 9];
// // const badNewArr = [1, 2, ...arr];
// // console.log(badNewArr);
// // console.log(...badNewArr);
// // const newMenu = [...restaurant.mainMenu, 'Kacchi'];
// // console.log(newMenu);

// // // copy array
// // const mainMenuCopy = [...restaurant.mainMenu];
// // // join 2 arrays
// // const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// // console.log(...menu);
// // const str = 'Sadid';
// // const letters = [...str, '', 's.'];
// // console.log(...str);
// // // const ingre = [
// // //   prompt("Let's make pasta! ingredient 1 ?"),
// // //   prompt("Let's make pasta! ingredient 2 ?"),
// // //   prompt("Let's make pasta! ingredient 3 ?"),
// // // ];
// // // console.log(ingre);
// // // restaurant.orderPasta(...ingre);

// // // objects
// // const newRestaurant = { ...restaurant };
// // console.log(newRestaurant);

// // // console.log(menu);
// // // const arr = [2, 3, 4];

// // // const [x, y, z] = arr;
// // // console.log(x, y, z);
// // // console.log(arr);

// // // let [main, , second] = restaurant.categories;
// // // console.log(main, second);
// // // [main, second] = [second, main];
// // // console.log(main, second);

// // // const [strater, mainCourse] = restaurant.order(2, 0);
// // // console.log(strater, mainCourse);

// // // const nested = [2, 4, [5, 6]];
// // // const [i, , [j, k]] = nested;
// // // console.log(i, j, k);

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'Tap Air Portugal';
const plane = 'A320';

console.log(airline.lastIndexOf('r'));
