import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {sortByDate} from './actions/filters';
import {setTextFilter} from './actions/filters';
import { getVisibleExpenses } from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
store.subscribe( ()=>{
  const state = store.getState();
  // console.log(state);
  // console.log(getVisibleExpenses(state.expenses, state.filters));
})

store.dispatch(addExpense({description: 'Journey to Cairo', amount: 500, createdAt: 14}))
store.dispatch(addExpense({description: 'Journey to The Center of The Earth', amount: 12000, createdAt: 101}))
store.dispatch(addExpense({description: 'Rent', amount: 220, createdAt: 444}))
store.dispatch(addExpense({description: 'Gas Bill', amount: 90, createdAt: 420}))


const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render( jsx, document.getElementById('app') );
