import authReducer from '../../reducers/auth';

test('authReducer should handle login action correctly', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abc123'
  }
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid)
})

test('authReducer should handle logout action correctly', () => {
  const action = {
    type: 'LOGOUT',
  }
  const state = authReducer({ uid: 'neverland'}, action);
  expect(state).toEqual({})
})