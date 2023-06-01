import { Navigate } from 'react-router-dom';

import styles from 'modules/verify-account/styles.module.scss';

import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

import AccountApi, { AccountStatus } from 'api/endpoints/AccountApi';

import VerifyAccountForm from 'components/verify-account/verify-account-form/VerifyAccountForm';

const VerifyAccount = (): JSX.Element => {
  const { data: account } = AccountApi.useFetchAccountDetailsQuery();

  if (
    !account?.profile ||
    (account?.status !== AccountStatus.StudentApplicationPending &&
      account?.status !== AccountStatus.Rejected)
  ) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return (
    <div className="page-container">
      <div className={styles['verify-account-page']}>
        <div className={styles['column']}>
          <div className={`page-title ${styles.text}`}>
            {i18n.t('verifyAccount_title')}
          </div>

          <VerifyAccountForm />
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
