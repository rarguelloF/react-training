import { combineReducers } from 'redux';

import gallery from './gallery';
import cart from './cart';

const rootReducer = combineReducers({ gallery, cart });

export default rootReducer;
