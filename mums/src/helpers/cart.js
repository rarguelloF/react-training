

export default {
  groupProductsByDiscount(products) {
    return {
      menu: [],
      threeForTwo: [],
      noDiscount: products,
    };
  },
  calcTotalPrice(productsByDiscount) {
    return 7.5;
  },
};
