import {addExpense, editExpense, removeExpense} from '../../actions/expenses';


test('Should setup remove expense action object', ()=>{
  const action = removeExpense({id: 'abc123'})
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abc123'
  })
})

test('Should setup edit expense action object', ()=>{
  const action = editExpense('123abc', {createdAt: 123, note: 'text'})
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates:{
      createdAt: 123,
      note: 'text'
    }
  })
})

test('Should setup add expense action object with provided values', ()=>{
  const expenseData = {
    description : 'My Gas Bill',
    note : 'Paid it in cash',
    amount : 1400,
    createdAt : 1212
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData, 
      id: expect.any(String)
    }
  })
})

test('Should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      note: '',
      amount: 0,
      createdAt: 0,
      id: expect.any(String),
    }
  })
})