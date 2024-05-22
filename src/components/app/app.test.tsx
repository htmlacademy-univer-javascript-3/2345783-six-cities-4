import { MemoryHistory, createMemoryHistory } from 'history';
import { withHistory, withStore } from '../../const/mock-component';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { makeFakeStore } from '../../const/mocks';
import App from './app';
import { render, screen } from '@testing-library/react';

describe('Application routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "MainPage" when user navigates to "/"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const mockStore = makeFakeStore(AuthorizationStatus.NoAuth);
    const { withStoreComponent } = withStore(withHistoryComponent, mockStore);
    mockHistory.push(AppRoute.Root);

    render(withStoreComponent);

    expect(screen.getByText(new RegExp(`${mockStore.OFFERS_DATA.offers.length} places to stay in ${mockStore.OFFERS_DATA.cityName}`, 'i'))).toBeInTheDocument();
  });

  it('should render "AuthScreen" when user navigate to "/login"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore(AuthorizationStatus.NoAuth));
    mockHistory.push(AppRoute.Login);

    render(withStoreComponent);

    expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigates to "/favorites"', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore(AuthorizationStatus.Auth));

    mockHistory.push(AppRoute.Favorites);

    render(withStoreComponent);

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigates to invalid page', () => {
    const withHistoryComponent = withHistory(<App />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore(AuthorizationStatus.Auth));

    mockHistory.push('/sdfghjkl');

    render(withStoreComponent);

    expect(screen.getByText(/Page not found/i)).toBeInTheDocument();
  });
});
