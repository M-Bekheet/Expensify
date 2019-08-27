import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses';
import expensesTotalSelector from '../selectors/expenses-total';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpensesSummary = ({expensesTotal, expensesCount}) => {
  const expenseWord = expensesCount.length === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
  return(
    <div>
      <h1>Expenses Summary</h1>
      <p>
        Viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
      </p>
    </div>
  )
}

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return{
    expensesTotal: expensesTotalSelector(visibleExpenses),
    expensesCount: visibleExpenses.length,
  }
}


export default connect(mapStateToProps)(ExpensesSummary)

