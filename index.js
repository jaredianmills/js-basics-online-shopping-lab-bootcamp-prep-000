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
  var itemsAndPrices = ` ${cart[i][`itemName`]} at $${cart[i][`itemPrice`]}`;
  var lastItemAndPrice = ` and ${cart[i][`itemName`]} at $${cart[i][`itemPrice`]}`;
  if (cart.length = 0) {
    return "Your shopping cart is empty."
  } else {
      for (let i = 0; i < cart.length; i++) {
        viewArray.push(`${itemsAndPrices}`)
  }
    return `${inYour}${itemsAndPrices}.`
  }
}

addToCart('hat')
addToCart('tea')

console.log(viewCart())
