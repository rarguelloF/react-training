import React from 'react';

import expect from 'expect.js';
import { shallow } from 'enzyme';

import Product from './component';


describe('<Product />', () => {
  it('should display main dishes correctly', () => {
    const wrapper = shallow(
      <Product
        name="Patata"
        image="potato-image.png"
        price={2.5}
        category="1"
        measurement="1"
        addProductToCart={() => null}
      />,
    );

    expect(wrapper.contains(
      <div className="product-category">Plato principal</div>,
    )).to.be(true);

    expect(wrapper.find('.product-first')).to.have.length(1);
  });

  it('should display drinks correctly', () => {
    const wrapper = shallow(
      <Product
        name="Agua"
        image="agua-image.png"
        price={2.5}
        category="2"
        measurement="1"
        addProductToCart={() => null}
      />,
    );

    expect(wrapper.contains(
      <div className="product-category">Bebida</div>,
    )).to.be(true);

    expect(wrapper.find('.product-drink')).to.have.length(1);
  });

  it('should display desserts correctly', () => {
    const wrapper = shallow(
      <Product
        name="Postre"
        image="postre-image.png"
        price={2.5}
        category="3"
        measurement="1"
        addProductToCart={() => null}
      />,
    );

    expect(wrapper.contains(
      <div className="product-category">Postre</div>,
    )).to.be(true);

    expect(wrapper.find('.product-dessert')).to.have.length(1);
  });

  it('should display price correctly for products measured by units', () => {
    const wrapper = shallow(
      <Product
        name="Postre"
        image="postre-image.png"
        price={2.5}
        category="3"
        measurement="1"
        addProductToCart={() => null}
      />,
    );

    expect(wrapper.contains(<span>2.5 €</span>)).to.be(true);
  });

  it('should display price correctly for products measured by weight', () => {
    const wrapper = shallow(
      <Product
        name="Postre"
        image="postre-image.png"
        price={2.5}
        category="3"
        measurement="2"
        addProductToCart={() => null}
      />,
    );

    expect(wrapper.contains(<span>2.5 €/100 gr.</span>)).to.be(true);
  });
});
