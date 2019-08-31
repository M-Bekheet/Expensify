import React from 'react'
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      amount: props.expense ? (props.expense.amount/100).toString() : '',
      note: props.expense ? props.expense.note : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      id: props.expense ? props.expense.id : ''
    }
  }
  onDescriptionChange = (e)=>{
    const description = e.target.value
    this.setState({description})
  }
  onAmountChange = (e)=>{
    const amount = e.target.value;
    if ( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/) ){
      this.setState({amount})
    }
  }
  onNoteChange = (e)=>{
    const note = e.target.value
    this.setState({note})
  }
  onFocusChange = ({focused}) => {
    this.setState({calendarFocused: focused});
  }
  onDateChange = date => {
    return date && this.setState({createdAt: date})
  }

  onSubmit = e => {
    e.preventDefault();
    const {amount, description} = this.state;

    if( !amount || !description ){
      this.setState({error: 'Please provide description and amount.'})
    } else{
      this.setState({error: ''})
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(amount, 10) * 100, //cents
        note: this.state.note,
        createdAt: this.state.createdAt.valueOf(), //melliseconds,
        id: this.state.id
      })
    }
  }

  render(){
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type="text"
          value={this.state.description}
          placeholder='Description'
          onChange={this.onDescriptionChange}
        />
        <input 
          type="text"
          value={this.state.amount}
          placeholder='Amount'
          onChange={this.onAmountChange}
        />

        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange} 
          focused={this.state.calendarFocused} 
          onFocusChange={this.onFocusChange}
          id="expense_date"
          numberOfMonths={1}
          isOutsideRange={() => false}
        />

        <textarea
          placeholder='Add a note for your expense (optional)'
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
    

        <input type="submit" />

        {this.state.error && <div>
          <i>Error</i> {this.state.error}
        </div>}

      </form>
    )
  }
}

