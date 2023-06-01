import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import PageLoading from 'components/loading/PageLoading';
import MainLayout from 'components/layout/MainLayout';

import paths from 'routing/Paths';

const Home = lazy(() => import('modules/home/Home'));
const NotFound = lazy(() => import('modules/not-found/NotFound'));
const Login = lazy(() => import('modules/login/Login'));
const Register = lazy(() => import('modules/register/Register'));
const OfferDetail = lazy(() => import('modules/offer-detail/OfferDetail'));
const ForgotPassword = lazy(
  () => import('modules/forgot-password/ForgotPassword')
);
const Profile = lazy(() => import('modules/profile/Profile'));
const VerifyAccount = lazy(
  () => import('modules/verify-account/VerifyAccount')
);
const Settings = lazy(() => import('modules/settings/Settings'));
const AllOffers = lazy(() => import('modules/all-offers/AllOffers'));
const TermsAndConditions = lazy(
  () => import('modules/terms-and-conditions/TermsAndConditions')
);
const PrivacyPolicy = lazy(
  () => import('modules/privacy-policy/PrivacyPolicy')
);

interface Routes {
  path: string;
  element: React.ReactNode;
}

const getRouteElement = (Component: React.ElementType): React.ReactNode => (
  <Suspense fallback={<PageLoading />}>
    <MainLayout>
      <Component />
    </MainLayout>
  </Suspense>
);

const routes: Routes[] = [
  { path: paths.HOME, element: getRouteElement(Home) },
  { path: paths.NOT_FOUND, element: getRouteElement(NotFound) },
  { path: paths.LOGIN, element: getRouteElement(Login) },
  { path: paths.REGISTER, element: getRouteElement(Register) },
  { path: `${paths.OFFER_DETAIL}:slug`, element: getRouteElement(OfferDetail) },
  { path: paths.FORGOT_PASSWORD, element: getRouteElement(ForgotPassword) },
  { path: paths.PROFILE, element: getRouteElement(Profile) },
  { path: paths.VERIFY_ACCOUNT, element: getRouteElement(VerifyAccount) },
  { path: paths.SETTINGS, element: getRouteElement(Settings) },
  { path: paths.ALL_OFFERS, element: getRouteElement(AllOffers) },
  {
    path: paths.TERMS_AND_CONDITIONS,
    element: getRouteElement(TermsAndConditions),
  },
  {
    path: paths.PRIVACY_POLICY,
    element: getRouteElement(PrivacyPolicy),
  },
];

export default createBrowserRouter(routes);
