import { useNavigate } from 'react-router-dom';
import {
  FaCheckCircle,
  FaCheckSquare,
  FaSquare,
  FaUserAstronaut,
} from 'react-icons/fa';

import styles from 'components/profile/profile-card/styles.module.scss';
import Button from 'components/common/button/Button';

import AccountApi, { AccountStatus } from 'api/endpoints/AccountApi';

import i18n from 'common/i18n/i18n';
import Paths from 'routing/Paths';

const ProfileCard = (): JSX.Element => {
  const navigate = useNavigate();
  const { data: account } = AccountApi.useFetchAccountDetailsQuery();

  const getItemCount = () => {
    let count = 0;
    if (account?.profile) {
      count++;
    }
    if (account?.is_email_verified) {
      count++;
    }
    if (account?.status === AccountStatus.Active) {
      count++;
    }
    return count;
  };

  const getPercentage = () => {
    return `${((getItemCount() / 3) * 100).toFixed(2)}%`;
  };

  const getProgressBarWidth = () => {
    const itemCount = getItemCount();
    switch (itemCount) {
      case 0:
        return 'w-1';
      case 1:
        return 'w-1/3';
      case 2:
        return 'w-2/3';
      default:
        return 'w-full';
    }
  };

  return (
    <div className="white-rounded-container">
      <div className={styles.info}>
        <div className={styles.column}>
          <FaUserAstronaut className={`${styles.picture} large-icon`} />
        </div>
        <div className={styles.column}>
          <div className={`${styles['text-row']}  ${styles.bold}`}>
            {account?.profile.fullname}
            <span>
              {account?.status === AccountStatus.Active && (
                <FaCheckCircle className={`${styles['verified-icon']}`} />
              )}
            </span>
          </div>
          <div className={styles['text-row']}>{account?.email}</div>
        </div>
      </div>
      <hr />

      <div className="mt-3 bg-gray-300 rounded-full">
        <div
          className={`${getProgressBarWidth()} mt-2 bg-purple-900 py-0 rounded-full text-end`}
        >
          <div className=" text-white text-sm inline-block bg-purple-700 px-2 rounded-full">
            {getPercentage()}
          </div>
        </div>
      </div>

      <div className={styles.checklist}>
        <div className={`${styles.item} ${account?.profile && styles.active}`}>
          {account?.profile ? <FaCheckSquare /> : <FaSquare />}
          {i18n.t('profile_status_registered')}
        </div>
        <div
          className={`${styles.item} ${
            account?.is_email_verified && styles.active
          }`}
        >
          {account?.is_email_verified ? <FaCheckSquare /> : <FaSquare />}
          {i18n.t('profile_status_emailVerified')}
        </div>
        <div
          className={`${styles.item} ${
            account?.status === AccountStatus.Active && styles.active
          }`}
        >
          {account?.status === AccountStatus.Active ? (
            <FaCheckSquare />
          ) : (
            <FaSquare />
          )}
          {i18n.t('profile_status_studentVerified')}
          {(account?.status === AccountStatus.StudentApplicationPending ||
            account?.status === AccountStatus.Rejected) && (
            <Button
              text={i18n.t('profile_verifyStudent') || ''}
              onClick={() => navigate(Paths.VERIFY_ACCOUNT)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
