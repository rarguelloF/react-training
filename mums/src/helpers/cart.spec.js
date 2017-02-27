import expect from 'expect.js';

import { groupProductsByDiscount } from './cart';


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
            mainDish: { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
            drink: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
            dessert: { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 1 },
          },
          {
            id: 2,
            mainDish: { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
            drink: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
            dessert: { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 1 },
          },
        ],
        threeByTwo: [
          { id: 4, name: 'patatin', category: '1', measurement: '1', price: 1.9, quantity: 3 },
          { id: 5, name: 'patatufla', category: '1', measurement: '1', price: 1.7, quantity: 6 },
        ],
        noDiscount: [
          { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
          { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
          { id: 5, name: 'patatufla', category: '1', measurement: '1', price: 1.7, quantity: 1 },
        ],
      };

      const result = groupProductsByDiscount(cart);

      expect(result.menus).to.eql(expected.menus);
      expect(result.threeByTwo).to.eql(expected.threeByTwo);
      expect(result.noDiscount).to.eql(expected.noDiscount);
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
          { id: 1, name: 'patata', category: '1', measurement: '1', price: 1.5, quantity: 1 },
          { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
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
          { id: 1, name: 'patata', category: '1', measurement: '2', price: 1.5, quantity: 3 },
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
            mainDish: { id: 1, name: 'patata', category: '1', measurement: '2', price: 1.5, quantity: 22.5 },
            drink: { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
            dessert: { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 1 },
          },
        ],
        threeByTwo: [],
        noDiscount: [
          { id: 2, name: 'agua', category: '2', measurement: '1', price: 1.5, quantity: 1 },
          { id: 3, name: 'tarta de queso', category: '3', measurement: '1', price: 1.5, quantity: 1 },
        ],
      };

      const result = groupProductsByDiscount(cart);

      expect(result.menus).to.eql(expected.menus);
      expect(result.threeByTwo).to.eql(expected.threeByTwo);
      expect(result.noDiscount).to.eql(expected.noDiscount);
    });
  });
});
