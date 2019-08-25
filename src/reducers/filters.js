
/*
  Filters Reducer
*/

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'amount',
  startDate: undefined,
  endDate: undefined
}

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_FILTER':
      return {
        ...state,
        ...action.updates
      }
    case 'SORT_BY_AMOUNT':
      return { ...state, sortBy: 'amount' }
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' }
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate }
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate }
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text }

    default:
      return state;
  }
}

