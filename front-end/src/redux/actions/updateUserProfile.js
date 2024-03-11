import axios from 'axios';

// Action pour mettre à jour le profil utilisateur
export const updateUserProfile = (token, userData) => async (dispatch) => {
  try {
    // Effectue une requête PUT pour mettre à jour le profil utilisateur
    await axios.put('http://localhost:3001/api/v1/user/profile', userData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Dispatche une action si nécessaire
    dispatch({ type: 'USER_PROFILE_UPDATED', payload: userData });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du profil utilisateur :', error);
  }
};

