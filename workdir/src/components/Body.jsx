import React from 'react';


export default function Body() {
  return (
    <section id="main" className="container">
      <div className="row">
        <div className="col-md-9">
          <div id="showcase">
            <div className="heading-box">
              <h2 className="heading-2"><i className="fa fa-cutlery" aria-hidden="true"></i>¿Qué te apetece comer hoy?</h2>
              <p>Selecciona los productos para añadirlos a la cesta y benefíciate de nuestras ofertas.</p>
            </div>

            <div className="filters-box">
              <h3 className="heading-2b">Afina tu búsqueda</h3>
              <div className="row">
                <div className="categories col-md-6">
                  <h4 className="heading-4">Categoría</h4>
                  <ul className="categories-box clearfix">
                    <li><a href="" className="active">Todo</a></li>
                    <li><a href="">Plato principal</a></li>
                    <li><a href="">Bebidas</a></li>
                    <li><a href="">Postre</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <div className="price-box">
                    <h4 className="heading-4">Precio</h4>
                    <div className="price">100 €</div>
                    <input type='range' id='price-filter' className='tip fill fill-replace' value="100" step="1" min="0" max="100" />
                  </div>
                </div>
                <div className="search-box col-md-3">
                  <h4 className="heading-4">Buscador</h4>
                  <div className="input-search-wrap">
                    <input type="search" placeholder="Quiero pedir..." />
                    <i className="fa fa-search" aria-hidden=""></i>
                  </div>
                </div>
              </div>
            </div>

            <div id="products">
              <h3 className="heading-2b">Productos</h3>
              <div className="products__list row">

                <div className="col-md-4">
                  <div className="product product-first">
                    <div className="product-image">
                      <img src="http://espanafascinante.com/wp-content/uploads/portada_blog_gastronomia_recetas_fabada_bi.jpg" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="product-category">Plato principal</div>
                      <h4 className="product-title">Fabada</h4>
                      <div className="clearfix">
                        <div className="product-price">
                          <div className="product-price__title">Precio</div>
                           2,50 €/100 gr.</div>
                        <div className="product-select">
                          <select>
                            <option value="0">0 gr.</option>
                            <option value="150">50 gr.</option>
                            <option value="100">100 gr.</option>
                            <option value="150">150 gr.</option>
                            <option value="200">200 gr.</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="product-footer">
                      <button className="button product-button">Añadir</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="product product-drink">
                    <div className="product-image">
                      <img src="http://www.carrefour.es/supermercado/dyn/MEDIA_CustomProductCatalog/m11021209_l_000041.png" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="product-category">Bebida</div>
                      <h4 className="product-title">Coca-Cola</h4>
                      <div className="clearfix">
                        <div className="product-price">
                          <div className="product-price__title">Precio</div>
                            0,80 €
                          </div>
                        <div className="product-add">
                          <button className="product-add__minus"><span>-</span></button>
                          <input type="text" value="1" />
                          <button className="product-add__plus"><span>+</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="product-footer">
                      <button className="button product-button">Añadir</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="product product-dessert">
                    <div className="product-image">
                      <img src="http://www.cosasdecome.es/wp-content/uploads/2010/09/Yogur-ecologico-El-Gazul.jpg" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="product-category">Postre</div>
                      <h4 className="product-title">Yogur ecológico</h4>
                      <div className="clearfix">
                        <div className="product-price">
                          <div className="product-price__title">Precio</div>
                            1,20 €
                          </div>
                        <div className="product-add">
                          <button className="product-add__minus"><span>-</span></button>
                          <input type="text" value="1" />
                          <button className="product-add__plus"><span>+</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="product-footer">
                      <button className="button product-button">Añadir</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="product product-drink">
                    <div className="product-image">
                      <img src="http://www.carrefour.es/supermercado/dyn/MEDIA_CustomProductCatalog/m11011384_l_120204.png?4" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="product-category">Bebida</div>
                      <h4 className="product-title">Botella de agua</h4>
                      <div className="clearfix">
                        <div className="product-price">
                          <div className="product-price__title">Precio</div>
                            0,80 €
                          </div>
                        <div className="product-add">
                          <button className="product-add__minus"><span>-</span></button>
                          <input type="text" value="1" />
                          <button className="product-add__plus"><span>+</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="product-footer">
                      <button className="button product-button">Añadir</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="product product-first">
                    <div className="product-image">
                      <img src="http://jornadasgastronomicas.org/wp-content/uploads/2014/07/Rabo-de-ternera-en-salsa.jpg" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="product-category">Plato principal</div>
                      <h4 className="product-title">Rabo de ternera en salsa</h4>
                      <div className="clearfix">
                        <div className="product-price">
                          <div className="product-price__title">Precio</div>
                           2,50 €/100 gr.</div>
                        <div className="product-select">
                          <select>
                            <option value="0">0 gr.</option>
                            <option value="150">50 gr.</option>
                            <option value="100">100 gr.</option>
                            <option value="150">150 gr.</option>
                            <option value="200">200 gr.</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="product-footer">
                      <button className="button product-button">Añadir</button>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="product product-dessert">
                    <div className="product-image">
                      <img src="https://www.recetin.com/wp-content/uploads/2011/10/natillas_en_thermomix.jpg" alt="" />
                    </div>
                    <div className="product-info">
                      <div className="product-category">Postre</div>
                      <h4 className="product-title">Natillas caseras</h4>
                      <div className="clearfix">
                        <div className="product-price">
                          <div className="product-price__title">Precio</div>
                            1,50 €
                          </div>
                        <div className="product-add">
                          <button className="product-add__minus"><span>-</span></button>
                          <input type="text" value="1" />
                          <button className="product-add__plus"><span>+</span></button>
                        </div>
                      </div>
                    </div>
                    <div className="product-footer">
                      <button className="button product-button">Añadir</button>
                    </div>
                  </div>
                </div>

              </div>

              <div className="pagination clearfix">
                <p className="pagination-result">1 - 6 de <span>43</span> productos</p>
                <ul className="pagination__list">
                  <li className="disabled">
                    <a href="#" className="fa fa-caret-left">
                    <span aria-label="Anterior"> </span>
                    </a>
                  </li>
                  <li className="active">
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li className="disabled">
                    <a href="#"><span aria-label="Más">…</span></a>
                  </li>
                  <li>
                    <a href="#">55</a>
                  </li>
                  <li>
                    <a href="#" className="fa fa-caret-right">
                      <span aria-label="Siguiente"> </span>
                    </a>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        <div className="col-md-3">
          <div id="basket">
            <h2 className="heading-2b"><i className="fa fa-shopping-basket js-basket-icon" aria-hidden="true"></i>Tu pedido</h2>
            <table id="order">
              <tfoot>
                <tr>
                  <td colSpan="2" className="total-text">Total</td>
                  <td className="total-price">7,50 €</td>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td colSpan="3" className="order__offer">
                    <table>
                      <caption>Descuento menú 1</caption>
                      <tbody>
                        <tr className="order__item">
                          <td className="order__product">Rabo de ternera en salsa</td>
                          <td className="order__quantity">x 100gr.</td>
                          <td className="order__price"><span className="price-old">2,50 €</span> <span className="price-discount">1,25 €</span></td>
                        </tr>
                        <tr className="order__item">
                          <td className="order__product">Coca-cola</td>
                          <td className="order__quantity">x 1</td>
                          <td className="order__price"><span className="price-old">0,80 €</span> <span className="price-discount">0,60 €</span></td>
                        </tr>
                        <tr className="order__item">
                          <td className="order__product">Yogur ecológico</td>
                          <td className="order__quantity">x 1</td>
                          <td className="order__price"><span className="price-old">1,20 €</span> <span className="price-discount">1,00 €</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td colSpan="3" className="order__offer">
                    <table>
                      <caption>Descuento 3x2</caption>
                      <tbody>
                        <tr className="order__item">
                          <td className="order__product">Coca-cola</td>
                          <td className="order__quantity">x 1</td>
                          <td className="order__price">0,80 €</td>
                        </tr>
                        <tr className="order__item">
                          <td className="order__product">Coca-cola</td>
                          <td className="order__quantity">x 1</td>
                          <td className="order__price">0,80 €</td>
                        </tr>
                        <tr className="order__item">
                          <td className="order__product">Coca-cola</td>
                          <td className="order__quantity">x 1</td>
                          <td className="order__price"><span className="price-old">0,80 €</span> <span className="price-discount">0 €</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                <tr className="order__item js-animateme">
                  <td className="order__product">Fabada</td>
                  <td className="order__quantity">x 200gr.</td>
                  <td className="order__price">5 €</td>
                </tr>
              </tbody>
            </table>
            <button className="button">Pagar</button>
          </div>
        </div>

      </div>
    </section>
  );
}
