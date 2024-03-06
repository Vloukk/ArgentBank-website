import { createSlice } from '@reduxjs/toolkit';
import { GET_USER_PROFILE } from '../actions/userAction';

const initialState = {
  name: '',
  email: '',
  username: '',
  firstname: '',
  lastname: '',
  createdAt: '',
  updatedAt: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GET_USER_PROFILE, (state, action) => {
      state.firstname = action.payload.firstName;
      state.lastname = action.payload.lastName;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
    });
  },
});

export default userSlice.reducer;
