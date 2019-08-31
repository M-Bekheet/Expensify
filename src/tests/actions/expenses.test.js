import {addExpense, startAddExpense, editExpense, removeExpense, setExpenses, startSetExpenses} from '../../actions/expenses';
import database from '../../firebase/firebase';
import expenses from '../fixtures/expenses';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expensesData = {}
  expenses.forEach(({id, description, createdAt, amount, note}) => {
    expensesData[id] = {description, createdAt, amount, note}
  })
  database.ref('expenses').set(expensesData).then(() => done())
})

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
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[1]
  })
})

test('should add expense to database store', (done) => {
  const expenseData = {
    description: 'Fan',
    note: 'Bought it in summer',
    amount: 320,
    createdAt: 1400,
  }

  const store = createMockStore ({});
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then(snapshot => {
    expect(snapshot.val()).toEqual(expenseData)
    done();
  })
})

test('should add expense to database store with default expense values', (done) => {

  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  }

  const store = createMockStore ({});
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpense
      }
    })
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then(snapshot => {
    expect(snapshot.val()).toEqual({
      ...defaultExpense,
    })
    done();
  })
})

test('should setup set expneses action with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch expenses from firebase database', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})