import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import {DateRangePicker} from 'react-dates';

export class ExpenseListFilters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      calendarFocused: null
    }
  }
  onDatesChange = ({startDate, endDate}) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calendarFocused => {
    this.setState({calendarFocused})
  })
  onTextChange =(e) => this.props.setTextFilter(e.target.value)
  onSortChange = e => {
    e.target.value === 'amount' ? this.props.sortByAmount() : this.props.sortByDate()
  }

  render(){
    return(
      <div>
        <input type="text" value={this.props.filters.text} onChange={this.onTextChange}/>

        <select 
          value={this.props.filters.sortBy}
          onChange={this.onSortChange}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>

        <DateRangePicker
          startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
          startDateId='start_date'
          endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
          endDateId='end_date'
          onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
          focusedInput={this.state.calendarFocused}
          isOutsideRange={() => false}
          numberOfMonths={1}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  filters: state.filters
})

const mapDispatchToProps = dispatch => ({
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDate: () => dispatch(sortByDate()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: EndDate => dispatch(setEndDate(EndDate)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);