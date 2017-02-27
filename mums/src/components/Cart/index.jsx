import React from 'react';

import Header from './Header';
import Order from './Order';
import PayButton from './PayButton';


export default function Cart() {
  return (
    <div className="col-md-3">
      <div id="basket">
        <Header />
        <Order />
        <PayButton />
      </div>
    </div>
  );
}
