import React, { PropTypes } from 'react';

const propTypes = {
  currentPage: PropTypes.number.isRequired,
  products: PropTypes.array.isRequired,
  totalProducts: PropTypes.number.isRequired,
  changePage: PropTypes.func.isRequired,
};

function Pagination(props) {
  const firstIndex = (6 * props.currentPage) + 1;
  const lastIndex = (firstIndex + props.products.length) - 1;
  const numPages = Math.ceil(props.totalProducts / 6);
  const firstPage = 0;
  const lastPage = numPages - 1;
  const pages = [...Array(numPages).keys()];

  return (
    <div className="pagination clearfix">
      <p className="pagination-result">
        {firstIndex} - {lastIndex} de <span>{props.totalProducts}</span> productos
      </p>
      <ul className="pagination__list">
        <li>
          <button
            disabled={props.currentPage <= firstPage}
            onClick={() => props.changePage(props.currentPage - 1)}
            className="fa fa-caret-left"
          >
            <span aria-label="Anterior" />
          </button>
        </li>
        {pages.map(page => (
          <li key={page} className={page === props.currentPage ? 'active' : ''}>
            <button onClick={() => props.changePage(page)}>{page + 1}</button>
          </li>
        ))}
        <li>
          <button
            disabled={props.currentPage >= lastPage}
            onClick={() => props.changePage(props.currentPage + 1)}
            className="fa fa-caret-right disabled"
          >
            <span aria-label="Siguiente" />
          </button>
        </li>
      </ul>
    </div>
  );
}

Pagination.propTypes = propTypes;

export default Pagination;
