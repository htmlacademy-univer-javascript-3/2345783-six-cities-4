import { SlicesName } from '../../const/const';
import { getCurrentOfferId, getSortType } from './selectors';

describe('PageEvents Selectors', () => {
  const state = {
    [SlicesName.Page]: {
      currentOfferId: '1',
      sortType: 'Price: low to high'
    }
  };

  it('should return current offer id from state', () => {
    const { currentOfferId } = state[SlicesName.Page];
    const result = getCurrentOfferId(state);
    expect(result).toEqual(currentOfferId);
  });

  it('should return sorting type from state', () => {
    const { sortType } = state[SlicesName.Page];
    const result = getSortType(state);
    expect(result).toEqual(sortType);
  });
});
