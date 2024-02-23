import axios from "axios";

// Types d'actions
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT = 'LOGOUT';

export const login = (email, password) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/login`, { email, password });
      // Ajoutez un log pour afficher le token JWT récupéré
      console.log('Token JWT récupéré :', response.data.token);
      
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      // Stocker le token JWT dans le local storage ou dans un cookie
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
  };

export const logout = () => (dispatch) => {
    dispatch({ type: LOGOUT })
  };