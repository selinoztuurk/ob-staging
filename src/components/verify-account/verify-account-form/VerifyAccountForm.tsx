import { useState } from 'react';

import CreateStudentForm from 'components/verify-account/create-student-form/CreateStudentForm';
import CreateVerificationForm from 'components/verify-account/create-verification-form/CreateVerificationForm';

const VerifyAccountForm = () => {
  const [createVerificationFormVisible, setCreateVerificationFormVisible] =
    useState(false);
  const [uuid, setUuid] = useState('');

  const onCreateStudentSuccess = (uuid: string) => {
    setUuid(uuid);
    setCreateVerificationFormVisible(true);
  };

  return createVerificationFormVisible ? (
    <CreateVerificationForm uuid={uuid} />
  ) : (
    <CreateStudentForm onSuccess={onCreateStudentSuccess} />
  );
};

export default VerifyAccountForm;
