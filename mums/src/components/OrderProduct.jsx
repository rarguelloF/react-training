import React, { PropTypes } from 'react';

import ProductHelpers from 'src/helpers/product';

const propTypes = {
  product: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
};


function OrderProduct(props) {
  const measurementHelper = ProductHelpers.measurement[props.product.measurement];

  return (
    <tr className="order__item">
      <td className="order__product">
        {props.product.name}
      </td>
      <td className="order__quantity">
        x {measurementHelper.formatQuantity(props.product.quantity)}
      </td>
      <td className="order__price">
        {props.totalPrice} €
      </td>
    </tr>
  );
}

OrderProduct.propTypes = propTypes;
export default OrderProduct;
