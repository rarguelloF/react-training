import initialState from '../initialState';

export default function gallery(state = initialState.gallery, action) {
  switch (action.type) {
    case 'CLICK_ALL_FILTER': {
      return {
        ...state,
        filters: {
          ...state.filters,
          category: {
            mainDish: false,
            drink: false,
            dessert: false,
          },
        },
      };
    }
    case 'CLICK_MAIN_DISH_FILTER': {
      return {
        ...state,
        filters: {
          ...state.filters,
          category: {
            ...state.filters.category,
            mainDish: !state.filters.category.mainDish,
          },
        },
      };
    }
    case 'CLICK_DRINK_FILTER': {
      return {
        ...state,
        filters: {
          ...state.filters,
          category: {
            ...state.filters.category,
            drink: !state.filters.category.drink,
          },
        },
      };
    }
    case 'CLICK_DESSERT_FILTER': {
      return {
        ...state,
        filters: {
          ...state.filters,
          category: {
            ...state.filters.category,
            dessert: !state.filters.category.dessert,
          },
        },
      };
    }
    default: {
      return state;
    }
  }
}
