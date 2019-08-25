import filterReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup defualt filter values', () => {
  const state = filterReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  })
})

test('should test sort by amount\'s filter ', () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_AMOUNT'})
  expect(state.sortBy).toBe('amount')
})

test('should test sort by date\'s filter ', () => {
  const state = filterReducer(undefined, {type: 'SORT_BY_DATE'})
  expect(state.sortBy).toBe('date')
})

test('should test sort by set start date', () => {
  const startDate = moment(0).add(5, 'minutes');
  const state = filterReducer(undefined, {type: 'SET_START_DATE', startDate})
  expect(state.startDate).toEqual(startDate)
})

test('should test sort by set end date', () => {
  const endDate = moment(0).add(5, 'minutes');
  const state = filterReducer(undefined, {type: 'SET_END_DATE', endDate})
  expect(state.endDate).toEqual(endDate)
})