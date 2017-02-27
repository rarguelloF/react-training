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
