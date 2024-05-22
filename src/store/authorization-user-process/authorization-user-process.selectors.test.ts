import { SlicesName } from '../../const/const';
import { getAuthorizationStatus, getUserEmail } from './selectors';

describe('AuthorizationUserProcess selectors', () => {
  const state = {
    [SlicesName.User]: {
      authorizationStatus: '200',
      userEmail: 'sable_runner@gmail.com'
    }
  };

  it('should return users authorization status from state', () => {
    const { authorizationStatus } = state[SlicesName.User];
    const result = getAuthorizationStatus(state);
    expect(result).toEqual(authorizationStatus);
  });

  it('should return users email from state', () => {
    const { userEmail } = state[SlicesName.User];
    const result = getUserEmail(state);
    expect(result).toEqual(userEmail);
  });
});
