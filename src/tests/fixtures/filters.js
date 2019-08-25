import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}

const altFilters = {
  text: '',
  sortBy: 'date',
  startDate: moment(0),
  endDate: moment(0).add(4, 'days')
}

export { filters, altFilters }