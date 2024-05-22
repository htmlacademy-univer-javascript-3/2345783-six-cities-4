import { SortingTypes } from './const';
import { makeFakeOffersList } from './mocks';
import { humanizeDate, sortOffers, validatePassword } from './utils';

describe('Utility functions', () => {
  describe('Function: sortOffers', () => {
    it('should sort offers py price low to high', () => {
      const offers = makeFakeOffersList();
      const expected = [offers[0], offers[2], offers[1]];
      const result = sortOffers(offers, SortingTypes.LowToHigh);

      expect(result).toEqual(expected);
    });

    it('should sort offers py price high to low', () => {
      const offers = makeFakeOffersList();
      const expected = [offers[1], offers[0], offers[2]];
      const result = sortOffers(offers, SortingTypes.HighToLow);

      expect(result).toEqual(expected);
    });

    it('should sort offers py rating (top rated first)', () => {
      const offers = makeFakeOffersList();
      const expected = [offers[1], offers[0], offers[2]];
      const result = sortOffers(offers, SortingTypes.TopRated);

      expect(result).toEqual(expected);
    });
  });

  describe('Function: validatePassword', () => {
    it('should return "true" because the password is valid', () => {
      const password = 'paswrd123';
      const result = validatePassword(password);
      expect(result).toBe(true);
    });

    it('should return "false" because the password is invalid (does not contain at least one number)', () => {
      const password = 'paswrd';
      const result = validatePassword(password);
      expect(result).toBe(false);
    });

    it('should return "false" because the password is invalid (does not contain at least one letter)', () => {
      const password = '123';
      const result = validatePassword(password);
      expect(result).toBe(false);
    });
  });

  describe('Function: humanizeDate', () => {
    it('should return date in MMMM YYYY format', () => {
      const date = '2019-05-08T14:13:56.569Z';
      const expected = 'May 2019';
      const result = humanizeDate(date);

      expect(result).toEqual(expected);
    });

    it('should return "invalid date" message because the month is invalid', () => {
      const date = '2019-13-08T14:13:56.569Z';
      const expected = 'Invalid Date';
      const result = humanizeDate(date);

      expect(result).toEqual(expected);
    });

    it('should return "invalid date" message because the time is invalid', () => {
      const date = '2019-05-08T34:13:56.569Z';
      const expected = 'Invalid Date';
      const result = humanizeDate(date);

      expect(result).toEqual(expected);
    });
  });
});
