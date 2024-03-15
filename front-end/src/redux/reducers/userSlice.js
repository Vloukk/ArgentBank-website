import { createSlice } from '@reduxjs/toolkit';
import { GET_USER_PROFILE } from '../actions/userAction';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  username: '',
  createdAt: '',
  updatedAt: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { firstName, lastName, email, userName, createdAt, updatedAt } = action.payload;
      state.firstname = firstName;
      state.lastname = lastName;
      state.email = email;
      state.username = userName;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GET_USER_PROFILE, (state, action) => {
      const { firstName, lastName, email, userName, createdAt, updatedAt } = action.payload;
      state.firstname = firstName;
      state.lastname = lastName;
      state.email = email;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    
      if (userName) {
        state.username = userName;
      }
    });
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
