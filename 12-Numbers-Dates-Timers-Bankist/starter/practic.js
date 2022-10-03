// const future = new Date(2037, 10, 19, 15, 23);
// console.log(+future);
// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
// const days1 = calcdaysPassed(
//   new Date(2037, 3, 14),
//   new Date(2037, 3, 24, 10, 8)
// );
// console.log(days1);

// const num = 3884764.23;
// const option = {
//   style: 'unit',
//   unit: 'mile-per-hour',
// };
// console.log('US: ', new Intl.NumberFormat('en-US', option).format(num));
// console.log('Germany: ', new Intl.NumberFormat('de-DE', option).format(num));
const ingredients = ['olives', ''];

const pizzaTimer = setTimeout(
  (ing1, ing2) =>
    console.log(`Here is your pizza with ${ing1} and ${ing2}🍕🍕`),
  3000,
  ...ingredients
);
console.log('Wading');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);
//setInterval
setInterval(() => {
  const now = new Date();
  console.log(now);
}, 1000);
