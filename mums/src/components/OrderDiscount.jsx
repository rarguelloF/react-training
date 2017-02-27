import React, { PropTypes } from 'react';

import { MEASUREMENT } from 'src/helpers/constants';

const propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    measurement: PropTypes.oneOf(MEASUREMENT.choices).isRequired,
    quantity: PropTypes.number.isRequired,
    oldPrice: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
  })).isRequired,
};

function OrderMenu(props) {
  const displayQuantity = () => {
    switch (props.measurement) {
      case (MEASUREMENT.enum.UNITS): {
        return `x ${props.quantity} ud.`;
      }
      case (MEASUREMENT.enum.WEIGHT): {
        return `x ${props.quantity * 100} gr.`;
      }
      default: {
        return undefined;
      }
    }
  };

  return (
    <tr>
      <td colSpan="3" className="order__offer">
        <table>
          <caption>{props.title}</caption>
          <tbody>
            {props.products.map(product => (
              <tr key={product.id} className="order__item">
                <td className="order__product">{product.name}</td>
                <td className="order__quantity">
                  {displayQuantity()}
                </td>
                <td className="order__price">
                  <span className="price-old">{product.oldPrice} €</span>
                  <span className="price-discount">{product.totalPrice} €</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </td>
    </tr>
  );
}

OrderMenu.propTypes = propTypes;
export default OrderMenu;
