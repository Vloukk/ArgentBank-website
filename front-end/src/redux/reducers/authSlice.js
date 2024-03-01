import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    token: null,
    user: null,
    error: null,
  },
  reducers: {
    // Réducteur pour gérer une connexion réussie
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = null;
    },
    // Réducteur pour gérer une erreur de connexion
    loginFailure: (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null; 
      state.error = action.payload;
    },
    // Réducteur pour gérer la déconnexion de l'utilisateur
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;

export default authSlice.reducer;