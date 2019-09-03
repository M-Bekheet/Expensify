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
        <div className="page-header">
          <div className="content-container">
            <div className="page-header__title">
              Create Expense
            </div>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.startAddExpense}
          />      
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)