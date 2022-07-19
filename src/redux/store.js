import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import productReducer from './productReducer';
import categoryReducer from './categoryReducer';

const reducers = {
  products: productReducer,
  categories: categoryReducer,
};

const combinedReducers = combineReducers(reducers);

const store = createStore(
  combinedReducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
