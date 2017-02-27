/* eslint max-len: 0 */
/* eslint import/no-extraneous-dependencies: 0 */

import expect from 'expect.js';

import {
  groupProductsByDiscount,
  calcTotalPrice,
} from './cart';


describe('cart helpers', () => {
  describe('groupProductsByDiscount', () => {
    it('should work', () => {
      const cart = [
        { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 3 },
        { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 3 },
        { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 2 },
        { id: 4, name: 'patatin', category: '1', measurement: '1', price: 1.9, quantity: 3 },
        { id: 5, name: 'patatufla', category: '1', measurement: '1', price: 1.7, quantity: 7 },
      ];

      const expected = {
        menus: [
          {
            id: 1,
            mainDish: {
              product: { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
            },
            drink: {
              product: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
            },
            dessert: {
              product: { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 1 },
            },
          },
          {
            id: 2,
            mainDish: {
              product: { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
            },
            drink: {
              product: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
            },
            dessert: {
              product: { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 1 },
            },
          },
        ],
        threeByTwo: [
          {
            product: { id: 4, name: 'patatin', category: '1', measurement: '1', price: 1.9, quantity: 3 },
          },
          {
            product: { id: 5, name: 'patatufla', category: '1', measurement: '1', price: 1.7, quantity: 6 },
          },
        ],
        noDiscount: [
          {
            product: { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
          },
          {
            product: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
          },
          {
            product: { id: 5, name: 'patatufla', category: '1', measurement: '1', price: 1.7, quantity: 1 },
          },
        ],
      };

      const result = groupProductsByDiscount(cart);

      expect(result.menus).to.eql(expected.menus);
      expect(result.threeByTwo).to.eql(expected.threeByTwo);
      expect(result.noDiscount).to.eql(expected.noDiscount);

      expect(result.menus[0].mainDish.oldPrice).to.be(1.5);
      expect(result.menus[0].mainDish.totalPrice).to.be(1.2);
      expect(result.menus[0].drink.oldPrice).to.be(1.5);
      expect(result.menus[0].drink.totalPrice).to.be(1.2);
      expect(result.menus[0].dessert.oldPrice).to.be(1.5);
      expect(result.menus[0].dessert.totalPrice).to.be(1.2);

      expect(result.menus[1].mainDish.oldPrice).to.be(1.5);
      expect(result.menus[1].mainDish.totalPrice).to.be(1.2);
      expect(result.menus[1].drink.oldPrice).to.be(1.5);
      expect(result.menus[1].drink.totalPrice).to.be(1.2);
      expect(result.menus[1].dessert.oldPrice).to.be(1.5);
      expect(result.menus[1].dessert.totalPrice).to.be(1.2);

      expect(result.threeByTwo[0].oldPrice).to.be(5.7);
      expect(result.threeByTwo[0].totalPrice).to.be(3.8);

      expect(result.threeByTwo[1].oldPrice).to.be(10.2);
      expect(result.threeByTwo[1].totalPrice).to.be(6.8);

      expect(result.noDiscount[0].totalPrice).to.be(1.5);
      expect(result.noDiscount[1].totalPrice).to.be(1.5);
      expect(result.noDiscount[2].totalPrice).to.be(1.7);
    });

    it('should work for empty carts', () => {
      const cart = [];

      const expected = {
        menus: [],
        threeByTwo: [],
        noDiscount: [],
      };

      const result = groupProductsByDiscount(cart);

      expect(result.menus).to.eql(expected.menus);
      expect(result.threeByTwo).to.eql(expected.threeByTwo);
      expect(result.noDiscount).to.eql(expected.noDiscount);
    });

    it('should work with non discountable carts', () => {
      const cart = [
        { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
        { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
      ];

      const expected = {
        menus: [],
        threeByTwo: [],
        noDiscount: [
          {
            product: { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
          },
          {
            product: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
          },
        ],
      };

      const result = groupProductsByDiscount(cart);

      expect(result.menus).to.eql(expected.menus);
      expect(result.threeByTwo).to.eql(expected.threeByTwo);
      expect(result.noDiscount).to.eql(expected.noDiscount);
    });

    it('should not apply 3x2 discount to products measured by weight', () => {
      const cart = [
        { id: 1, name: 'patata', category: '1', measurement: '2', price: 1.5, quantity: 3 },
      ];

      const expected = {
        menus: [],
        threeByTwo: [],
        noDiscount: [
          {
            product: { id: 1, name: 'patata', category: '1', measurement: '2', price: 1.5, quantity: 3 },
          },
        ],
      };

      const result = groupProductsByDiscount(cart);

      expect(result.menus).to.eql(expected.menus);
      expect(result.threeByTwo).to.eql(expected.threeByTwo);
      expect(result.noDiscount).to.eql(expected.noDiscount);
    });

    it('should not split products measured by weight into different menus', () => {
      const cart = [
        { id: 1, name: 'patata', category: '1', measurement: '2', price: 1.5, quantity: 22.5 },
        { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 2 },
        { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 2 },
      ];

      const expected = {
        menus: [
          {
            id: 1,
            mainDish: {
              product: { id: 1, name: 'patata', category: '1', measurement: '2', price: 1.5, quantity: 22.5 },
            },
            drink: {
              product: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
            },
            dessert: {
              product: { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 1 },
            },
          },
        ],
        threeByTwo: [],
        noDiscount: [
          {
            product: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
          },
          {
            product: { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 1 },
          },
        ],
      };

      const result = groupProductsByDiscount(cart);

      expect(result.menus).to.eql(expected.menus);
      expect(result.threeByTwo).to.eql(expected.threeByTwo);
      expect(result.noDiscount).to.eql(expected.noDiscount);

      expect(result.menus[0].mainDish.oldPrice).to.be(33.75);
      expect(result.menus[0].mainDish.totalPrice).to.be(27);
      expect(result.menus[0].drink.oldPrice).to.be(1.5);
      expect(result.menus[0].drink.totalPrice).to.be(1.2);
      expect(result.menus[0].dessert.oldPrice).to.be(1.5);
      expect(result.menus[0].dessert.totalPrice).to.be(1.2);

      expect(result.noDiscount[0].totalPrice).to.be(1.5);
      expect(result.noDiscount[1].totalPrice).to.be(1.5);
    });
  });

  describe('calcTotalPrice', () => {
    it('should work', () => {
      const cart = [
        { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 3 },
        { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.0, quantity: 3 },
        { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 3.7, quantity: 2 },
        { id: 4, name: 'patatin', category: '1', measurement: '1', price: 1.9, quantity: 3 },
        { id: 5, name: 'patatufla', category: '1', measurement: '1', price: 1.7, quantity: 7 },
      ];

      const expected = 24.72;

      const result = calcTotalPrice(groupProductsByDiscount(cart));

      expect(result).to.be(expected);
    });
  });
});
