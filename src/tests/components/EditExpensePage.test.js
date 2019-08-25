import React from 'react';
import { EditExpensePage } from '../../components/EditExpensePage';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';

let wrapper, editExpense, removeExpense, history;
beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    editExpense={editExpense} 
    removeExpense={removeExpense} 
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
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('should handle Remove Expense', () => {
  wrapper.find('button').simulate('click');
  expect(removeExpense).toHaveBeenLastCalledWith({
    id: expenses[1].id
  });
  // expect(history.push).toHaveBeenLastCalledWith('/');
})