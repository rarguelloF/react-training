import React, { PropTypes } from 'react';

import QuantitySelector from './QuantitySelector';


const propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.oneOf(["1", "2", "3"]).isRequired,
  measurement: PropTypes.oneOf(["1", "2"]).isRequired,
  price: PropTypes.number.isRequired,
};

function Product(props) {
  const categoryName = () => {
    if (props.category === "1") { return 'Plato principal' }
    else if (props.category === "2") { return 'Bebida' }

    return 'postre';
  };

  const categoryClassName = () => {
    if (props.category === "1") { return 'product-first' }
    else if (props.category === "2") { return 'product-drink' }

    return 'product-dessert';
  };

  const displayPrice = () => {
    if (props.measurement === "1") { return props.price }
    else if (props.measurement === "2") { return `${props.price}/100gr.` }

    return 'product-dessert';
  };

  return (
    <div className="col-md-4">
      <div className={`product ${categoryClassName()}`}>
        <div className="product-image">
          <img src={props.image} alt="" />
        </div>
        <div className="product-info">
          <div className="product-category">{categoryName()}</div>
          <h4 className="product-title">{props.name}</h4>
          <div className="clearfix">
            <div className="product-price">
              <div className="product-price__title">
                Precio
              </div>
              {displayPrice()}
            </div>
            <QuantitySelector measurement={props.measurement} />
          </div>
        </div>
        <div className="product-footer">
          <button className="button product-button">Añadir</button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = propTypes;

export default Product;
