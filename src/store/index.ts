import { configureStore } from '@reduxjs/toolkit';

import appReducer from 'store/slices/appSlice';
import commonReducer from 'store/slices/commonSlice';
import authReducer from 'store/slices/authSlice';

import BaseAPI from 'api/BaseApi';
import mutationMiddleware from 'api/middleware/MutationMiddleware';

const store = configureStore({
  reducer: {
    [BaseAPI.reducerPath]: BaseAPI.reducer,
    app: appReducer,
    common: commonReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([BaseAPI.middleware, mutationMiddleware]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
