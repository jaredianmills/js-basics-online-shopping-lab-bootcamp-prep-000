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
  var inYour = 'In your cart, you have'
  var viewArray = []
  for (let i = 0; i < cart.length; i++) {
    viewArray.push(` ${cart}`)
  }
}

var itemsAndPrices = ` ${cart[0]}`

var test = {One: 1, Two: 2, Three: 3}
