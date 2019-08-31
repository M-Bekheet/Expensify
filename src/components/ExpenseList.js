import React from 'react';
import {connect} from 'react-redux';
import ExpenseListeItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';


export const ExpenseList = props => (
     props.expenses.length === 0 ? 
     (
        <div>No Expense Found</div>
     ) : 
     (
      <div>
        <h1>Expense List</h1>
        {
          props.expenses.map(expense => <ExpenseListeItem key={expense.id} {...expense} />)
        }
      </div>
    )
  
);

const mapStateToProps = state => {
  console.log(state.expenses);
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpenseList);

