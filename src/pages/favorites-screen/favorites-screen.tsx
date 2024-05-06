import FavoritesList from '../../components/favorites-list/favorites-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import { FavoritesEmpty } from '../../components/favorites-empty/favorites-empty';
import { useAppSelector } from '../../hooks';
import { getFavoriteOffers } from '../../store/favorite-offers-data/selectors';


export default function FavoritesScreen(): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  return (
    <div className="page">
      <Header/>
      {!favoriteOffers.length ? <FavoritesEmpty/> :
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                <FavoritesList />
              </ul>
            </section>
          </div>
        </main>}
      <Footer/>
    </div>
  );
}
