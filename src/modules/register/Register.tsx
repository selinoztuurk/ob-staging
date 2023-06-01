import { Navigate } from 'react-router-dom';

import styles from 'modules/register/styles.module.scss';

import RegisterForm from 'components/register/register-form/RegisterForm';

import useAuth from 'hooks/useAuth';

import Paths from 'routing/Paths';

const Register = () => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to={Paths.HOME} replace />;
  }

  return (
    <div className="page-container">
      <div className={styles['register-page']}>
        <div className={styles['column']}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
