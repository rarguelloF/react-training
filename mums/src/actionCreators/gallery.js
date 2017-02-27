
export const addProductToCart = (product, quantity) => ({
  type: 'ADD_PRODUCT_TO_CART',
  product,
  quantity,
});

export const clickAllFilter = () => ({
  type: 'CLICK_ALL_FILTER',
});

export const clickMainDishFilter = () => ({
  type: 'CLICK_MAIN_DISH_FILTER',
});

export const clickDrinkFilter = () => ({
  type: 'CLICK_DRINK_FILTER',
});

export const clickDessertFilter = () => ({
  type: 'CLICK_DESSERT_FILTER',
});

export const changePriceFilter = price => ({
  type: 'CHANGE_PRICE_FILTER',
  price,
});
