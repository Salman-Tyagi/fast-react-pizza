import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    username(state, action) {
      state.username = action.payload;
    },
  },
});

export const { username } = userSlice.actions;

export default userSlice.reducer;
