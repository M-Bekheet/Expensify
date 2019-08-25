import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove an expense', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id}
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should add an expense', () => {
  const action = { type: 'ADD_EXPENSE', expense: {
    id: '4',
    description: 'Network Subscription',
    createdAt: 150,
    note: '',
    amount: 100
  }}
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
  const amount = 180;
  const action = { 
    type: 'EDIT_EXPENSE', 
    id: expenses[1].id,
    updates: { amount }
  }
  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toBe(amount)
})

test('should not edit an expense if id not found', () => {
  const amount = 180;
  const action = { 
    type: 'EDIT_EXPENSE', 
    id: -1,
    updates: { amount }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses)
})