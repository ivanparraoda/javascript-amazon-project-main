export const cart = [
  {
    productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
    quantity: 2
  },
  {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }
];

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
