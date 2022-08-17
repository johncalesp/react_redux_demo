import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state, { payload }) => {
      if (payload.open) {
        state.isOpen = true;
      } else {
        state.isOpen = false;
      }
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
