import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getLocallySavedAuthToken } from 'common/util/AuthUtil';

const token = getLocallySavedAuthToken();

export interface AuthState {
  authToken: string;
  isLoggedIn: boolean;
}

const INITIAL_STATE = {
  authToken: token,
  isLoggedIn: false,
} as AuthState;

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    setAuthToken: (state, action: PayloadAction<string>) => {
      state.authToken = action.payload;
    },
    setLoggedIn: (state) => {
      state.isLoggedIn = true;
    },
    setLoggedOut: (state) => {
      state.isLoggedIn = false;
    },
  },
});

export const { setAuthToken, setLoggedIn, setLoggedOut } = authSlice.actions;

export default authSlice.reducer;
