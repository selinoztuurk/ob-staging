import BaseAPI from 'api/BaseApi';

import { HttpMethod, QueryEndpointName } from 'common/constants/apiConstants';

// Add other attributes whenever needed
interface HandshakeData {
  token: string;
}

const BaseAPIWithTag = BaseAPI.enhanceEndpoints({
  addTagTypes: [],
});

const HandshakeApi = BaseAPIWithTag.injectEndpoints({
  endpoints: (builder) => ({
    [QueryEndpointName.Handshake]: builder.query<HandshakeData, void>({
      query: () => {
        return {
          url: 'handshake',
          method: HttpMethod.Post,
          body: JSON.stringify({
            public_key: `${import.meta.env.VITE_PUBLIC_KEY}`,
            private_key: `${import.meta.env.VITE_PRIVATE_KEY}`,
          }),
          headers: {
            'X-OB-DEVICE': JSON.stringify({
              manufacturer: 'TEST COMPANY',
              model: 'Test 1 Pro Galaxy Ultra',
              identifier: 'test123',
              os: 'TEST OS',
            }),
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: (result: { data: HandshakeData }) => result.data,
    }),
  }),
  overrideExisting: false,
});

export default HandshakeApi;
