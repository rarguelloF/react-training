import initialState from 'src/initialState';
import { insertProductToCart } from 'src/helpers/cart';


export default function cart(state = initialState.cart, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const updatedCart = insertProductToCart(state.products, action.product, action.quantity);

      return {
        ...state,
        products: updatedCart,
      };
    }
    default: {
      return state;
    }
  }
}
