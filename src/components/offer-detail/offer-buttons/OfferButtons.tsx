import { useState } from 'react';
import { FaGift, FaGlobe } from 'react-icons/fa';

import OfferApi from 'api/endpoints/OfferApi';
import AccountApi, { AccountStatus } from 'api/endpoints/AccountApi';

import styles from 'components/offer-detail/offer-buttons/styles.module.scss';
import Button, { ButtonColor } from 'components/common/button/Button';
import Modal from 'components/common/modal/Modal';
import OfferCodeModalContent from 'components/offer-detail/offer-code-modal-content/OfferCodeModalContent';
import MandatoryLoginModalContent from 'components/offer-detail/mandatory-login-modal-content/MandatoryLoginModalContent';
import InactiveStudentModalContent from 'components/offer-detail/inactive-student-modal-content/InactiveStudentModalContent';

import i18n from 'common/i18n/i18n';

type OfferButtonsProps = {
  slug: string;
  brandWebsite: string;
  brandName?: string;
  discountAmount?: string;
};

const OfferButtons = ({
  slug,
  brandWebsite,
  brandName,
  discountAmount,
}: OfferButtonsProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [campaignCode, setCampaignCode] = useState('');

  const [claimDiscountBySlugTrigger] =
    OfferApi.useLazyClaimDiscountBySlugQuery();

  const { data: account } = AccountApi.useFetchAccountDetailsQuery();

  const onGetDiscountCodeButtonClick = async () => {
    try {
      const response = await claimDiscountBySlugTrigger(slug).unwrap();
      setCampaignCode(response.code);
      openModal();
    } catch {
      openModal();
    }
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles['offer-buttons-container']}>
      {modalOpen && (
        <Modal open={modalOpen} onClose={closeModal}>
          {account?.is_logged_in ? (
            account?.status === AccountStatus.Active ? (
              <OfferCodeModalContent
                campaignCode={campaignCode || 'OGRENCIBAKSANAXXX'} // TODO: Delete placeholder
                brandWebsite={brandWebsite}
                brandName={brandName || 'XXX'} // TODO: Delete placeholder
                discountAmount={discountAmount || 'XXX TL'} // TODO: Delete placeholder
              />
            ) : (
              <InactiveStudentModalContent onClose={closeModal} />
            )
          ) : (
            <MandatoryLoginModalContent onClose={closeModal} />
          )}
        </Modal>
      )}
      <Button
        icon={<FaGlobe className="small-icon" />}
        color={ButtonColor.Secondary}
        anchor={true}
        anchorHref={brandWebsite}
      />
      <div className={styles['margin-helper']}></div>
      <Button
        text={i18n.t('offerInfo_getDiscountCode') || ''}
        icon={<FaGift className="small-icon" />}
        fullWidth={true}
        onClick={onGetDiscountCodeButtonClick}
      />
    </div>
  );
};

export default OfferButtons;
