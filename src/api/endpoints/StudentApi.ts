import BaseAPI from 'api/BaseApi';

import {
  HttpMethod,
  QueryEndpointName,
  Scopes,
} from 'common/constants/apiConstants';

import { CreateStudentFormData } from 'components/verify-account/create-student-form/CreateStudentForm';

const BaseAPIWithTag = BaseAPI.enhanceEndpoints({
  addTagTypes: [],
});

const StudentApi = BaseAPIWithTag.injectEndpoints({
  endpoints: (builder) => ({
    [QueryEndpointName.CreateStudent]: builder.mutation<
      string,
      CreateStudentFormData
    >({
      query: (formData) => {
        const { school, entrance, graduation } = formData;
        return {
          url: 'student/create',
          method: HttpMethod.Post,
          body: {
            school,
            entrance,
            graduation,
          },
          headers: {
            'Content-Type': 'application/json',
            Scope: Scopes.ValidateStudent,
          },
        };
      },
      transformResponse: (result: { data: { uuid: string } }) =>
        result.data.uuid,
    }),
    [QueryEndpointName.CreateVerification]: builder.mutation<string, FormData>({
      query: (formData) => {
        return {
          url: 'student/apply',
          method: HttpMethod.Post,
          body: formData,
          headers: {
            Scope: Scopes.ValidateStudent,
          },
        };
      },
    }),
    [QueryEndpointName.SearchSchoolBySchoolName]: builder.query<
      School[],
      string
    >({
      query: (school_name) => {
        return {
          url: 'student/schools',
          method: HttpMethod.Post,
          body: {
            school_name,
            limit: 10,
          },
          headers: {
            'Content-Type': 'application/json',
            'x-ob-scope': Scopes.ReadSchools,
          },
        };
      },
      transformResponse: (result: { data: School[] }) => result.data,
    }),
  }),
  overrideExisting: false,
});

export default StudentApi;

// Add other attributes whenever needed
export type School = {
  uuid: string;
  name: string;
};
