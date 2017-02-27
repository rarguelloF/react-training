import React from 'react';

import CartHeader from './CartHeader';
import Order from './Order';
import PayButton from './PayButton';


export default function Cart() {
  return (
    <div className="col-md-3">
      <div id="basket">
        <CartHeader />
        <Order />
        <PayButton />
      </div>
    </div>
  );
}
