import styles from './styles.module.scss';

import { OfferDetail } from 'api/endpoints/OfferApi';

import i18n from 'common/i18n/i18n';
import DateUtil from 'common/util/DateUtil';
import { EMPTY_DATA } from 'common/constants/generalConstants';

type DiscountInfoProps = {
  offerDetail: OfferDetail;
};

const DiscountInfo = ({ offerDetail }: DiscountInfoProps) => {
  return (
    <div className={styles['discount-info']}>
      <div className={styles['discount-info-row']}>
        <div className={styles['bold']}>
          {i18n.t('discountInfo_discountAmount')}
        </div>
        <div className={styles['info']}>
          {offerDetail.campaign?.discount_text || EMPTY_DATA}
        </div>
      </div>
      <div className={styles['discount-info-row']}>
        <div className={styles['bold']}>
          {i18n.t('discountInfo_discountEndsIn')}
        </div>
        <div className={styles['info']}>
          {DateUtil.getRemainingTime(offerDetail.campaign?.expires_at)}
        </div>
      </div>
    </div>
  );
};

export default DiscountInfo;
