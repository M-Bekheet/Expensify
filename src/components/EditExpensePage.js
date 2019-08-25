import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from './ExpenseForm';
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{
  constructor(props){
    super(props)
  }
  editExpense = expense => {
    this.props.editExpense(expense.id, expense)
    this.props.history.push('/');
  }
  removeExpense = () => {
    this.props.removeExpense({ id: this.props.expense.id })
    this.props.history.push('/');
  }
  render(){
    return(
      <div>
        <ExpenseForm
          onSubmit={this.editExpense}
          expense={this.props.expense}
          id="edit_expense_form"
        />

        <button onClick={this.removeExpense}>Remove</button>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find( expense => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: ( id, expense ) => dispatch( editExpense(id, expense) ),
  removeExpense: data => dispatch( removeExpense(data) )
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
