// console.log('Test Start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('Resolve promise 1').then(res => console.log(res));
// Promise.resolve('Resolve promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });

// console.log('Test End');

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery Draw Happening');
//   setTimeout(function () {
//     if (Math.random() > 0.5) {
//       resolve('You Win 😊');
//     } else {
//       reject(new Error('You Lost'));
//     }
//   }, 2000);
// });
// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// const wait = function (sec) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, sec * 1000);
//   });
// };

// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('waiting for 1 seconds'));

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos));
