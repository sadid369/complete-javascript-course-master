//Importing Modules
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js ';
// addToCart('bread', 5);
// console.log(price, tq);

import * as ShoppingCart from './shoppingCart.js';

ShoppingCart.addToCart('bread', 6);
ShoppingCart.addToCart('apple', 7);
ShoppingCart.addToCart('orange', 9);

console.log(ShoppingCart.cart);

// console.log('START');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('END');
/*
const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  //   console.log(data);
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);


const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;
  const addToCart = function (products, quantity) {
    cart.push({ products, quantity });
    console.log(`${quantity} ${products} added to cart`);
  };
  const orderStock = function (products, quantity) {
    cart.push({ products, quantity });
    console.log(`${quantity} ${products} order from supplier`);
  };

  return { addToCart, cart, totalPrice, totalQuantity };
})();

ShoppingCart2.addToCart('Apples', 4);
ShoppingCart2.addToCart('Pizzas', 2);
console.log(ShoppingCart2.cart);

//Export
 export.addToCart = function (products, quantity) {
  cart.push({ products, quantity });
  console.log(`${quantity} ${products} added to cart`);
};

//Import
const {addToCart} = require('./shoppingCart.js')
*/
// import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
import cloneDeep from 'lodash-es';
const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};
const stateClone = Object.assign({}, state);
const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
if (module.hot) {
  module.hot.accept();
}
