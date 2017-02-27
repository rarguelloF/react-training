import React from 'react';

import OrderMenu from 'src/components/OrderMenu';
import Order3x2 from 'src/components/Order3x2';
import OrderProduct from 'src/components/OrderProduct';

import {
  groupProductsByDiscount,
  calcTotalPrice,
} from 'src/helpers/cart';


export default function Order(props) {
  const productsByDiscount = groupProductsByDiscount(props.products);
  const { menus, threeByTwo, noDiscount } = productsByDiscount;

  return (
    <table id="order">
      <tbody>
        {menus.map(menu => (
          <OrderMenu
            {...menu}
            key={menu.id}
            oldPrice={menu.oldPrice}
            totalPrice={menu.totalPrice}
          />
        ))}
        {threeByTwo.map(elem => (
          <Order3x2
            {...elem}
            key={elem.product.id}
            oldPrice={elem.oldPrice}
            totalPrice={elem.totalPrice}
          />
        ))}
        {noDiscount.map(elem => (
          <OrderProduct
            {...elem}
            key={elem.product.id}
            totalPrice={elem.totalPrice}
          />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan="2" className="total-text">Total</td>
          <td className="total-price">{calcTotalPrice(productsByDiscount)} €</td>
        </tr>
      </tfoot>
    </table>
  );
}
