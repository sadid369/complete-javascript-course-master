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
// consoleclear.log(movementDes);

const user = 'Steven Thomas Williams';
const username = user
  .toLowerCase()
  .split(' ')
  .map(name => name[0])
  .join('');
// console.log(username);

const withdrawals = movements.filter(function (mox) {
  return mox < 0;
});
// console.log(withdrawals);

const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`iteration ${i} ${acc}`);
  return acc + cur;
}, 0);
// console.log(balance);

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
// console.log(max);

const firstWithdrawal = movements.find((mov, i, arr) => {
  console.log(arr);
  return mov < 0;
});
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

console.log(movements);
console.log(movements.includes(-130));
const anyDeposit = movements.some(mov => mov > 5000);
console.log(anyDeposit);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
const arrDeep = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(arrDeep.flat(2));

const accountMovement = accounts.map(acc => acc.movements);
console.log(accountMovement);
const allMovements = accountMovement.flat();
console.log(allMovements);
const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

const arr1 = [1, 2, 3];
const arr3 = Array.from(arr1);
console.log(arr3);

const bankDepositSum = accounts.map(acc => acc.movements);

console.log(bankDepositSum);
