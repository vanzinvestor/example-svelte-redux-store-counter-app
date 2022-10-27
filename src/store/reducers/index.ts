import { combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';

const rootReducers = combineReducers({
  counts: counterReducer,
});

export default rootReducers;
