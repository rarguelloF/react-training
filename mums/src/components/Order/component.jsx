import React, { PropTypes } from 'react';

import OrderDiscount from 'src/components/OrderDiscount';
import OrderProduct from 'src/components/OrderProduct';

import {
  groupProductsByDiscount,
  calcTotalPrice,
} from 'src/helpers/cart';


const propTypes = {
  products: PropTypes.array.isRequired,
};

function Order(props) {
  const productsByDiscount = groupProductsByDiscount(props.products);
  const { menus, threeByTwo, noDiscount } = productsByDiscount;

  return (
    <table id="order">
      <tbody>
        {menus.map(menu => (
          <OrderDiscount
            key={menu.id}
            title={`Descuento menú ${menu.id}`}
            products={[menu.mainDish, menu.drink, menu.dessert]}
          />
        ))}
        {threeByTwo.map(elem => (
          <OrderDiscount
            key={elem.id}
            title="Descuento 3x2"
            products={[elem]}
          />
        ))}
        {noDiscount.map(elem => (
          <OrderProduct
            key={elem.id}
            name={elem.name}
            quantity={elem.quantity}
            measurement={elem.measurement}
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

Order.propTypes = propTypes;

export default Order;
