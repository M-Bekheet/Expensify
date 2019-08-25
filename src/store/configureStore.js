import {combineReducers, createStore} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

/*
  Creating the store made of the 2 reducers
*/

export default () => {
  const store = createStore( combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
  }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
   );

  return store;
}
