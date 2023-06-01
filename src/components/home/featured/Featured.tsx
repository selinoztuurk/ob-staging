import styles from 'components/home/featured/styles.module.scss';

import OfferCard from 'components/common/offer-card/OfferCard';

import OfferApi, { Offer } from 'api/endpoints/OfferApi';

import i18n from 'common/i18n/i18n';

const Featured = () => {
  const { data: offers } = OfferApi.useFetchFeaturedOffersQuery({
    paginate: 6,
    page: 1,
  });

  const renderFeaturedList = (offerList: Offer[]): JSX.Element => {
    return (
      <div className={styles['featured-offers-list']}>
        {offerList?.map((offer) => (
          <OfferCard key={offer.slug} offer={offer} />
        ))}
      </div>
    );
  };

  return (
    <div
      className={`${styles['featured-offers-container']} white-rounded-container`}
    >
      <div className={`home-component-title`}>{i18n.t('featured_title')}</div>
      <div className={`home-component-subtitle ${styles.subtitle}`}>
        {i18n.t('featured_subtitle')}
      </div>
      {offers && renderFeaturedList(offers)}
    </div>
  );
};

export default Featured;
