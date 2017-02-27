import React from 'react';

import ProductHelpers from '../../../helpers/product';


export default function NoDiscount(props) {
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
