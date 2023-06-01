import BaseAPI from 'api/BaseApi';

import {
  HttpMethod,
  QueryEndpointName,
  Scopes,
} from 'common/constants/apiConstants';

const BaseAPIWithTag = BaseAPI.enhanceEndpoints({
  addTagTypes: [],
});

const OfferApi = BaseAPIWithTag.injectEndpoints({
  endpoints: (builder) => ({
    [QueryEndpointName.FetchAllOffers]: builder.query<
      Offer[],
      { limit?: number; paginate?: number; page?: number }
    >({
      query: (args) => {
        const { limit, paginate, page } = args;
        return {
          url: 'offers/all',
          method: HttpMethod.Get,
          params: { limit, paginate, page },
          headers: {
            'x-ob-scope': Scopes.ReadOffers,
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: (result: { data: Offer[] }) => result.data,
    }),
    [QueryEndpointName.FetchFeaturedOffers]: builder.query<
      Offer[],
      { skipCache?: boolean; paginate?: number; page?: number }
    >({
      query: (args) => {
        const { skipCache, paginate, page } = args;
        return {
          url: 'offers/featured',
          method: HttpMethod.Get,
          params: { skipCache, paginate, page },
          headers: {
            'x-ob-scope': Scopes.ReadOffers,
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: (result: { data: Offer[] }) => result.data,
    }),
    [QueryEndpointName.FetchOfferDetailsBySlug]: builder.query<
      OfferDetail,
      string
    >({
      query: (slug) => {
        return {
          url: `offers/detail/${slug}`,
          method: HttpMethod.Get,
          headers: {
            'x-ob-scope': Scopes.ReadOffers,
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: (result: { data: OfferDetail }) => result.data,
    }),
    [QueryEndpointName.ClaimDiscountBySlug]: builder.query<
      DiscountCode,
      string
    >({
      query: (slug) => {
        return {
          url: `offers/claim/${slug}`,
          method: HttpMethod.Get,
          headers: {
            'x-ob-scope': Scopes.ReadOffers,
            'Content-Type': 'application/json',
          },
        };
      },
      transformResponse: (result: { data: DiscountCode }) => result.data,
    }),
  }),
  overrideExisting: false,
});

export default OfferApi;

export type Brand = {
  name: string;
  slug: string;
  about: string;
  is_exclusive: boolean;
  sort_order: number;
  website: string;
  instagram: string;
  twitter: string;
  youtube: string;
  linkedin: string;
  facebook: string;
  created_at: string; // Date?
  updated_at: string; // Date?
  logo_url: string;
  cover_url: string;
};

export type Image = {
  uuid: string;
  title: string;
  mime_type: string;
  tag: string;
  deleted_at: string; // Date?
  created_at: string; // Date?
  updated_at: string; // Date?
  url: string;
};

export type Category = {
  name: string;
  slug: string;
  color: string; // '#7ba803',
  description: string;
};

export interface Offer {
  title: string;
  slug: string;
  body: string;
  keywords: string;
  brand: Brand;
  images: Image[];
  categories: Category[];
  usable_on: string;
  priority: number;
  clicks: number;
  views: number;
  published_at: string; // Date?
  created_at: string; // Date?
}

export type Campaign = {
  type: string;
  code_type: string;
  discount_text: string;
  use_button_active: boolean;
  available_at: string; // Date?
  expires_at: string; // Date?
};

export type OfferDetail = {
  title: string;
  slug: string;
  body: string;
  keywords: string;
  brand: Brand;
  images: Image[];
  categories: Category[];
  campaign: Campaign;
  usable_on: string;
  priority: number;
  clicks: number;
  views: number;
  published_at: string; // Date?
  created_at: string; // Date?
};

export type DiscountCode = {
  code: string;
};
