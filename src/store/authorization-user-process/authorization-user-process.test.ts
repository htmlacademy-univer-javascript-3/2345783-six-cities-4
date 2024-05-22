import { AuthorizationStatus } from '../../const/const';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { authorizationUserProcess } from './authorization-user-process';

describe('AuthorizationUserProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userEmail: '',
    };

    const result = authorizationUserProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Unknown,
      userEmail: ''
    };

    const result = authorizationUserProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "Auth" with "checkAuthAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userEmail: ''
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: ''
    };

    const result = authorizationUserProcess.reducer(initialState, checkAuthAction.fulfilled);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "checkAuthAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: ''
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userEmail: ''
    };

    const result = authorizationUserProcess.reducer(initialState, checkAuthAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set authorizationStatus to "Auth", userEmail to string with email with "loginAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userEmail: ''
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: 'email@gmail.com'
    };

    const data = {
      login: 'email@gmail.com',
      password: '1234'
    };

    const result = authorizationUserProcess.reducer(initialState, loginAction.fulfilled('email@gmail.com', '', data));

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth" with "loginAction.rejected" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: ''
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userEmail: ''
    };

    const result = authorizationUserProcess.reducer(initialState, loginAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set "NoAuth", with "logoutAction.fulfilled" action', () => {
    const initialState = {
      authorizationStatus: AuthorizationStatus.Auth,
      userEmail: ''
    };
    const expectedState = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      userEmail: ''
    };

    const result = authorizationUserProcess.reducer(initialState, logoutAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
