import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboardPage = () => {
  return (
    <div>
      <ExpensesSummary/>
      <ExpenseListFilters/>
      <ConnectedExpenseList/>
    </div>
  )
}

export default ExpenseDashboardPage;
