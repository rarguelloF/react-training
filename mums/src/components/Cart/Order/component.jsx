import React from 'react';

import MenuDiscount from './MenuDiscount';
import ThreeByTwoDiscount from './ThreeByTwoDiscount';
import NoDiscount from './NoDiscount';

import CartHelpers from '../../../helpers/cart';


export default function Order(props) {
  const productsByDiscount = CartHelpers.groupProductsByDiscount(props.products);

  return (
    <table id="order">
      <tbody>
        {productsByDiscount.noDiscount.map(product => (
          <NoDiscount {...product} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2" className="total-text">Total</td>
          <td className="total-price">7,50 €</td>
        </tr>
      </tfoot>
    </table>
  );
}
