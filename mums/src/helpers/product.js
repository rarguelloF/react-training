export function Menu(product) {
  this.product = product;
  Object.defineProperty(this, 'oldPrice', {
    get: () => Math.round(this.product.price * this.product.quantity * 100) / 100,
  });
  Object.defineProperty(this, 'totalPrice', {
    get: () => Math.round(this.product.price * this.product.quantity * 0.8 * 100) / 100,
  });
}

export function ThreeByTwo(product) {
  this.product = product;
  Object.defineProperty(this, 'oldPrice', {
    get: () => Math.round(this.product.price * this.product.quantity * 100) / 100,
  });
  Object.defineProperty(this, 'totalPrice', {
    get: () => {
      const numThreeByTwo = parseInt(this.product.quantity / 3, 10);
      return Math.round(this.product.price * ((3 * numThreeByTwo) - numThreeByTwo) * 100) / 100;
    },
  });
}

export function NoDiscount(product) {
  this.product = product;
  Object.defineProperty(this, 'totalPrice', {
    get: () => Math.round(this.product.price * this.product.quantity * 100) / 100,
  });
}

export default {
  category: {
    enum: {
      MAIN_DISH: '1',
      DRINK: '2',
      DESSERT: '3',
    },
    1: {
      verboseName: 'Plato principal',
      className: 'product-first',
    },
    2: {
      verboseName: 'Bebida',
      className: 'product-drink',
    },
    3: {
      verboseName: 'dessert',
      className: 'product-dessert',
    },
    choices: ['1', '2', '3'],
  },
  measurement: {
    enum: {
      UNITS: '1',
      WEIGHT: '2',
    },
    1: {
      formatProductPrice: price => `${price} €`,
      formatTotalPrice: (price, quantity) => `${(price * quantity).toFixed(2)} €`,
      formatQuantity: quantity => `${quantity} ud.`,
    },
    2: {
      formatProductPrice: price => `${price} €/100 gr.`,
      formatTotalPrice: (price, quantity) => `${(price * quantity).toFixed(2)} €`,
      formatQuantity: quantity => `${quantity * 100} gr.`,
    },
    choices: ['1', '2'],
  },
};
