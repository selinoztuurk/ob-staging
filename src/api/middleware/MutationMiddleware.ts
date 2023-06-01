/*
 * Copyright 2018-2023 Commencis. All Rights Reserved.
 *
 * Save to the extent permitted by law, you may not use, copy, modify,
 * distribute or create derivative works of this material or any part
 * of it without the prior written consent of Commencis.
 * Any reproduction of this material must contain this notice.
 */

import { isFulfilled, isRejectedWithValue } from '@reduxjs/toolkit';
import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
import { QueryStatus } from '@reduxjs/toolkit/dist/query';

import { RtkRequestType } from 'common/constants/apiConstants';

import {
  hideLoading,
  ModalType,
  openModal,
  showLoading,
} from 'store/slices/commonSlice';

const mutationMiddleware: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (action?.meta?.arg) {
      const { type } = action.meta.arg;

      if (type === RtkRequestType.Mutation) {
        const { requestStatus } = action.meta;

        if (requestStatus === QueryStatus.pending) {
          api.dispatch(showLoading());
        } else if (
          requestStatus === QueryStatus.fulfilled ||
          requestStatus === QueryStatus.rejected
        ) {
          api.dispatch(hideLoading());

          if (isFulfilled(action)) {
            api.dispatch(openModal(ModalType.Success));
          } else if (isRejectedWithValue(action)) {
            api.dispatch(openModal(ModalType.Fail));
          }
        }
      }
    }

    return next(action);
  };

export default mutationMiddleware;
