import { useDispatch, useSelector } from 'react-redux';

import { RootState } from 'store';
import {
  setAuthToken,
  setLoggedIn,
  setLoggedOut,
} from 'store/slices/authSlice';

const useAuth = () => {
  const dispatch = useDispatch();

  const { authToken, isLoggedIn } = useSelector(
    (state: RootState) => state.auth
  );

  const setCurrentAuthToken = (authToken: string) => {
    dispatch(setAuthToken(authToken));
  };

  const setUserLoggedIn = () => {
    dispatch(setLoggedIn());
  };

  const setUserLoggedOut = () => {
    dispatch(setLoggedOut());
  };

  return {
    authToken,
    isLoggedIn,
    setCurrentAuthToken,
    setUserLoggedIn,
    setUserLoggedOut,
  };
};

export default useAuth;
