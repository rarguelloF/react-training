
export function addProductToCart(product, quantity) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    product,
    quantity,
  };
}
