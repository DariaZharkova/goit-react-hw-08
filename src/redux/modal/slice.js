import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: null,
    modalData: {},
  },
  reducers: {
    openModal(state, action) {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
      state.modalData = action.payload.modalData || null;
    },
    closeModal(state) {
      state.isOpen = false;
      state.modalType = null;
      state.modalData = null;
    },
  },
});

export const { openModal, closeModal } = slice.actions;

export default slice.reducer;
