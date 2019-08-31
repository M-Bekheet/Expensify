import React, { Component } from 'react'
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends Component {
  constructor(props){
    super(props)
  }
  startAddExpense = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Create Expense</h1>
        <ExpenseForm
          onSubmit={this.startAddExpense}
        />      
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)