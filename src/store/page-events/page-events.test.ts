import { SortingTypes } from '../../const/const';
import { pageEvents, setCurrentOfferId, setSortType } from './page-events';

describe('PageEvents Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      sortType: SortingTypes.Popular,
      currentOfferId: null,
    };

    const result = pageEvents.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      sortType: SortingTypes.Popular,
      currentOfferId: null,
    };

    const result = pageEvents.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set sortType to string with "setSortType"', () => {
    const initialState = {
      sortType: SortingTypes.Popular,
      currentOfferId: null,
    };

    const expectedState = {
      sortType: SortingTypes.HighToLow,
      currentOfferId: null,
    };

    const result = pageEvents.reducer(initialState, setSortType(SortingTypes.HighToLow));

    expect(result).toEqual(expectedState);
  });

  it('should set currentOfferId to string with "setSortType"', () => {
    const initialState = {
      sortType: SortingTypes.Popular,
      currentOfferId: null,
    };

    const expectedState = {
      sortType: SortingTypes.Popular,
      currentOfferId: '1',
    };

    const result = pageEvents.reducer(initialState, setCurrentOfferId('1'));

    expect(result).toEqual(expectedState);
  });
});
