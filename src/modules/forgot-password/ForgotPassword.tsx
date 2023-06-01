import { Navigate } from 'react-router-dom';

import styles from 'modules/forgot-password/styles.module.scss';

import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

import useAuth from 'hooks/useAuth';

import ForgotPasswordForm from 'components/forgot-password/forgot-password-form/ForgotPasswordForm';

const ForgotPassword = (): JSX.Element => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return (
    <div className="page-container">
      <div className={styles['forgot-password-page']}>
        <div className={styles['column']}>
          <div className={'page-title'}>{i18n.t('forgotPassword_title')}</div>
          <div className={styles.text}>{i18n.t('forgotPassword_subtext')}</div>
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
