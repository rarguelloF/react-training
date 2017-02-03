import React from 'react';

import Shop from './Shop';
import Cart from './Cart';


export default function Main() {
  return (
    <section className="container">
      <div className="row">
        <Shop />
        <Cart />
      </div>
    </section>
  );
}
