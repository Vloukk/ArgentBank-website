import axios from 'axios';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';
const token = localStorage.getItem("token");

export const getUserProfile = () => async (dispatch, getState) => {
    try {
      const state = getState();
      const token = state.auth.token;
  
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
  
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', null, config);
      const { firstName, lastName, email, username, createdAt, updatedAt } = response.data.body;
      dispatch({ type: GET_USER_PROFILE, payload: { firstName, lastName, email, username, createdAt, updatedAt } });
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };
  