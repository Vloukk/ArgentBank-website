import axios from 'axios';

export const GET_USER_PROFILE = 'GET_USER_PROFILE';

// Action creator pour récupérer le profil utilisateur
export const getUserProfile = () => async (dispatch, getState) => {
    try {
      // Extrait le jeton d'authentification du state Redux
      const state = getState();
      const token = state.auth.token;
  
      // Configuration de la requête avec le jeton d'authentification
      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
  
      // Effectue une requête POST pour récupérer le profil utilisateur
      const response = await axios.post('http://localhost:3001/api/v1/user/profile', null, config);
      
      // Extrait les données du corps de la réponse
      const { firstName, lastName, email, username, createdAt, updatedAt } = response.data.body;

      // Dispatche une action avec les données du profil utilisateur récupérées
      dispatch({ type: GET_USER_PROFILE, payload: { firstName, lastName, email, username, createdAt, updatedAt } });
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };