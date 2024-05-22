import { SlicesName } from '../../const/const';
import { getCommentDataSendingStatus } from './selectors';

describe('UserReview Selectors', () => {
  const state = {
    [SlicesName.UserReview]: {
      isCommentDataSending: true
    }
  };

  it ('should return review data sending status', () => {
    const { isCommentDataSending } = state[SlicesName.UserReview];
    const result = getCommentDataSendingStatus(state);
    expect(result).toEqual(isCommentDataSending);
  });
});
