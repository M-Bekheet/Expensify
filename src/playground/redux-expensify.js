import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


/*
Actions
*/

const addExpense = ( {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {} ) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = ( id, updates ) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const editFilter = (updates) => ({
  type: 'EDIT_FILTER',
  updates
})

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
})

const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
})

const setDescription = description => ({
  type: 'SET_DESCRIPTION',
  description
})

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter(expense =>{
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    const startDateMatch = typeof startDate !== 'number' || startDate <= expense.createdAt ;
    const endDateMatch = typeof endDate !== 'number' || endDate >= expense.createdAt;

    return textMatch && startDateMatch && endDateMatch;
  }).sort( (a,b) => {
    return sortBy === 'date' ? a.createdAt - b.createdAt : (sortBy === 'amount' ? a.amount - b.amount : 0)
  })
};

/*
  Expenses Reducer
*/
const expensesReducerDefaultState = [];

const expensesReducer = ( state = expensesReducerDefaultState, action ) => {
  switch(action.type){
    case 'ADD_EXPENSE' :
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter( ({id}) => id !== action.id );
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
}



/*
  Filters Reducer
*/

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action ) => {
  switch(action.type){
    case 'EDIT_FILTER': 
      return {
        ...state,
        ...action.updates
      } 
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SET_START_DATE':
      return{ ...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return{ ...state, endDate: action.endDate }
    case 'SET_DESCRIPTION':
      return { ...state, description: action.description }
    
    default: 
      return state;
  }
}



/*
  Creating the store made of the 2 reducers
*/

const store = createStore( combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}) );

store.subscribe( () => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
  // console.log(store.getState())
})



/*
 Changing states of the store by dispatching the Actions 
*/


const expenseOne = store.dispatch( addExpense( { description: 'Rent', amount: 500, createdAt: 800 } ) )
const expenseTwo = store.dispatch( addExpense( { description: 'Coffee', amount: 7000 , createdAt: -200} ) )
const expenseThree = store.dispatch( addExpense( { description: 'Villa', amount: 5800000, createdAt: 2000 } ) )

// store.dispatch( removeExpense(expenseTwo.expense) );
// store.dispatch( editExpense( expenseThree.expense.id, { amount: 999999 } ) )

//  store.dispatch( editFilter({ text: 'alphabet' }) )
 
//  store.dispatch( sortByDate() );
//  store.dispatch( sortByAmount() );

// store.dispatch(setStartDate(10));
// store.dispatch(setEndDate(100));
// store.dispatch( sortByAmount() );

/*
  A prototype for a plain state 
*/

const demoState = {
  expenses: [{
    id: 'vjefjds',
    description: 'January Expense',
    note: 'This is the final payment for this address',
    amount: 450000,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}