import expensesTotalSelector from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return when no expense is passed', ()=>{
  const res = expensesTotalSelector()
  expect(res).toBe(0);
})

test('should return add up a single expense', () => {
  const res = expensesTotalSelector([expenses[0]])
  expect(res).toBe(12000)
})

test('should calculate total of expenses correctly', ()=>{
  const res = expensesTotalSelector(expenses)
  expect(res).toBe(17100);
})

