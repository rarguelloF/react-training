import React, { PropTypes } from 'react';

import ProductHelpers from 'src/helpers/product';

const propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  measurement: PropTypes.oneOf(ProductHelpers.measurement.choices).isRequired,
  price: PropTypes.number.isRequired,
};


function OrderProduct(props) {
  const measurementHelper = ProductHelpers.measurement[props.measurement];

  return (
    <tr className="order__item">
      <td className="order__product">
        {props.name}
      </td>
      <td className="order__quantity">
        {measurementHelper.formatQuantity(props.quantity)}
      </td>
      <td className="order__price">
        {measurementHelper.formatTotalPrice(props.price, props.quantity)}
      </td>
    </tr>
  );
}

OrderProduct.propTypes = propTypes;
export default OrderProduct;
