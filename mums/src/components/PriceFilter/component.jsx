import React, { PropTypes } from 'react';

const propTypes = {
  minPrice: PropTypes.number,
  maxPrice: PropTypes.number,
  selectedPrice: PropTypes.number.isRequired,
  changePrice: PropTypes.func.isRequired,
};

const defaultProps = {
  minPrice: 0,
  maxPrice: 100,
};

function PriceFilter(props) {
  return (
    <div className="col-md-3">
      <div className="price-box">
        <h4 className="heading-4">Precio</h4>
        <div className="price">{props.selectedPrice} €</div>
        <input
          type="range"
          id="price-filter"
          className="tip fill fill-replace"
          onChange={event => props.changePrice(parseInt(event.target.value, 10))}
          value={props.selectedPrice}
          step="1"
          min={props.minPrice}
          max={props.maxPrice}
        />
      </div>
    </div>
  );
}

PriceFilter.propTypes = propTypes;
PriceFilter.defaultProps = defaultProps;

export default PriceFilter;
