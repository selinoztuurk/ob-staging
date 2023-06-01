import BaseAPI from 'api/BaseApi';

import { HttpMethod, QueryEndpointName } from 'common/constants/apiConstants';

import { ForgotPasswordFormData } from 'components/forgot-password/forgot-password-form/ForgotPasswordForm';

const BaseAPIWithTag = BaseAPI.enhanceEndpoints({
  addTagTypes: [],
});

const PasswordApi = BaseAPIWithTag.injectEndpoints({
  endpoints: (builder) => ({
    [QueryEndpointName.ResetPassword]: builder.mutation<
      string,
      ForgotPasswordFormData
    >({
      query: (formData) => {
        const { email } = formData;
        return {
          url: 'password/forgot',
          method: HttpMethod.Post,
          body: {
            email,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export default PasswordApi;
