import { createSlice } from '@reduxjs/toolkit';
import { GET_USER_PROFILE} from '../actions/userAction';

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
  reducers: {
    // Reducer pour mettre à jour le profil utilisateur
    updateUserProfile(state, action) {
      const { firstname, lastname, email, username, createdAt, updatedAt } = action.payload;
      state.firstname = firstname;
      state.lastname = lastname;
      state.email = email;
      state.username = username;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    },
  },
  extraReducers: (builder) => {
    // Gestion des actions supplémentaires
    builder.addCase(GET_USER_PROFILE, (state, action) => {
      const { firstName, lastName, email, username, createdAt, updatedAt } = action.payload;
      state.firstname = firstName;
      state.lastname = lastName;
      state.email = email;
      state.username = username;
      state.createdAt = createdAt;
      state.updatedAt = updatedAt;
    });
  },
});

export const { updateUserProfile } = userSlice.actions;

export default userSlice.reducer;
