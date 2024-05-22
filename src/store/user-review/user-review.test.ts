import { sendOfferCommentAction } from '../api-actions';
import { userReview } from './user-review';

describe('UserReview Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isCommentDataSending: false,
    };

    const result = userReview.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = { type: '' };
    const expectedState = {
      isCommentDataSending: false,
    };

    const result = userReview.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set isCommentDataSending to true with sendOfferCommentAction.pending', () => {
    const initialState = {
      isCommentDataSending: false,
    };

    const expectedState = {
      isCommentDataSending: true,
    };

    const result = userReview.reducer(initialState, sendOfferCommentAction.pending);

    expect(result).toEqual(expectedState);
  });

  it('should set isCommentDataSending to false with sendOfferCommentAction.rejected', () => {
    const initialState = {
      isCommentDataSending: true,
    };

    const expectedState = {
      isCommentDataSending: false,
    };

    const result = userReview.reducer(initialState, sendOfferCommentAction.rejected);

    expect(result).toEqual(expectedState);
  });

  it('should set isCommentDataSending to false with sendOfferCommentAction.fulfiled', () => {
    const initialState = {
      isCommentDataSending: true,
    };

    const expectedState = {
      isCommentDataSending: false,
    };

    const result = userReview.reducer(initialState, sendOfferCommentAction.fulfilled);

    expect(result).toEqual(expectedState);
  });
});
