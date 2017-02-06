import React, { PropTypes } from 'react';


const CATEGORIES = {
  mainDish: 1,
  drink: 2,
  dessert: 3,
  props: {
    1: {
      verboseName: 'Plato principal',
      className: 'product-first',
    },
    2: {
      verboseName: 'Bebida',
      className: 'product-drink',
    },
    3: {
      verboseName: 'dessert',
      className: 'product-dessert',
    },
  },
};

const MEASUREMENT = {
  units: 1,
  weight: 2,
  props: {
    1: {
      basePrice: 100,
      formatPrice: price => `${price} €/100 gr.`,
      selectComponent: (
        <div className="product-select">
          <select>
            <option value="0">0 gr.</option>
            <option value="150">50 gr.</option>
            <option value="100">100 gr.</option>
            <option value="150">150 gr.</option>
            <option value="200">200 gr.</option>
          </select>
        </div>
      ),
    },
    2: {
      basePrice: 1,
      formatPrice: price => `${price} €`,
      selectComponent: (
        <div className="product-add">
          <button className="product-add__minus"><span>-</span></button>
          <input type="text" value="1" />
          <button className="product-add__plus"><span>+</span></button>
        </div>
      ),
    },
  },
};

// Parametrize the component: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
const propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.oneOf(Object.keys(CATEGORIES.props)).isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  measurement: PropTypes.oneOf(Object.keys(CATEGORIES.props)).isRequired,
};


// Create the component using the `props` object
function Product(props) {
  const category = CATEGORIES.props[props.category];
  const measurement = MEASUREMENT.props[props.measurement];

  return (
    <div className="col-md-4">
      <div className={`product ${category.className}`}>
        <div className="product-image">
          <img src={props.image} alt="" />
        </div>
        <div className="product-info">
          <div className="product-category">
            {category.verboseName}
          </div>
          <h4 className="product-title">
            {props.name}
          </h4>
          <div className="clearfix">
            <div className="product-price">
              <div className="product-price__title">
                Precio
              </div>
              <span>
                {measurement.formatPrice(props.price)}
              </span>
            </div>
            {measurement.selectComponent}
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
