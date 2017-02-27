import React, { PropTypes } from 'react';

import ProductHelpers from 'src/helpers/product';

const propTypes = {
  id: PropTypes.number.isRequired,
  mainDish: PropTypes.object.isRequired,
  drink: PropTypes.object.isRequired,
  dessert: PropTypes.object.isRequired,
};

function OrderMenu(props) {
  const mainDishMs = ProductHelpers.measurement[props.mainDish.product.measurement];
  const drinkMs = ProductHelpers.measurement[props.drink.product.measurement];
  const dessertMs = ProductHelpers.measurement[props.dessert.product.measurement];

  return (
    <tr>
      <td colSpan="3" className="order__offer">
        <table>
          <caption>Descuento menú {props.id}</caption>
          <tbody>
            <tr className="order__item">
              <td className="order__product">{props.mainDish.product.name}</td>
              <td className="order__quantity">
                x {mainDishMs.formatQuantity(props.mainDish.product.quantity)}
              </td>
              <td className="order__price">
                <span className="price-old">{props.mainDish.oldPrice} €</span>
                <span className="price-discount">{props.mainDish.totalPrice} €</span>
              </td>
            </tr>
            <tr className="order__item">
              <td className="order__product">{props.drink.product.name}</td>
              <td className="order__quantity">
                x {drinkMs.formatQuantity(props.drink.product.quantity)}
              </td>
              <td className="order__price">
                <span className="price-old">{props.drink.oldPrice} €</span>
                <span className="price-discount">{props.drink.totalPrice} €</span>
              </td>
            </tr>
            <tr className="order__item">
              <td className="order__product">{props.dessert.product.name}</td>
              <td className="order__quantity">
                x {dessertMs.formatQuantity(props.dessert.product.quantity)}
              </td>
              <td className="order__price">
                <span className="price-old">{props.dessert.oldPrice} €</span>
                <span className="price-discount">{props.dessert.totalPrice} €</span>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

OrderMenu.propTypes = propTypes;
export default OrderMenu;
