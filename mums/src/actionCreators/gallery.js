
export function addProductToCart(product, quantity) {
  return {
    type: 'ADD_PRODUCT_TO_CART',
    product,
    quantity,
  };
}

export const clickAllFilter = () => ({ type: 'CLICK_ALL_FILTER' });
export const clickMainDishFilter = () => ({ type: 'CLICK_MAIN_DISH_FILTER' });
export const clickDrinkFilter = () => ({ type: 'CLICK_DRINK_FILTER' });
export const clickDessertFilter = () => ({ type: 'CLICK_DESSERT_FILTER' });

export function removeCategoryFilter(category) {
  return {
    type: 'REMOVE_CATEGORY_FILTER',
    category,
  };
}

export function removeAllCategoryFilter() {
  return {
    type: 'REMOVE_ALL_CATEGORY_FILTERS',
  };
}
