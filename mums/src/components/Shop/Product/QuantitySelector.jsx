import React, { PropTypes } from 'react';

import ProductHelpers from '../../../helpers/product';


const propTypes = {
  value: PropTypes.number.isRequired,
  setValue: PropTypes.func.isRequired,
  measurement: PropTypes.oneOf(ProductHelpers.measurement.choices).isRequired,
};

function QuantitySelector(props) {
  const { WEIGHT, UNITS } = ProductHelpers.measurement.enum;

  switch (props.measurement) {
    case WEIGHT: {
      return (
        <div className="product-select">
          <select
            value={props.value}
            onChange={event => props.setValue(parseFloat(event.target.value, 10))}
          >
            <option value={0.5}>50 gr.</option>
            <option value={1}>100 gr.</option>
            <option value={1.5}>150 gr.</option>
            <option value={2}>200 gr.</option>
            <option value={2.5}>250 gr.</option>
            <option value={3}>300 gr.</option>
            <option value={3.5}>350 gr.</option>
            <option value={4}>400 gr.</option>
            <option value={4.5}>450 gr.</option>
            <option value={5}>500 gr.</option>
          </select>
        </div>
      );
    }
    case UNITS: {
      return (
        <div className="product-add">
          <button
            disabled={props.value === 1}
            className="product-add__minus"
            onClick={() => props.setValue(props.value - 1)}
          >
            <span>-</span>
          </button>
          <input
            type="text"
            value={props.value}
            onChange={event => props.setValue(parseInt(event.target.value, 10))}
          />
          <button
            disabled={props.value === 10}
            className="product-add__plus"
            onClick={() => props.setValue(props.value + 1)}
          >
            <span>+</span>
          </button>
        </div>
      );
    }
    default: {
      return null;
    }
  }
}

QuantitySelector.propTypes = propTypes;
export default QuantitySelector;
