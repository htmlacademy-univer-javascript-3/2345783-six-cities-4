import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Map from '../../components/map/map';
import OffersBoard from '../../components/offers-board/offers-board';
import { useAppSelector } from '../../hooks';
import { getFilteredOffers } from '../../store/offers-data/selectors';


export default function MainScreen(): JSX.Element {
  const offers = useAppSelector(getFilteredOffers);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <OffersBoard offers={offers} />
            <div className="cities__right-section">
              <Map isMainScreen offers={offers}/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
