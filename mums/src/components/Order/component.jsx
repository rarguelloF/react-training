import React from 'react';

import OrderMenu from 'src/components/OrderMenu';
import Order3x2 from 'src/components/Order3x2';
import OrderProduct from 'src/components/OrderProduct';

import { groupProductsByDiscount } from 'src/helpers/cart';


export default function Order(props) {
  const productsByDiscount = groupProductsByDiscount(props.products);
  const { menus, threeByTwo, noDiscount } = productsByDiscount;

  return (
    <table id="order">
      <tbody>
        {menus.map(menu => <OrderMenu key={menu.id} {...menu} />)}
        {threeByTwo.map(product => <Order3x2 key={product.id} {...product} />)}
        {noDiscount.map(product => <OrderProduct key={product.id} {...product} />)}
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
