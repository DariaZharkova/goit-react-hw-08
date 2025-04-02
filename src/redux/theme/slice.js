import { createSlice } from '@reduxjs/toolkit';

const themes = ['green', 'blue', 'orange', 'gray'];

const slice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'green',
  },
  reducers: {
    changeTheme(state) {
      const currentIdx = themes.indexOf(state.theme);
      const nextIdx = (currentIdx + 1) % themes.length;
      state.theme = themes[nextIdx];
    },
  },
});

export const { changeTheme } = slice.actions;

export default slice.reducer;
