import {SlicesName} from '../../const/const';
import {State} from '../../types/state';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: Pick<State, SlicesName.User>): string => state[SlicesName.User].authorizationStatus;
export const getUserInfo = (state: Pick<State, SlicesName.User>): UserData | null => state[SlicesName.User].userInfo;
