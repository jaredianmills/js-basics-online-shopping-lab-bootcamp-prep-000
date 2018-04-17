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
