import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let wrapper, startEditExpense, startRemoveExpense, history;
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    startEditExpense={startEditExpense} 
    startRemoveExpense={startRemoveExpense} 
    history={history} 
    expense={expenses[1]}
    /> );
})

test('should render Edit Expense Page correctly', () => {
  expect(wrapper).toMatchSnapshot();
})

test('should handle Edit Expense correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle Remove Expense', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[1].id
  });
  // expect(history.push).toHaveBeenLastCalledWith('/');
})