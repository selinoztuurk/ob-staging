import BaseAPI from 'api/BaseApi';

import {
  APIBodyResponse,
  HttpMethod,
  QueryEndpointName,
  Scopes,
} from 'common/constants/apiConstants';

import { LoginFormData } from 'components/login/login-form/LoginForm';
import { RegisterFormData } from 'components/register/register-form/RegisterForm';

export enum AccountStatus {
  EmailVerificationPending = 'email_verification_pending',
  StudentApplicationPending = 'student_application_pending',
  StudentVerificationPending = 'student_verification_pending',
  AdminConfirmationPending = 'admin_confirmation_pending',
  Active = 'active',
  Rejected = 'rejected',
  Passive = 'passive',
}

// Add other attributes whenever needed
interface Profile {
  fullname: string;
  uuid: string;
}

// Add other attributes whenever needed
interface AccountData {
  profile: Profile;
  is_logged_in: boolean;
  is_email_verified: boolean;
  status: AccountStatus;
  email: string;
  uuid: string;
}

const BaseAPIWithTag = BaseAPI.enhanceEndpoints({
  addTagTypes: [],
});

const AccountApi = BaseAPIWithTag.injectEndpoints({
  endpoints: (builder) => ({
    [QueryEndpointName.FetchAccountDetails]: builder.query<AccountData, void>({
      query: () => {
        return {
          url: 'auth/account',
          method: HttpMethod.Get,
          headers: {
            'x-ob-scope': Scopes.ReadUser,
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: (result: { data: AccountData }) => result.data,
    }),
    [QueryEndpointName.Login]: builder.mutation<string, LoginFormData>({
      query: (formData) => {
        const { email, password, remember } = formData;
        return {
          url: 'auth/login',
          method: HttpMethod.Post,
          body: {
            email,
            password,
            remember,
          },
          headers: {
            'x-ob-scope': Scopes.Authenticate,
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: (result: { message: string }) => result.message,
    }),
    [QueryEndpointName.Logout]: builder.mutation<APIBodyResponse, undefined>({
      query: () => {
        return {
          url: 'auth/logout',
          method: HttpMethod.Delete,
          headers: {
            'x-ob-scope': Scopes.Authenticate,
            'Content-Type': 'application/json',
          },
        };
      },
    }),
    [QueryEndpointName.DeleteAccount]: builder.mutation<
      APIBodyResponse,
      undefined
    >({
      query: () => {
        return {
          url: 'auth/account/delete',
          method: HttpMethod.Delete,
          headers: {
            'x-ob-scope': Scopes.DeleteUser,
            'Content-Type': 'application/json',
          },
        };
      },
    }),
    [QueryEndpointName.Register]: builder.mutation<string, RegisterFormData>({
      query: (formData) => {
        const {
          email,
          password,
          password_confirmation,
          firstname,
          lastname,
          date_of_birth,
          terms,
        } = formData;
        return {
          url: 'auth/register',
          method: HttpMethod.Post,
          body: {
            email,
            password,
            password_confirmation,
            firstname,
            lastname,
            date_of_birth,
            terms,
          },
          headers: {
            'x-ob-scope': Scopes.Authenticate,
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: (result: { message: string }) => result.message,
    }),
  }),
  overrideExisting: false,
});

export default AccountApi;
