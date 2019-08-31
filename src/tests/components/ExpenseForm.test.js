import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should render Expense Form', () => {
  const wrapper = shallow( <ExpenseForm/> );
  expect(wrapper).toMatchSnapshot();
})

test('should render Expense Form with expense data', () => {
  const wrapper = shallow( <ExpenseForm expense={expenses[0]}/> );
  expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form validation', () => {
  const wrapper = shallow( <ExpenseForm/> );
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  })
  expect(wrapper.state('error').length).toBeGreaterThan(1);
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () => {
  const wrapper = shallow( <ExpenseForm/> );
  const value = 'New Description';
  wrapper.find('input').at(0).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('description')).toBe(value)
})

test('should set note on text area change', () => {
  const wrapper = shallow( <ExpenseForm/> );
  const value = 'My New Note';
  wrapper.find('textarea').simulate('change', {
    target: {value}
  })
  expect(wrapper.state('note')).toBe(value)
})

test('should set note on amount change for valid values', () => {
  const wrapper = shallow( <ExpenseForm/> );
  const value = '14.45';
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe(value)
})

test('should not set note on amount change for invalid values', () => {
  const wrapper = shallow( <ExpenseForm/> );
  const value = '14.855';
  wrapper.find('input').at(1).simulate('change', {
    target: {value}
  })
  expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow( <ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('note')).toBe('');
  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt,
    id: expenses[0].id
  });
})

test('should set new date on data change', () => {
  const wrapper = shallow(<ExpenseForm />)
  const now = moment(66);
  wrapper.find('#expense_date').prop('onDateChange')(now)
  expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calendar focus on change', () => {
  const focused = true;
  const wrapper = shallow( <ExpenseForm />);
  wrapper.find('#expense_date').prop('onFocusChange')({focused});
  expect(wrapper.state('calendarFocused')).toEqual(focused);
})