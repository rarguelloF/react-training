import React, { PropTypes } from 'react';

import ProductModel from 'src/helpers/product';

const propTypes = {
  product: PropTypes.object.isRequired,
  oldPrice: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};


function Order3x2(props) {
  const product = new ProductModel(props.product);

  return (
    <tr>
      <td colSpan="3" className="order__offer">
        <table>
          <caption>Descuento 3x2</caption>
          <tbody>
            <tr className="order__item">
              <td className="order__product">{props.product.name}</td>
              <td className="order__quantity">
                {product.displayQuantity(product.quantity)}
              </td>
              <td className="order__price">
                <span className="price-old">{props.oldPrice} € </span>
                <span className="price-discount">{props.totalPrice} €</span>
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
