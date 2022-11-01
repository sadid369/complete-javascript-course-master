//Exporting Modules
console.log('Exporting Modules');
//blocking code
// console.log('Start facting users');
// await fetch('https://jsonplaceholder.typicode.com/posts');
// console.log('finished');

const shippingCost = 10;

export const cart = [];

export const addToCart = function (products, quantity) {
  cart.push({ products, quantity });
  console.log(`${quantity} ${products} added to cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as tq };
