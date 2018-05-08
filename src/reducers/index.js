import { combineReducers } from 'redux';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
  state: (state = {}) => state,
  orders: orderReducer
});

export default rootReducer;
