export const cart = [];

export function addToCart(productId) {
  let match;
  cart.forEach((item) => {
    if (productId === item.productId) {
      match = item;
    }
  });
  if (match) {
    match.quantity += 1;
  } else {
    cart.push({
      productId,
      quantity: 1
    });
  }
}
