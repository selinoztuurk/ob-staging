import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getLocallySavedAuthToken } from 'common/util/AuthUtil';

const baseQuery = fetchBaseQuery({
  baseUrl: `${import.meta.env.VITE_API_BASE_URL}`,
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${getLocallySavedAuthToken()}`);
  },
});

const BaseAPI = createApi({
  reducerPath: 'baseAPI',
  baseQuery,
  endpoints: () => ({}),
});

export default BaseAPI;
