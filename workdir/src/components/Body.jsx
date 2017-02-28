import React from 'react';

import Gallery from './Gallery';
import Order from './Order';


export default function Body() {
  return (
    <section id="main" className="container">
      <div className="row">
        <Gallery />
        <Order />
      </div>
    </section>
  );
}
