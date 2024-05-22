import { Offer } from '../types/offer';
import { ReviewType } from '../types/review';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { State } from '../types/state';
import { createAPI } from '../services/services';
import { CitiesName, SortingTypes } from './const';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

export const makeFakeOffer = (): Offer => ({
  id: '1',
  title: 'Beautiful & luxurious studio at great location',
  description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
  type: 'apartment',
  price: 200,
  bedrooms: 1,
  maxAdults: 2,
  goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine'],
  host: {
    id: 1,
    name: 'Angelina',
    avatarUrl: '../../../markup/img/avatar-angelina.jpg',
    isPro: true
  },
  city: {
    name: 'Amsterdam',
    location: {
      latitude: 52.35514938496378,
      longitude: 4.673877537499948,
      zoom: 8
    }
  },
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 8
  },
  isFavorite: false,
  isPremium: false,
  rating: 2,
  previewImage: '../../../markup/img/room.jpg',
  images: ['../../../markup/img/room.jpg', '../../../markup/img/apartment-01.jpg', '../../../markup/img/apartment-02.jpg',
    '../../../markup/img/apartment-03.jpg', '../../../markup/img/studio-01.jpg'],
} as Offer);

export const makeFakeOffersList = (): Offer[] => ([
  {
    id: '2',
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
    price: 120,
    bedrooms: 2,
    maxAdults: 4,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine',
      'Coffee machine', 'Dishwasher', 'Towels', 'Baby seat', 'Cabel TV'],
    host: {
      id: 1,
      name: 'Angelina',
      avatarUrl: '../../../markup/img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.1,
    previewImage: '../../../markup/img/room.jpg',
    images: ['../../../markup/img/room.jpg', '../../../markup/img/apartment-01.jpg', '../../../markup/img/apartment-02.jpg',
      '../../../markup/img/apartment-03.jpg', '../../../markup/img/studio-01.jpg'],
  },

  {
    id: '3',
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
    type: 'apartment',
    price: 130,
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine',
      'Coffee machine', 'Towels', 'Cabel TV'],
    host: {
      id: 1,
      name: 'Angelina',
      avatarUrl: '../../../markup/img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 4,
    previewImage: '../../../markup/img/room.jpg',
    images: ['../../../markup/img/room.jpg', '../../../markup/img/apartment-01.jpg', '../../../markup/img/apartment-02.jpg',
      '../../../markup/img/apartment-03.jpg', '../../../markup/img/studio-01.jpg'],
  },
  {
    id: '4',
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a river by the unique lightness of Amsterdam. Where the bustle of the city comes to rest in this alley flowery and colorful.',
    type: 'apartment',
    price: 120,
    bedrooms: 2,
    maxAdults: 3,
    goods: ['Wi-Fi', 'Heating', 'Kitchen', 'Fridge', 'Washing machine',
      'Coffee machine', 'Towels', 'Cabel TV'],
    host: {
      id: 1,
      name: 'Angelina',
      avatarUrl: '../../../markup/img/avatar-angelina.jpg',
      isPro: true
    },
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.35514938496378,
        longitude: 4.673877537499948,
        zoom: 8
      }
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 8
    },
    isFavorite: true,
    isPremium: false,
    rating: 3.1,
    previewImage: '../../../markup/img/room.jpg',
    images: ['../../../markup/img/room.jpg', '../../../markup/img/apartment-01.jpg', '../../../markup/img/apartment-02.jpg',
      '../../../markup/img/apartment-03.jpg', '../../../markup/img/studio-01.jpg'],
  }
] as Offer[]);

export const makeFakeReviewsList = (): ReviewType[] => ([{
  id: 2,
  date: '2019-05-08T14:13:56.569Z',
  user: {
    id: 3,
    name: 'Alex',
    avatarUrl: '../../../markup/img/avatar-max.jpg',
    isPro: false
  },
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 4
},
{
  id: 3,
  date: '2019-05-08T14:13:56.569Z',
  user: {
    id: 2,
    name: 'Max',
    avatar: '../../../markup/img/avatar-max.jpg',
    isPro: true
  },
  comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  rating: 3.2
}
] as ReviewType[]);

export const makeFakeStore = (authStat: string, initialState?: Partial<State>): State => ({
  USER: {
    authorizationStatus: authStat,
    userEmail: '' },
  PAGE: {
    currentOfferId: '',
    sortType: SortingTypes.Popular
  },
  OFFERS_DATA: {
    isOffersDataLoading: false,
    offers: makeFakeOffersList(),
    filteredOffers: makeFakeOffersList(),
    cityName: CitiesName.PARIS
  },
  CURRENT_OFFER_DATA: {
    isCurrentOfferDataLoading: false,
    offerInfo: null,
    comments: [],
    nearbyOffers: []
  },
  FAVORITE_OFFERS_DATA: {
    isFavoriteOffersDataLoading: false,
    favoriteOffers: []
  },
  USER_REVIEW: {
    isCommentDataSending: false
  },
  ...initialState ?? {},
});
