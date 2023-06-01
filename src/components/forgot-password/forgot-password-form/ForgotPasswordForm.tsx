import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Field } from 'react-final-form';

import styles from 'components/forgot-password/forgot-password-form/styles.module.scss';
import Button from 'components/common/button/Button';

import ValidationUtil from 'common/util/ValidationUtil';
import i18n from 'common/i18n/i18n';

import Paths from 'routing/Paths';

import PasswordApi from 'api/endpoints/PasswordApi';
import Modal from 'components/common/modal/Modal';
import MailSentModalContent from '../mail-sent-modal-content/MailSentModalContent';

enum FormFieldName {
  Email = 'email',
}

export interface ForgotPasswordFormData {
  [FormFieldName.Email]: string;
}

const ForgotPasswordForm = () => {
  const [sendResetMail] = PasswordApi.useResetPasswordMutation();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (formData: ForgotPasswordFormData) => {
    try {
      await sendResetMail(formData).unwrap();
      setModalOpen(true);
    } catch (error) {
      setErrorMessage(i18n.t('login_wrong_credentials'));
    }
  };

  const closeModalAndNavigateToHomePage = () => {
    setModalOpen(false);
    navigate(Paths.HOME);
  };

  return (
    <>
      {modalOpen && (
        <Modal open={modalOpen} onClose={closeModalAndNavigateToHomePage}>
          <MailSentModalContent onClose={closeModalAndNavigateToHomePage} />
        </Modal>
      )}
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, pristine }) => (
          <div
            className={`${styles['forgot-password-form-container']} white-rounded-container`}
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
              <div className={styles['error-message']}>{errorMessage}</div>
              <div className={styles['button-container']}>
                <Button
                  text={i18n.t('forgotPassword_sendResetMail') || ''}
                  fullWidth={true}
                  disabled={submitting || pristine}
                  submitType={true}
                />
              </div>
            </form>
          </div>
        )}
      />
    </>
  );
};

export default ForgotPasswordForm;
