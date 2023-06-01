import { useState, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import Select from 'react-tailwindcss-select';

import styles from 'components/verify-account/create-student-form/styles.module.scss';
import Button from 'components/common/button/Button';

import ValidationUtil from 'common/util/ValidationUtil';
import i18n from 'common/i18n/i18n';

import StudentApi, { School } from 'api/endpoints/StudentApi';

interface CreateStudentFormProps {
  onSuccess: (uuid: string) => void;
}

enum FormFieldName {
  School = 'school',
  Entrance = 'entrance',
  Graduation = 'graduation',
}

export interface CreateStudentFormData {
  [FormFieldName.School]: any;
  [FormFieldName.Entrance]: string;
  [FormFieldName.Graduation]: string;
}

const CreateStudentForm = ({ onSuccess }: CreateStudentFormProps) => {
  const [searchSchoolByNameTrigger] =
    StudentApi.useLazySearchSchoolBySchoolNameQuery();

  const [createStudent] = StudentApi.useCreateStudentMutation();

  const [errorMessage, setErrorMessage] = useState<string | null>();
  const [searchTerm, setSearchTerm] = useState('üni');
  const [schools, setSchools] = useState<School[]>([]);

  const onSubmit = async (formData: CreateStudentFormData) => {
    try {
      const formValues = { ...formData, school: formData.school.value };
      const response = await createStudent(formValues).unwrap();
      onSuccess(response);
    } catch (error) {
      setErrorMessage(i18n.t('register_tryAgain'));
    }
  };

  const onChangeSearchTerm = async () => {
    try {
      const response = await searchSchoolByNameTrigger(searchTerm).unwrap();
      setSchools(response);
    } catch {}
  };

  useEffect(() => {
    onChangeSearchTerm();
  }, [searchTerm]);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, pristine }) => (
        <div
          className={`${styles['create-student-form-container']} white-rounded-container`}
        >
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <Field
                name={FormFieldName.School}
                validate={ValidationUtil.required}
              >
                {({ input, meta }) =>
                  schools && (
                    <div
                      className={`${styles['input-container']} ${styles.column}`}
                    >
                      <label className={styles.label}>
                        {i18n.t('verifyAccount_formLabel_school')}
                      </label>
                      <Select
                        {...input}
                        primaryColor={'indigo'}
                        isSearchable={true}
                        onSearchInputChange={(e) =>
                          e.target.value.length >= 3 &&
                          setSearchTerm(e.target.value)
                        }
                        options={schools.map((school) => {
                          return {
                            key: school.uuid,
                            value: school.uuid,
                            label: school.name,
                          };
                        })}
                      />
                      {meta.error && meta.touched && (
                        <span className={styles['error-message']}>
                          {meta.error}
                        </span>
                      )}
                    </div>
                  )
                }
              </Field>
            </div>
            <div className={styles.row}>
              <Field
                name={FormFieldName.Entrance}
                validate={ValidationUtil.composeValidators(
                  ValidationUtil.required,
                  ValidationUtil.validateYear
                )}
              >
                {({ input, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('verifyAccount_formLabel_enteranceYear')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.Entrance}
                      type="number"
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
                name={FormFieldName.Graduation}
                validate={ValidationUtil.composeValidators(
                  ValidationUtil.required,
                  ValidationUtil.validateYear
                )}
              >
                {({ input, meta }) => (
                  <div
                    className={`${styles['input-container']} ${styles.column}`}
                  >
                    <label className={styles.label}>
                      {i18n.t('verifyAccount_formLabel_graduationYear')}
                    </label>
                    <input
                      {...input}
                      name={FormFieldName.Graduation}
                      type="number"
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
            <div className={styles['error-message']}>{errorMessage}</div>
            <div className={styles['button-container']}>
              <Button
                text={i18n.t('verifyAccount_proceedToNextStep') || ''}
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

export default CreateStudentForm;
