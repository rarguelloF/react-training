import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from 'src/actionCreators/gallery';
import CategoryFilter from './component';


function mapStateToProps(state) {
  return {
    categoryFilters: state.gallery.filters.category,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    clickAllFilter: bindActionCreators(actionCreators.clickAllFilter, dispatch),
    clickMainDishFilter: bindActionCreators(actionCreators.clickMainDishFilter, dispatch),
    clickDrinkFilter: bindActionCreators(actionCreators.clickDrinkFilter, dispatch),
    clickDessertFilter: bindActionCreators(actionCreators.clickDessertFilter, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);
