import { Navigate, useNavigate } from 'react-router-dom';
import { FaTools } from 'react-icons/fa';

import ProfileCard from 'components/profile/profile-card/ProfileCard';
import Button from 'components/common/button/Button';

import styles from 'modules/profile/styles.module.scss';

import AccountApi from 'api/endpoints/AccountApi';

import Paths from 'routing/Paths';

import i18n from 'common/i18n/i18n';

const Profile = (): JSX.Element => {
  const { data: account } = AccountApi.useFetchAccountDetailsQuery();

  const navigate = useNavigate();

  if (!account?.profile) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return (
    <>
      <div className="page-title-container">
        <h1 className={`page-title`}>{i18n.t('profile_title')}</h1>
      </div>
      <div className="page-container">
        <ProfileCard />
        <div className={styles['button-container']}>
          <Button
            text={i18n.t('profile_settings') || ''}
            icon={<FaTools className="small-icon" />}
            fullWidth={true}
            onClick={() => navigate(Paths.SETTINGS)}
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
