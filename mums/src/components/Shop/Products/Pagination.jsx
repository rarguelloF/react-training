import React from 'react';

export default function Pagination() {
  return (
    <div className="pagination clearfix">
      <p className="pagination-result">1 - 6 de <span>43</span> productos</p>
      <ul className="pagination__list">
        <li className="disabled">
          <a href="#" className="fa fa-caret-left">
            <span aria-label="Anterior" />
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
            <span aria-label="Siguiente" />
          </a>
        </li>
      </ul>
    </div>
  );
}
