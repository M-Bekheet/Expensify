import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import numeral from 'numeral';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';


test('should render Expenses Summary with 1 expense', () => {
  const wrapper = shallow( <ExpensesSummary expensesTotal={1} expensesCount={1} /> )
  expect(wrapper).toMatchSnapshot()
})

test('should render Expenses Summary with multiple expenses', () => {
  const wrapper = shallow( <ExpensesSummary expensesTotal={757424518} expensesCount={32} /> )
  expect(wrapper).toMatchSnapshot()
})