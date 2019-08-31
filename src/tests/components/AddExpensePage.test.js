import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper;
beforeEach( () => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>);
})

test('should render Add Expense Page correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle on submit for Add Expense Page', ()=>{
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
})