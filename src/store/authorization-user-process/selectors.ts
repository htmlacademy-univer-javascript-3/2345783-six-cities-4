import {SlicesName} from '../../const/const';
import {State} from '../../types/state';

export const getAuthorizationStatus = (state: Pick<State, SlicesName.User>): string => state[SlicesName.User].authorizationStatus;
export const getUserEmail = (state: Pick<State, SlicesName.User>): string => state[SlicesName.User].userEmail;
