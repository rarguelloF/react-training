import React from 'react';

import Product from './Product';
import GalleryPagination from './GalleryPagination';


export default class GalleryProducts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:8000/products/')
      .then(resp => resp.json())
      .then(resp => this.setState({ products: resp.data }));
  }

  render() {
    return (
      <div id="products">
        <h3 className="heading-2b">Productos</h3>
        <div className="products__list row">
          {this.state.products.map(prod => (
            <Product
              {...prod}
            />
          ))}
        </div>

        <GalleryPagination />
      </div>
    );
  }
}
