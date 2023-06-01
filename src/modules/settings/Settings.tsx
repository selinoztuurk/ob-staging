import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import AccountApi from 'api/endpoints/AccountApi';

import Paths from 'routing/Paths';

import i18n from 'common/i18n/i18n';

import Button, { ButtonColor } from 'components/common/button/Button';
import Modal from 'components/common/modal/Modal';
import DeleteAccountModalContent from 'components/settings/delete-account-modal-content/DeleteAccountModalContent';

const Settings = (): JSX.Element => {
  const { data: account } = AccountApi.useFetchAccountDetailsQuery();
  const [deleteAccountTrigger] = AccountApi.useDeleteAccountMutation();

  const [modalOpen, setModalOpen] = useState(false);

  if (!account?.profile) {
    return <Navigate to={Paths.HOME} replace />;
  }

  const onDeleteAccountButtonClick = () => {
    setModalOpen(true);
  };

  const onCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <Modal open={modalOpen} onClose={onCloseModal}>
          <DeleteAccountModalContent
            onDelete={() => deleteAccountTrigger(undefined)}
            onClose={onCloseModal}
          />
        </Modal>
      )}
      <div className="page-title-container">
        <h1 className="page-title">{i18n.t('settings_title')}</h1>
      </div>
      <div className="page-container">
        <Button
          text={i18n.t('settings_deleteAccount') || ''}
          onClick={onDeleteAccountButtonClick}
          color={ButtonColor.Danger}
        />
      </div>
    </>
  );
};

export default Settings;
