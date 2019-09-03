import React from 'react';
import selectExpensesTotal from '../selectors/expenses-total';
import { Link } from 'react-router-dom';
import selectExpenses from '../selectors/expenses';
import expensesTotalSelector from '../selectors/expenses-total';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpensesSummary = ({expensesTotal, expensesCount}) => {
  const expenseWord = expensesCount.length === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
  return(
    <div className="page-header">
      <div className="content-container">
      <div className="page-header__title">
        Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
      </div>
      <div className="page-header_actions">
        <Link to="/create-expense" className="button">Add Expense</Link>
      </div>
      </div>
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

