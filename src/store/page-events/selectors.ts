import { SlicesName } from '../../const/const';
import { State } from '../../types/state';

export const getSortType = (state: Pick<State, SlicesName.Page>): string => state[SlicesName.Page].sortType;
export const getCurrentOfferId = (state: Pick<State, SlicesName.Page>): string | null => state[SlicesName.Page].currentOfferId;
