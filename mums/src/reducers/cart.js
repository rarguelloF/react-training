import initialState from '../initialState';

export default function cart(state = initialState.cart, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const index = state.products.findIndex(product => product.id === action.product.id);

      const products = index !== -1 ?
      [
        ...state.products.slice(0, index),
        {
          ...state.products[index],
          quantity: state.products[index].quantity + action.quantity,
        },
        ...state.products.slice(index + 1),
      ] :
      state.products.concat([{ ...action.product, quantity: action.quantity }]);

      return {
        ...state,
        products,
      };
    }
    default: {
      return state;
    }
  }
}
