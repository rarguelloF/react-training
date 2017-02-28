import React from 'react';

export default function Order() {
  return (
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
  );
}
