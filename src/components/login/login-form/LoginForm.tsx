import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import styles from 'components/login/login-form/styles.module.scss';
import Button from 'components/common/button/Button';

import ValidationUtil from 'common/util/ValidationUtil';
import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

import AccountApi from 'api/endpoints/AccountApi';

import useAuth from 'hooks/useAuth';

enum FormFieldName {
  Email = 'email',
  Password = 'password',
  Remember = 'remember',
}

export interface LoginFormData {
  [FormFieldName.Email]: string;
  [FormFieldName.Password]: string;
  [FormFieldName.Remember]: boolean;
}

const LoginForm = () => {
  const [login] = AccountApi.useLoginMutation();
  const navigate = useNavigate();
  const { setUserLoggedIn } = useAuth();

  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [passwordsVisible, setPasswordsVisible] = useState(false);

  const togglePasswordVisible = () => setPasswordsVisible(!passwordsVisible);

  const onSubmit = async (formData: LoginFormData) => {
    try {
      await login(formData).unwrap();
      setUserLoggedIn();
      navigate(Paths.HOME);
    } catch (error) {
      setErrorMessage(i18n.t('login_wrong_credentials'));
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <div
          className={`${styles['login-form-container']} white-rounded-container`}
        >
          <form className={styles.form} onSubmit={handleSubmit}>
            <Field
              name={FormFieldName.Email}
              validate={ValidationUtil.composeValidators(
                ValidationUtil.required,
                ValidationUtil.validateEmail
              )}
            >
              {({ input, meta }) => (
                <div className={styles['input-container']}>
                  <label htmlFor={FormFieldName.Email} className="sr-only">
                    {i18n.t('login_email')}
                  </label>
                  <input
                    {...input}
                    id={FormFieldName.Email}
                    name={FormFieldName.Email}
                    type="email"
                    autoComplete="email"
                    className={styles['text-input']}
                    placeholder={i18n.t('login_email') || ''}
                  />
                  {meta.error && meta.touched && (
                    <span className={styles['error-message']}>
                      {meta.error}
                    </span>
                  )}
                </div>
              )}
            </Field>
            <Field
              name={FormFieldName.Password}
              validate={ValidationUtil.required}
            >
              {({ input, meta }) => (
                <div className={styles['input-container']}>
                  <label htmlFor={FormFieldName.Password} className="sr-only">
                    {i18n.t('login_password')}
                  </label>
                  <input
                    {...input}
                    id={FormFieldName.Password}
                    name={FormFieldName.Password}
                    type={passwordsVisible ? 'text' : 'password'}
                    autoComplete="current-password"
                    className={styles['text-input']}
                    placeholder={i18n.t('login_password') || ''}
                  />
                  <div className={styles.icon} onClick={togglePasswordVisible}>
                    {passwordsVisible ? <FaEyeSlash /> : <FaEye />}
                  </div>
                  {meta.error && meta.touched && (
                    <span className={styles['error-message']}>
                      {meta.error}
                    </span>
                  )}
                </div>
              )}
            </Field>
            <div className={styles['error-message']}>{errorMessage}</div>
            <div className={styles['remember-me-container']}>
              <Field
                id={FormFieldName.Remember}
                component="input"
                name={FormFieldName.Remember}
                type="checkbox"
                className={styles.checkbox}
              />
              <label htmlFor={FormFieldName.Remember}>
                {i18n.t('login_rememberMe')}
              </label>
            </div>
            <div className={styles['button-container']}>
              <Button
                text={i18n.t('login_button_text') || ''}
                fullWidth={true}
                disabled={submitting || pristine}
                submitType={true}
              />
            </div>
            <div className={styles['forgot-password-container']}>
              <div onClick={() => navigate(Paths.FORGOT_PASSWORD)}>
                {i18n.t('login_forgotPassword')}
              </div>
            </div>
          </form>
        </div>
      )}
    />
  );
};

export default LoginForm;
