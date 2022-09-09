// const checkDogs = function (jDog, ndog) {
//   const correctedDog = jDog.slice();
//   correctedDog.splice(0, 1);
//   correctedDog.splice(-2);
//   const dog = correctedDog.concat(ndog);
//   dog.forEach(function (dogs, index) {
//     if (dogs > 3) {
//       console.log(
//         `Dog Number ${index + 1} is an adult, and is ${dogs} year old 🐶`
//       );
//     } else {
//       console.log(
//         `Dog Number ${index + 1} is an puppy, and is ${dogs} year old 🐕‍🦺🐕‍🦺🐕‍🦺`
//       );
//     }
//   });
// };
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUsd = 1.1;
const movementsUSD = movements.map(function (mov) {
  return mov * euroToUsd;
});

// console.log(movements);
// console.log(movementsUSD);

const movementsUSDFor = [];
for (const mov of movements) {
  movementsUSDFor.push(mov * euroToUsd);
}

// console.log(movementsUSDFor);

const move = movements.map(mov => mov * euroToUsd);
// console.log(movements);
// console.log(move);

const movementDes = movements.map((mov, i, arr) => {
  if (mov > 0) {
    return `Movement ${i + 1}: You deposited ${mov}`;
  } else {
    return `Movement ${i + 1}: You withdraw ${Math.abs(mov)}`;
  }
});
console.log(movementDes);

const user = 'Steven Thomas Williams';
const username = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');
console.log(username);

const withdrawals = movements.filter(function (mox) {
  return mox < 0;
});
console.log(withdrawals);

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration ${i} ${acc}`);
  return acc + cur;
}, 0);
console.log(balance);

const max = movements.reduce(function (acc, mov, i, arr) {
  if (acc > mov) {
    console.log(`${i}: acc : ${acc} mov: ${mov}`);
    console.log(`${i}: acc : ${acc}`);
    return acc;
  } else {
    console.log(`${i}: acc : ${acc} mov: ${mov}`);
    console.log(`${i}: mov : ${mov}`);
    return mov;
  }
}, 300);
console.log(max);
