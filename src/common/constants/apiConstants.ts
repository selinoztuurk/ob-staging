export interface Status {
  code: number;
  text: string;
}

export interface APIBodyResponse {
  data: any;
  errors: string[];
  hasErrors: boolean;
  message: string;
  meta: string[];
  status: Status;
}

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE',
}

export enum RtkRequestType {
  Query = 'query',
  Mutation = 'mutation',
}

export enum QueryEndpointName {
  Handshake = 'handshake',
  Login = 'login',
  Logout = 'logout',
  Register = 'register',
  ResetPassword = 'resetPassword',
  FetchAccountDetails = 'fetchAccountDetails',
  FetchAllOffers = 'fetchAllOffers',
  FetchFeaturedOffers = 'fetchFeaturedOffers',
  FetchOfferDetailsBySlug = 'fetchOfferDetailsBySlug',
  ClaimDiscountBySlug = 'claimDiscountBySlug',
  SearchSchoolBySchoolName = 'searchSchoolBySchoolName',
  CreateStudent = 'createStudent',
  CreateVerification = 'createVerification',
  DeleteAccount = 'deleteAccount',
}

export enum Scopes {
  Authenticate = 'authenticate',
  ReadUser = 'read_user',
  ReadOffers = 'read_offers',
  ValidateStudent = 'validate_student',
  ReadSchools = 'read_schools',
  DeleteUser = 'delete_user',
}
