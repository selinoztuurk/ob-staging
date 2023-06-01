import { Link } from 'react-router-dom';

import styles from 'components/home/new-comers/styles.module.scss';
import OfferCard from 'components/common/offer-card/OfferCard';
import ComponentLoading from 'components/loading/ComponentLoading';

import OfferApi, { Offer } from 'api/endpoints/OfferApi';

import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

const NewComers = (): JSX.Element => {
  const { data: offers, isLoading: showSpinner } =
    OfferApi.useFetchAllOffersQuery({ limit: 6 });

  const renderNewComersList = (offerList: Offer[]): JSX.Element => {
    return (
      <div className={styles['new-comers-list']}>
        {offerList?.map((offer) => (
          <OfferCard key={offer.slug} offer={offer} />
        ))}
      </div>
    );
  };

  return (
    <div className={styles['new-comers-container']}>
      <div className={`home-component-title ${styles.title}`}>
        {i18n.t('newComers_title')}
      </div>
      <div className={`home-component-subtitle ${styles.subtitle}`}>
        {i18n.t('newComers_subtitle')}
      </div>
      {showSpinner ? (
        <ComponentLoading />
      ) : (
        <>
          <Link to={Paths.ALL_OFFERS} className={styles.bold}>
            {i18n.t('newComers_seeAll')}
          </Link>
          {offers && renderNewComersList(offers)}
        </>
      )}
    </div>
  );
};

export default NewComers;
