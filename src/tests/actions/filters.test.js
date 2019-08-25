import {
  editFilter, 
  sortByDate, 
  sortByAmount, 
  setEndDate, 
  setStartDate, 
  setTextFilter
} from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', ()=>{
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should generate set end date action object', ()=>{
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should generate edit filter action object with given values', () => {
  const defaultFilter = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const action = editFilter(defaultFilter)
  expect(action).toEqual({
    type: 'EDIT_FILTER',
    updates: {
      ...defaultFilter
    }
  })
})

test('should generate sort by date filter action object', ()=>{
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  })
})

test('should generate sort by amount filter action object', ()=>{
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  })
})

test('should generate sort by set text filter action object with default value', () => {
  const action = setTextFilter('');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should generate sort by set text filter action object with provided value', () => {
  const text = 'My Text';
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text
  })
})