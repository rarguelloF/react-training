import React, { PropTypes } from 'react';

import QuantitySelector from './QuantitySelector';

import ProductHelpers from '../../../helpers/product';


// Parametrize the component: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
const propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.oneOf(ProductHelpers.category.choices).isRequired,
  measurement: PropTypes.oneOf(ProductHelpers.measurement.choices).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

// Create the component using the `props` object
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };

    this.categoryHelper = ProductHelpers.category[this.props.category];
    this.measurementHelper = ProductHelpers.measurement[this.props.measurement];
    this.updateQuantity = this.updateQuantity.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  updateQuantity(val) {
    if (!isNaN(val)) {
      this.setState({ quantity: val });
    } else {
      console.error(`Wrong value ${val}`);
    }
  }

  addProductToCart() {
    this.props.addProductToCart({ ...this.props }, this.state.quantity);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className={`product ${this.categoryHelper.className}`}>
          <div className="product-image">
            <img src={this.props.image} alt="" />
          </div>
          <div className="product-info">
            <div className="product-category">
              {this.categoryHelper.verboseName}
            </div>
            <h4 className="product-title">
              {this.props.name}
            </h4>
            <div className="clearfix">
              <div className="product-price">
                <div className="product-price__title">
                  Precio
                </div>
                <span>
                  {this.measurementHelper.formatProductPrice(this.props.price)}
                </span>
              </div>
              <QuantitySelector
                value={this.state.quantity}
                setValue={this.updateQuantity}
                measurement={this.props.measurement}
              />
            </div>
          </div>
          <button onClick={this.addProductToCart} className="button product-button">
            Añadir
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = propTypes;
export default Product;
