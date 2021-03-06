
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

export const changeSearchFilter = searchTerm => ({
  type: 'CHANGE_SEARCH_FILTER',
  searchTerm,
});

export const fetchProducts = (page, perPage) => ({
  type: 'FETCH_PRODUCTS_REQUESTED',
  page,
  perPage,
});

export const changePage = page => ({
  type: 'CHANGE_PAGE_REQUESTED',
  page,
});
