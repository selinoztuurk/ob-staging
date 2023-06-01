import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Language {
  EN = 'en',
  TR = 'tr',
}

export interface AppState {
  language: Language;
}

const INITIAL_STATE = {
  language: Language.TR,
} as AppState;

const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = appSlice.actions;

export default appSlice.reducer;
