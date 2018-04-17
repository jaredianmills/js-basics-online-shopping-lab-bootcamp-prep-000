var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = parseInt(Math.random() * Math.floor(99)) + 1;
  cart.push({itemName: `${item}`, itemPrice: parseInt(`${price}`)});
  return `${item} has been added to your cart.`;
}

function viewCart() {
  var inYour = 'In your cart, you have';
  var viewArray = [];
  var itemsAndPrices = ` ${cart[itemName]} at ${cart[itemPrice]}}`;
  for (let i = 0; i < cart.length; i++) {
    viewArray.push(itemsAndPrices)
  }
  return `${inYour}${itemsAndPrices}`
}

addToCart('dog')
addToCart('cat')
addToCart('wine')

console.log(viewCart())
