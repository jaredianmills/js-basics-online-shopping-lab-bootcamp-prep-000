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
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  } else {
      for (let i = 0; i < cart.length; i++) {
        var itemsAndPrices = ` ${cart[i]['itemName']} at $${cart[i]['itemPrice']}`;
        viewArray.push(`${itemsAndPrices}`)
  }
    if (viewArray.length === 1) {
      return `${inYour}${viewArray}.`
    } else {
      var lastItem = viewArray.pop()
      return `${inYour}${viewArray}, and${lastItem}.`
    }
    }
}

function total() {
  var prices = [];
  var sum = 0;
  for (let i = 0; i < cart.length; i++) {
    prices.push(cart[i]['itemPrice']);
    sum += prices[i];
    }
  return sum;
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    var removeItem = cart[i]['itemName']
    if (item === removeItem) {
      cart.splice(i, 1);
      return cart;
    } else {
      return "That item is not in your cart."
    }
  }
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } else {
    var orderPlaced = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
    cart.length = 0;
    return orderPlaced;
  }
}

addToCart('hat')
addToCart('egg')
addToCart('cup')


removeFromCart('egg')
console.log(cart)
