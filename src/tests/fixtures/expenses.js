import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gas Bill',
    createdAt: 0,
    note: '',
    amount: 12000
  },
  {
    id: '2',
    description: 'Electricity Bill',
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    note: '',
    amount: 100
  },
  {
    id: '3',
    description: 'New Watch',
    createdAt: moment(0).add(8, 'days').valueOf(),
    note: '',
    amount: 5000
  },
]

export default expenses;