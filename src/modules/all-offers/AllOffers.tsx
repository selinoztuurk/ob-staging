import OfferCard from 'components/common/offer-card/OfferCard';

import styles from 'modules/all-offers/styles.module.scss';

import OfferApi, { Offer } from 'api/endpoints/OfferApi';

import i18n from 'common/i18n/i18n';

const AllOffers = (): JSX.Element => {
  const { data: offers } = OfferApi.useFetchAllOffersQuery({});

  const renderNewComersList = (offerList: Offer[]): JSX.Element => {
    return (
      <div className={styles['all-offers-list']}>
        {offerList?.map((offer) => (
          <OfferCard key={offer.slug} offer={offer} />
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="page-title-container">
        <h1 className="page-title">{i18n.t('allOffers_title')}</h1>
      </div>
      <div className="page-container">
        <div className={styles['all-offers-container']}>
          {offers && renderNewComersList(offers)}
        </div>
      </div>
    </>
  );
};

export default AllOffers;
