import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';

import styles from 'modules/offer-detail/styles.module.scss';

import OfferApi, {
  OfferDetail as OfferDetailType,
} from 'api/endpoints/OfferApi';

import BrandInfo from 'components/offer-detail/brand-info/BrandInfo';
import DiscountInfo from 'components/offer-detail/discount-info/DiscountInfo';
import OfferInfo from 'components/offer-detail/offer-info/OfferInfo';
import OfferButtons from 'components/offer-detail/offer-buttons/OfferButtons';
import ComponentLoading from 'components/loading/ComponentLoading';

const OfferDetail = (): JSX.Element => {
  const { slug } = useParams();

  const { data: offerDetail, isLoading: showLoading } =
    OfferApi.useFetchOfferDetailsBySlugQuery(slug || '');

  const renderContent = (offerDetail: OfferDetailType): JSX.Element => (
    <div className={styles['offer-detail-page']}>
      <div className={styles['wide-column']}>
        <div className={styles['mobile-only']}>
          <BrandInfo offerDetail={offerDetail} />
        </div>

        <div className={`${styles['mobile-only']} ${styles['border-top']}`}>
          <DiscountInfo offerDetail={offerDetail} />
        </div>

        <img
          className={styles['banner-image']}
          src={offerDetail.images?.[0].url}
          alt={offerDetail.slug || offerDetail.title}
        />

        <div className={styles['content-body']}>
          {parse(offerDetail.body || offerDetail.title)}
        </div>

        <div
          className={`${styles['mobile-only']} ${styles['sticky']} ${styles['gradient-background']}`}
        >
          <OfferButtons
            slug={slug || ''}
            brandWebsite={offerDetail.brand.website}
            brandName={offerDetail.brand.name}
            discountAmount={offerDetail.campaign?.discount_text}
          />
        </div>
      </div>

      <div className={styles['narrow-column']}>
        <div className={styles['desktop-only']}>
          <BrandInfo offerDetail={offerDetail} />
        </div>

        <div className={styles['desktop-only']}>
          <OfferButtons
            slug={slug || ''}
            brandWebsite={offerDetail.brand.website}
            brandName={offerDetail.brand.name}
            discountAmount={offerDetail.campaign?.discount_text}
          />
        </div>

        <div className={`${styles['desktop-only']} ${styles['border-top']}`}>
          <DiscountInfo offerDetail={offerDetail} />
        </div>

        <div className={styles['border-top']}>
          <OfferInfo offerDetail={offerDetail} />
        </div>
      </div>
    </div>
  );

  return showLoading ? (
    <ComponentLoading />
  ) : (
    <>
      <div className="page-title-container">
        <h1 className="page-title">{offerDetail?.title}</h1>
      </div>
      <div className="page-container">
        {offerDetail && renderContent(offerDetail)}
      </div>
    </>
  );
};

export default OfferDetail;
