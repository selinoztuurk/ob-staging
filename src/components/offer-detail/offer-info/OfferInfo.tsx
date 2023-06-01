import styles from 'components/offer-detail/offer-info/styles.module.scss';

import { OfferDetail } from 'api/endpoints/OfferApi';

import DateUtil from 'common/util/DateUtil';
import i18n from 'common/i18n/i18n';

import { EMPTY_DATA } from 'common/constants/generalConstants';

type OfferInfoProps = {
  offerDetail: OfferDetail;
};

export default function OfferInfo({ offerDetail }: OfferInfoProps) {
  return (
    <div className={styles['offer-info']}>
      <div className={styles['offer-info-row']}>
        <div className={styles['bold']}>{i18n.t('offerInfo_publishedAt')}</div>
        <div className={styles['info']}>
          {DateUtil.getFormattedDate(offerDetail.created_at)}
        </div>
      </div>
      <div className={styles['offer-info-row']}>
        <div className={styles['bold']}>
          {i18n.t('offerInfo_lastUpdatedAt')}
        </div>
        <div className={styles['info']}>
          {DateUtil.getFormattedDate(offerDetail.published_at)}
        </div>
      </div>
      <div className={styles['offer-info-row']}>
        <div className={styles['bold']}>
          {i18n.t('offerInfo_numberOfViews')}
        </div>
        <div className={styles['info']}>{offerDetail.views || EMPTY_DATA}</div>
      </div>
    </div>
  );
}
