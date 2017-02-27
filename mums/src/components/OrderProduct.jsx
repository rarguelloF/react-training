import React, { PropTypes } from 'react';

import { MEASUREMENT } from 'src/helpers/constants';

const propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  measurement: PropTypes.oneOf(MEASUREMENT.choices).isRequired,
  totalPrice: PropTypes.number.isRequired,
};


function OrderProduct(props) {
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
    <tr className="order__item">
      <td className="order__product">
        {props.name}
      </td>
      <td className="order__quantity">
        {displayQuantity()}
      </td>
      <td className="order__price">
        {props.totalPrice} €
      </td>
    </tr>
  );
}

OrderProduct.propTypes = propTypes;
export default OrderProduct;
