export class Menu {
  constructor(product) {
    Object.keys(product).forEach((key) => {
      this[key] = product[key];
    });
  }

  get oldPrice() {
    return Math.round(this.price * this.quantity * 100) / 100;
  }

  get totalPrice() {
    return Math.round(this.price * this.quantity * 0.8 * 100) / 100;
  }
}

export class ThreeByTwo {
  constructor(product) {
    Object.keys(product).forEach((key) => {
      this[key] = product[key];
    });
  }

  get oldPrice() {
    return Math.round(this.price * this.quantity * 100) / 100;
  }

  get totalPrice() {
    const numThreeByTwo = parseInt(this.quantity / 3, 10);
    return Math.round(this.price * ((3 * numThreeByTwo) - numThreeByTwo) * 100) / 100;
  }
}

export class NoDiscount {
  constructor(product) {
    Object.keys(product).forEach((key) => {
      this[key] = product[key];
    });
  }

  get totalPrice() {
    return Math.round(this.price * this.quantity * 100) / 100;
  }
}
