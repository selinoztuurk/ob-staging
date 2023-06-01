import { Link } from 'react-router-dom';

import styles from 'components/common/offer-card/styles.module.scss';

import { Offer, Category } from 'api/endpoints/OfferApi';

import Paths from 'routing/Paths';

type OfferCardProps = {
  offer: Offer;
};

export default function OfferCard({ offer }: OfferCardProps) {
  const renderCategories = (categories: Category[]): JSX.Element => {
    return (
      <div className={styles.categories}>
        {categories?.slice(0, 2).map((category) => (
          <div
            key={category.slug}
            className={styles.category}
            style={{ backgroundColor: category.color }}
          >
            {category.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className={styles['offer-card-container']}>
      <Link to={Paths.OFFER_DETAIL + offer.slug}>
        {renderCategories(offer.categories)}
        <img
          className={styles.image}
          src={offer.images[0].url}
          alt={offer.slug}
        />
        <div className={styles['offer-card-row']}>
          <img
            className={styles['brand-logo']}
            src={offer.brand.logo_url}
            alt={offer.brand.name}
          />
          <div className={styles['offer-details']}>
            <div className={styles.title}>{offer.title}</div>
            <div className={styles.brand}>{offer.brand.name}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
