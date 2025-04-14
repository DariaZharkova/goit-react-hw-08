import { createSlice } from '@reduxjs/toolkit';

const themes = ['green', 'blue', 'orange', 'pink'];

const slice = createSlice({
  name: 'theme',
  initialState: {
    value: 'green',
  },
  reducers: {
    changeTheme(state) {
      const currentIdx = themes.indexOf(state.value);
      const nextIdx = (currentIdx + 1) % themes.length;
      state.value = themes[nextIdx];
    },
  },
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
