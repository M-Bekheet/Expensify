import { login, logout } from '../../actions/auth';

test('should handle login action correctly', () => {
  const uid = 'lala123';
  const result = login(uid);
  expect(result).toEqual({
    type: 'LOGIN',
    uid
  })
})

test('should handle logout action correctly', () => {
  const result = logout();
  expect(result).toEqual({
    type: 'LOGOUT',
  })
}) 