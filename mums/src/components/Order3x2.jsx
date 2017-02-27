import React, { PropTypes } from 'react';

import ProductHelpers from 'src/helpers/product';

const propTypes = {
  name: PropTypes.string.isRequired,
  measurement: PropTypes.oneOf(ProductHelpers.measurement.choices).isRequired,
  oldPrice: PropTypes.number.isRequired,
  newPrice: PropTypes.number.isRequired,
};


function Order3x2(props) {
  const measurementHelper = ProductHelpers.measurement[props.measurement];

  return (
    <tr>
      <td colSpan="3" className="order__offer">
        <table>
          <caption>Descuento 3x2</caption>
          <tbody>
            <tr className="order__item">
              <td className="order__product">{props.name}</td>
              <td className="order__quantity">
                x {measurementHelper.formatQuantity(props.quantity)}
              </td>
              <td className="order__price">
                <span className="price-old">{props.oldPrice} </span>
                <span className="price-discount">{props.newPrice}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

Order3x2.propTypes = propTypes;
export default Order3x2;
