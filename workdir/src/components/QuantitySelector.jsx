import React from 'react';


export default function QuantitySelector(props) {
  if (props.measurement === '1') {
    return (
      <div className="product-add">
        <button className="product-add__minus"><span>-</span></button>
        <input type="text" value="1" />
        <button className="product-add__plus"><span>+</span></button>
      </div>
    );
  }

  return (
    <div className="product-select">
      <select>
        <option value="0">0 gr.</option>
        <option value="150">50 gr.</option>
        <option value="100">100 gr.</option>
        <option value="150">150 gr.</option>
        <option value="200">200 gr.</option>
      </select>
    </div>
  );
}
