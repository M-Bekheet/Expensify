import moment from 'moment';

// Selectors

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return  textMatch && startDateMatch && endDateMatch;
  }).sort((a, b) => {
    return sortBy === 'date' ? a.createdAt - b.createdAt : (sortBy === 'amount' ? a.amount - b.amount : 0)
  })
};