import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from 'components/header/styles.module.scss';
import ProfileDropdown from 'components/header/profile-dropdown/ProfileDropdown';

import Paths from 'routing/Paths';

import i18n from 'common/i18n/i18n';

import AccountApi from 'api/endpoints/AccountApi';

import useAuth from 'hooks/useAuth';

const Header = (): JSX.Element => {
  const { authToken, isLoggedIn, setUserLoggedIn } = useAuth();

  const [
    fetchAccountDetailsTrigger,
    { data: account, isLoading: isAccountLoading },
  ] = AccountApi.useLazyFetchAccountDetailsQuery();

  useEffect(() => {
    if (authToken || isLoggedIn) {
      fetchAccountDetailsTrigger();
    }
  }, [authToken, isLoggedIn]);

  useEffect(() => {
    if (account?.is_logged_in && !isLoggedIn) {
      setUserLoggedIn();
    }
  }, [account]);

  const renderHeaderRightColumn = (fullname: string): JSX.Element =>
    account && isLoggedIn ? (
      <ProfileDropdown fullname={fullname} />
    ) : (
      <>
        <Link className={styles.link} to={Paths.LOGIN}>
          {i18n.t('header_login')}
        </Link>
        <Link className={styles.link} to={Paths.REGISTER}>
          {i18n.t('header_register')}
        </Link>
      </>
    );

  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <Link className={styles['header-column']} to={Paths.HOME}>
          <img
            className={styles.logo}
            src="/logo/logo.svg"
            alt={i18n.t('header_logo_altText') || ''}
          />
          <img
            className={`${styles.logo} ${styles.small}`}
            src="/logo/logo-icon.svg"
            alt={i18n.t('header_logo_altText') || ''}
          />
        </Link>
        <div className={styles['header-column']}>
          {!isAccountLoading &&
            renderHeaderRightColumn(`${account?.profile.fullname}`)}
        </div>
      </div>
    </header>
  );
};

export default Header;
