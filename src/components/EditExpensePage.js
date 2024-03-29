import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
  constructor(props){
    super(props)
  }
  startEditExpense = expense => {
    this.props.startEditExpense(expense.id, expense)
    this.props.history.push('/');
  }
  startRemoveExpense = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id })
    this.props.history.push('/');
  }
  render(){
    return(
      <div>
        <div className="page-header">
          <div className="content-container">
            <div className="page-header__title">
              Edit Expense
            </div>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            onSubmit={this.startEditExpense}
            expense={this.props.expense}
            id="edit_expense_form"
          />
          <button className="button button-danger" onClick={this.startRemoveExpense}>Remove Expense</button>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find( expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: ( id, expense ) => dispatch( startEditExpense(id, expense) ),
  startRemoveExpense: ({id}) => dispatch( startRemoveExpense({id}) )
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
