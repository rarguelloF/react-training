import React from 'react';

import Gallery from './Gallery';
import Cart from './Cart';


export default function MainPage() {
  return (
    <div>
      <section className="container">
        <div className="row">
          <Gallery />
          <Cart />
        </div>
      </section>
    </div>
  );
}
