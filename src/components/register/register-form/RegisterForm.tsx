import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Form, Field } from 'react-final-form';
import { Link, useNavigate } from 'react-router-dom';
import { Trans } from 'react-i18next';

import styles from 'components/register/register-form/styles.module.scss';
import Button from 'components/common/button/Button';

import ValidationUtil from 'common/util/ValidationUtil';
import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

import AccountApi from 'api/endpoints/AccountApi';

import useAuth from 'hooks/useAuth';

enum FormFieldName {
  Email = 'email',
  Password = 'password',
  PasswordConfirmation = 'password_confirmation',
  FirstName = 'firstname',
  LastName = 'lastname',
  DateOfBirth = 'date_of_birth',
  Terms = 'terms',
}

export interface RegisterFormData {
  [FormFieldName.Email]: string;
  [FormFieldName.Password]: string;
  [FormFieldName.PasswordConfirmation]: string;
  [FormFieldName.FirstName]: string;
  [FormFieldName.LastName]: string;
  [FormFieldName.DateOfBirth]: string;
  [FormFieldName.Terms]: boolean;
}

const RegisterForm = () => {
  const navigate = useNavigate();

  const { setUserLoggedIn } = useAuth();

  const [register] = AccountApi.useRegisterMutation();

  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [passwordsVisible, setPasswordsVisible] = useState(false);

  const toggleDetails = () => setDetailsVisible(!detailsVisible);

  const togglePasswordVisible = () => setPasswordsVisible(!passwordsVisible);

  const onSubmit = async (formData: RegisterFormData) => {
    try {
      await register(formData).unwrap();
      setUserLoggedIn();
      navigate(Paths.HOME);
    } catch (error) {
      setErrorMessage(i18n.t('register_tryAgain'));
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <div
          className={`${styles['register-form-container']} white-rounded-container`}
        >
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.header}>
              <div
                className={`${styles['header-row']} ${styles['header-title']}`}
              >
                {i18n.t('register_title')}
              </div>
              <div className={styles['header-row']}>
                {i18n.t('register_alreadyHaveAnAccount')}
                <Link to={Paths.LOGIN} className={styles.link}>
                  {i18n.t('register_login')}
                </Link>
              </div>
            </div>
            <div className={styles.row}>
              <Field
                name={FormFieldName.FirstName}
                validate={ValidationUtil.required}
              >
                {({ input, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('register_firstName')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.FirstName}
                      type="text"
                      placeholder={i18n.t('register_firstName') || ''}
                      className={styles['text-input']}
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
                name={FormFieldName.LastName}
                validate={ValidationUtil.required}
              >
                {({ input, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('register_lastName')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.LastName}
                      type="text"
                      placeholder={i18n.t('register_lastName') || ''}
                      className={styles['text-input']}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles['error-message']}>
                        {meta.error}
                      </span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.row}>
              <Field
                name={FormFieldName.DateOfBirth}
                validate={ValidationUtil.required}
              >
                {({ input, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('register_dateOfBirth')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.DateOfBirth}
                      type="date"
                      placeholder={i18n.t('register_dateOfBirth') || ''}
                      className={styles['text-input']}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles['error-message']}>
                        {meta.error}
                      </span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.row}>
              <div className={`${styles['input-container']} ${styles.column}`}>
                <label className={styles.label}>
                  {i18n.t('register_gender')}
                </label>
                <div>
                  <label className={styles['radio-option']}>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="male"
                    />
                    {i18n.t('register_genderMale')}
                  </label>
                  <label className={styles['radio-option']}>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="female"
                    />
                    {i18n.t('register_genderFemale')}
                  </label>
                  <label className={styles['radio-option']}>
                    <Field
                      name="gender"
                      component="input"
                      type="radio"
                      value="other"
                    />
                    {i18n.t('register_genderOther')}
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <Field
                name={FormFieldName.Email}
                validate={ValidationUtil.composeValidators(
                  ValidationUtil.required,
                  ValidationUtil.validateEmail
                )}
              >
                {({ input, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('register_email')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.Email}
                      type="text"
                      placeholder={i18n.t('register_email') || ''}
                      className={styles['text-input']}
                    />
                    {meta.error && meta.touched && (
                      <span className={styles['error-message']}>
                        {meta.error}
                      </span>
                    )}
                    <div className={styles['info-message']}>
                      {i18n.t('register_eduMailInfo')}
                      <span className={styles.link} onClick={toggleDetails}>
                        {i18n.t('register_details')}
                      </span>
                    </div>
                    {detailsVisible && (
                      <div className={styles['info-message']}>
                        {i18n.t('register_eduMailInfoDetails')}
                      </div>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.row}>
              <Field
                name={FormFieldName.Password}
                validate={ValidationUtil.composeValidators(
                  ValidationUtil.required,
                  ValidationUtil.validatePassword
                )}
              >
                {({ input, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('register_password')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.Password}
                      type={passwordsVisible ? 'text' : 'password'}
                      placeholder={i18n.t('register_password') || ''}
                      className={styles['text-input']}
                    />
                    <div
                      className={styles.icon}
                      onClick={togglePasswordVisible}
                    >
                      {passwordsVisible ? <FaEyeSlash /> : <FaEye />}
                    </div>
                    {meta.error && meta.touched && (
                      <span className={styles['error-message']}>
                        {meta.error}
                      </span>
                    )}
                    <span className={styles['info-message']}>
                      {i18n.t('register_passwordInfo')}
                    </span>
                  </div>
                )}
              </Field>
            </div>
            <div className={styles.row}>
              <Field
                name={FormFieldName.PasswordConfirmation}
                validate={ValidationUtil.required}
              >
                {({ input, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('register_confirmPassword')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.PasswordConfirmation}
                      type={passwordsVisible ? 'text' : 'password'}
                      placeholder={i18n.t('register_confirmPassword') || ''}
                      className={styles['text-input']}
                    />
                    <div
                      className={styles.icon}
                      onClick={togglePasswordVisible}
                    >
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
            </div>
            <div className={styles.row}>
              <div className={`${styles['terms-container']} ${styles.column}`}>
                <label>
                  <Field
                    id={FormFieldName.Terms}
                    component="input"
                    name={FormFieldName.Terms}
                    type="checkbox"
                    className={styles.checkbox}
                    validate={ValidationUtil.required}
                  />
                  <Trans
                    i18nKey="register_checkbox_text"
                    components={{
                      terms: (
                        <Link
                          target="_blank"
                          to={Paths.TERMS_AND_CONDITIONS}
                          className={styles.link}
                        >
                          {i18n.t('register_termsAndConditions')}
                        </Link>
                      ),
                      privacy: (
                        <Link
                          target="_blank"
                          to={Paths.PRIVACY_POLICY}
                          className={styles.link}
                        >
                          {i18n.t('register_privacyPolicy')}
                        </Link>
                      ),
                    }}
                  ></Trans>
                </label>
              </div>
            </div>
            <div className={styles['error-message']}>{errorMessage}</div>
            <div className={styles['button-container']}>
              <Button
                text={i18n.t('register_registerButtonText') || ''}
                fullWidth={true}
                disabled={submitting || pristine}
                submitType={true}
              />
            </div>
          </form>
        </div>
      )}
    />
  );
};

export default RegisterForm;
