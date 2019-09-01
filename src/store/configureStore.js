import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';
import thunk from 'redux-thunk';
/*
  Creating the store made of the 2 reducers
*/

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore( combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    auth: authReducer
  }),
    composeEnhancer( applyMiddleware(thunk)    )
   );

  return store;
}
