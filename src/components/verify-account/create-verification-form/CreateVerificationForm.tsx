import { useState } from 'react';
import { Form, Field } from 'react-final-form';
import { useNavigate } from 'react-router-dom';

import styles from 'components/verify-account/create-verification-form/styles.module.scss';
import Button from 'components/common/button/Button';

import ValidationUtil from 'common/util/ValidationUtil';
import i18n from 'common/i18n/i18n';

import StudentApi from 'api/endpoints/StudentApi';

import Paths from 'routing/Paths';

type CreateVerificationFormProps = {
  uuid: string;
};

enum FormFieldName {
  Student = 'student',
  Document = 'document',
}

export interface CreateVerificationFormData {
  [FormFieldName.Document]: any;
  [FormFieldName.Student]: string;
}

const CreateVerificationForm = ({ uuid }: CreateVerificationFormProps) => {
  const navigate = useNavigate();

  const [createVerification] = StudentApi.useCreateVerificationMutation();

  const [errorMessage, setErrorMessage] = useState<string | null>();

  const onSubmit = async (formInput: any) => {
    const formData = new FormData();
    formData.append('document', formInput.document[0]);
    formData.append('student', uuid || '');

    try {
      await createVerification(formData).unwrap();
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
          className={`${styles['create-verification-form-container']} white-rounded-container`}
        >
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className={styles.row}>
              <Field
                name={FormFieldName.Document}
                validate={ValidationUtil.required}
              >
                {({ input: { value, onChange, ...input }, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('verifyAccount_formLabel_file')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.Document}
                      type="file"
                      className={styles['text-input']}
                      onChange={({ target }) => onChange(target.files)}
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
            <div className={styles['error-message']}>{errorMessage}</div>
            <div className={styles.warnings}>
              <div className={styles.text}>
                {i18n.t('verifyAccount_form_file_details1')}
              </div>
              <ul>
                <li>{i18n.t('verifyAccount_form_file_details1_bullet1')}</li>
                <li>{i18n.t('verifyAccount_form_file_details1_bullet2')}</li>
                <li>{i18n.t('verifyAccount_form_file_details1_bullet3')}</li>
                <li>{i18n.t('verifyAccount_form_file_details1_bullet4')}</li>
                <li>{i18n.t('verifyAccount_form_file_details1_bullet5')}</li>
              </ul>
            </div>
            <div className={styles.accepted}>
              <div className={styles.text}>
                {i18n.t('verifyAccount_form_file_details2')}
              </div>
              <ul>
                <li>{i18n.t('verifyAccount_form_file_details2_bullet1')}</li>
                <li>{i18n.t('verifyAccount_form_file_details2_bullet2')}</li>
                <li>{i18n.t('verifyAccount_form_file_details2_bullet3')}</li>
              </ul>
              <div className={styles.text}>
                {i18n.t('verifyAccount_form_file_details3')}
              </div>
              <div className={styles.text}>
                {i18n.t('verifyAccount_form_file_details4')}
              </div>
            </div>
            <div className={styles['button-container']}>
              <Button
                text={i18n.t('verifyAccount_finish') || ''}
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

export default CreateVerificationForm;
