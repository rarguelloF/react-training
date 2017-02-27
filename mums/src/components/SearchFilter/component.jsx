import React, { PropTypes } from 'react';

import debounce from 'lodash.debounce';


const propTypes = {
  changeSearchTerm: PropTypes.func.isRequired,
};

class SearchFilter extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.delayedCallback = debounce(
      event => this.props.changeSearchTerm(event.target.value),
      300,
    );
  }

  onChange(event) {
    event.persist();
    this.delayedCallback(event);
  }

  render() {
    return (
      <div className="search-box col-md-3">
        <h4 className="heading-4">Buscador</h4>
        <div className="input-search-wrap">
          <input
            type="search"
            placeholder="Quiero pedir..."
            onChange={this.onChange}
          />
          <i className="fa fa-search" aria-hidden />
        </div>
      </div>
    );
  }
}

SearchFilter.propTypes = propTypes;

export default SearchFilter;
