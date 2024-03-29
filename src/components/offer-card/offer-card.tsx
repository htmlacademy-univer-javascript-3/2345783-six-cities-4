import { Link } from 'react-router-dom';
import { Offer } from '../../types/offer';
import { getRatingStars } from '../../const/utils';

type OfferCardProps = {
  offer: Offer;
  onCardMouseOver({id}:{id:number}): void;
};

export default function OfferCard({ offer: offer, onCardMouseOver }: OfferCardProps): JSX.Element {
  const {id, title, type, price, isPremium, isFavorite, previewImage: image, rating} = offer;
  return (
    <article className="cities__card place-card"
      onMouseOver={(evt)=> {
        const target = evt.currentTarget as HTMLElement;
        onCardMouseOver({id: +target.id});
      }}
    >

      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={image} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              {isFavorite && <use xlinkHref="#icon-bookmark"></use>}
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingStars(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`} state={offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
