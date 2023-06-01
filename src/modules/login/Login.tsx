import { Navigate, useNavigate } from 'react-router-dom';
import { FaGraduationCap, FaCaretRight } from 'react-icons/fa';

import styles from 'modules/login/styles.module.scss';

import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

import LoginForm from 'components/login/login-form/LoginForm';

import useAuth from 'hooks/useAuth';

const Login = (): JSX.Element => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return (
    <div className="page-container">
      <div className={styles['login-page']}>
        <div className={styles['column']}>
          <div className={styles['text-content']}>
            <div className={styles['title-container']}>
              <FaGraduationCap className={`${styles.icon} large-icon`} />
              <div className={'page-title'}>{i18n.t('login_title')}</div>
            </div>
            <div className={styles.text}>
              {i18n.t('login_subtext1')}
              <br />
              {i18n.t('login_subtext2')}
            </div>
            <div className={styles['link-container']}>
              <div
                onClick={() => navigate(Paths.REGISTER)}
                className={styles.link}
              >
                {i18n.t('login_register')}
                <FaCaretRight />
              </div>
            </div>
          </div>
        </div>
        <div className={styles['column']}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
