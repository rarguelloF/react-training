import { combineReducers } from 'redux';

import shop from './shop';
import cart from './cart';

const rootReducer = combineReducers({ shop, cart });

export default rootReducer;
