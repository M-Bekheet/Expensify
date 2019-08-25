import React from 'react';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import moment from 'moment';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {filters, altFilters} from '../fixtures/filters';

let wrapper, setTextFilter, sortByAmount, sortByDate, setStartDate,setEndDate;

beforeEach( () => {
  setTextFilter = jest.fn();
  sortByAmount = jest.fn();
  sortByDate = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters 
      filters={filters}
      setTextFilter={setTextFilter}
      sortByAmount={sortByAmount}
      sortByDate={sortByDate}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  )
})

test('should render Expense List Filters correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should render Expense List Filters correctly with given filters', () => {
  wrapper.setProps({ filters: altFilters})
  expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
  const value = 'bill';
  wrapper.find('input').simulate('change', {
    target: {value}
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should sort by date', () => {
  const value = 'date';
  wrapper.find('select').simulate('change', {
    target: {value}
  })
  expect(sortByDate).toHaveBeenCalledTimes(1)
})

test('should sort by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change', {
    target: {value}
  })
  expect(sortByAmount).toHaveBeenCalledTimes(1)
})

test('should handle date changes', () => {
  const startDate = moment(0).add(4, 'months');
  const endDate = moment(0).add(2, 'years');
  wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
  expect(setStartDate).toHaveBeenCalledWith(startDate)
  expect(setEndDate).toHaveBeenCalledWith(endDate)
})

test('should handle date focus change', () => {
  let calendarFocused = 'startDate'
  wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
  calendarFocused = 'endDate';
})