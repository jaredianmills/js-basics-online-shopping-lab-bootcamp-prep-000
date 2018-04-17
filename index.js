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
  for (let i = 0; i < cart.length; i++) {
    var itemsAndPrices = ` ${cart[i][itemName]} at ${cart[i][itemPrice]}}`;
    viewArray.push(itemsAndPrices)
  }
  return `${inYour}${viewArray}`
}

addToCart('dog')
addToCart('cat')
addToCart('wine')

console.log(cart[0][itemName])
