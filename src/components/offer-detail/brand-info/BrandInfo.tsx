import styles from './styles.module.scss';

import { OfferDetail } from 'api/endpoints/OfferApi';

type BrandInfoProps = {
  offerDetail: OfferDetail;
};

const BrandInfo = ({ offerDetail }: BrandInfoProps) => {
  return (
    <div className={`${styles['brand-info']}`}>
      <img
        className={styles['brand-logo']}
        src={offerDetail.brand.logo_url}
        alt={offerDetail.brand.name}
      />
      <div className={styles['brand-name']}>{offerDetail.brand.name}</div>
    </div>
  );
};

export default BrandInfo;
