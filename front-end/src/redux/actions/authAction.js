import { loginSuccess, loginFailure } from '../../redux/reducers/authSlice';
import axios from 'axios';

// Action de connexion
export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3001/api/v1/user/login', { email, password });
      dispatch({ type: loginSuccess, payload: response.data.body });
      localStorage.setItem('token', response.data.body.token); 

    } catch (error) {
      // Dispatch action pour indiquer une erreur de connexion
      dispatch(loginFailure(error.message));
    }
  };
};

//////////////////////////////////////////////////////////////////////////////////////////
