import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum ModalType {
  Success = 'success',
  Warning = 'warning',
  Fail = 'fail',
}

export interface ModalState {
  open: boolean;
  type: ModalType | null;
}

export interface CommonState {
  loading: boolean;
  modal: ModalState;
}

const INITIAL_MODAL_STATE: ModalState = {
  open: false,
  type: null,
};

const INITIAL_STATE: CommonState = {
  loading: false,
  modal: INITIAL_MODAL_STATE,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: INITIAL_STATE,
  reducers: {
    showLoading: (mutableState) => {
      mutableState.loading = true;
    },
    hideLoading: (mutableState) => {
      mutableState.loading = false;
    },
    openModal: (mutableState, action: PayloadAction<ModalType>) => {
      mutableState.modal = {
        open: true,
        type: action.payload,
      };
    },
    closeModal: (mutableState) => {
      mutableState.modal = {
        open: false,
        type: null,
      };
    },
  },
});

export const { showLoading, hideLoading, openModal, closeModal } =
  commonSlice.actions;

export default commonSlice.reducer;
