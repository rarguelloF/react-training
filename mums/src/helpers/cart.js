import groupBy from 'lodash.groupby';
import zip from 'lodash.zip';
import orderBy from 'lodash.orderby';

import productHelpers, { Menu, ThreeByTwo, NoDiscount } from './product';

const CATEGORIES = productHelpers.category.enum;
const MEASUREMENT = productHelpers.measurement.enum;


export function insertProductToCart(cart, product, quantity) {
  const index = cart.findIndex(prod => prod.id === product.id);

  return index !== -1 ?
  [
    ...cart.slice(0, index),
    {
      ...cart[index],
      quantity: cart[index].quantity + quantity,
    },
    ...cart.slice(index + 1),
  ] :
  cart.concat([{ ...product, quantity }]);
}

function menuDiscounts(products) {
  // flatten the products array by the quantity property so now an item with
  // quantity: 2 it's converted to two items with quantitiy: 1
  const flatProds = products.reduce((acc, prod) => (
    prod.measurement !== MEASUREMENT.WEIGHT ?
      acc.concat(Array(prod.quantity).fill({ ...prod, quantity: 1 })) :
      acc.concat(prod)
  ), []);

  const productsByCategory = groupBy(flatProds, 'category');

  // groupBy couldn't group by all the necessary categories for creating 1 menu
  if (Object.keys(productsByCategory).length !== Object.keys(CATEGORIES).length) {
    return [[], products];
  }

  // work with the grouped products as an array of arrays
  const arrProducts = [
    productsByCategory[CATEGORIES.MAIN_DISH],
    productsByCategory[CATEGORIES.DRINK],
    productsByCategory[CATEGORIES.DESSERT],
  ];

  // the number of menus we can create is equal to the length of the smallest array
  const numMenus = Math.min(...arrProducts.map(prods => prods.length));

  // order each products array by price (we will use the cheapest products for the menu)
  // and move the first numMenus products to a the discountable key, so we can zip it later.
  // the other are moved as a flattened array of products
  const splitted = arrProducts
    .reduce((acc, prods) => {
      const ord = orderBy(prods, 'price');
      return {
        discountable: [...acc.discountable, ord.slice(0, numMenus)],
        notDiscountable: [...acc.notDiscountable, ...ord.slice(numMenus)],
      };
    }, { discountable: [], notDiscountable: [] });

  // create the menu objects
  const menus = zip(...splitted.discountable)
    .map((prods, i) => (
      {
        id: i + 1,
        mainDish: new Menu(prods[0]),
        drink: new Menu(prods[1]),
        dessert: new Menu(prods[2]),
      }
    ));

  // undo the first step of this function for the non discountable products
  const noDiscount = splitted.notDiscountable
    .reduce((acc, prod) => insertProductToCart(acc, prod, prod.quantity), []);

  return [menus, noDiscount];
}

function threeByTwoDiscounts(products) {
  const prodsObj = products.reduce((acc, prod) => {
    if (prod.measurement === MEASUREMENT.WEIGHT || prod.quantity < 3) {
      return {
        ...acc,
        notDiscountable: acc.notDiscountable.concat(prod),
      };
    }

    // move N number of units divisible by 3 into the discountable group
    const numThreeByTwo = parseInt(prod.quantity / 3, 10);

    const discountable = acc.discountable.concat(
      new ThreeByTwo({ ...prod, quantity: 3 * numThreeByTwo }),
    );

    // if there were odds units, move them to notDiscountable group
    const notDiscountable = prod.quantity % 3 > 0 ?
      acc.notDiscountable.concat({ ...prod, quantity: prod.quantity % 3 }) :
      acc.notDiscountable;

    return { discountable, notDiscountable };
  }, { discountable: [], notDiscountable: [] });


  return [
    orderBy(prodsObj.discountable, 'product.id'),
    orderBy(prodsObj.notDiscountable, 'product.id'),
  ];
}

export function groupProductsByDiscount(products) {
  if (!products.length) {
    return {
      menus: [],
      threeByTwo: [],
      noDiscount: [],
    };
  }

  const [menus, notDiscountedByMenu] = menuDiscounts(products);
  const [threeByTwo, notDiscountedByThreeByTwo] = threeByTwoDiscounts(notDiscountedByMenu);

  const noDiscount = orderBy(
    notDiscountedByThreeByTwo.map(prod => new NoDiscount(prod)),
    'product.id',
  );

  return {
    menus,
    threeByTwo,
    noDiscount,
  };
}

export function calcTotalPrice(productsByDiscount) {
  const { menus, threeByTwo, noDiscount } = productsByDiscount;

  return Math.round((
    menus.reduce((acc, menu) => (
      acc +
      menu.mainDish.totalPrice +
      menu.drink.totalPrice +
      menu.dessert.totalPrice
    ), 0) +
    threeByTwo.reduce((acc, prod) => acc + prod.totalPrice, 0) +
    noDiscount.reduce((acc, prod) => acc + prod.totalPrice, 0)
  ) * 100) / 100;
}
