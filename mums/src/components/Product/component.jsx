import React, { PropTypes } from 'react';

import QuantitySelector from 'src/components/QuantitySelector';

import { CATEGORY, MEASUREMENT } from 'src/helpers/constants';


// Parametrize the component: https://facebook.github.io/react/docs/typechecking-with-proptypes.html
const propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.oneOf(CATEGORY.choices).isRequired,
  measurement: PropTypes.oneOf(MEASUREMENT.choices).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

// Create the component using the `props` object
class Product extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };

    this.updateQuantity = this.updateQuantity.bind(this);
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart() {
    this.props.addProductToCart({ ...this.props }, this.state.quantity);
  }

  getCategoryName() {
    switch (this.props.category) {
      case (CATEGORY.enum.MAIN_DISH): {
        return 'Plato principal';
      }
      case (CATEGORY.enum.DRINK): {
        return 'Bebida';
      }
      case (CATEGORY.enum.DESSERT): {
        return 'Postre';
      }
      default: {
        return undefined;
      }
    }
  }

  getCategoryClassName() {
    switch (this.props.category) {
      case (CATEGORY.enum.MAIN_DISH): {
        return 'product-first';
      }
      case (CATEGORY.enum.DRINK): {
        return 'product-drink';
      }
      case (CATEGORY.enum.DESSERT): {
        return 'product-dessert';
      }
      default: {
        return undefined;
      }
    }
  }

  getDisplayPrice() {
    switch (this.props.measurement) {
      case (MEASUREMENT.enum.UNITS): {
        return `${this.props.price} €`;
      }
      case (MEASUREMENT.enum.WEIGHT): {
        return `${this.props.price} €/100 gr.`;
      }
      default: {
        return undefined;
      }
    }
  }

  updateQuantity(val) {
    if (!isNaN(val)) {
      this.setState({ quantity: val });
    } else {
      console.error(`Wrong value ${val}`);
    }
  }

  render() {
    return (
      <div className="col-md-4">
        <div className={`product ${this.getCategoryClassName()}`}>
          <div className="product-image">
            <img src={this.props.image} alt="" />
          </div>
          <div className="product-info">
            <div className="product-category">
              {this.getCategoryName()}
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
                  {this.getDisplayPrice()}
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
