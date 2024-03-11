import { Navigate } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const UserProtect = ({ children }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  // Vérifie si l'utilisateur est authentifié
  if (isAuthenticated) {
    return children; // L'utilisateur est authentifié, rend les enfants (composants protégés)
  } else {
    // L'utilisateur n'est pas authentifié, redirige vers la page de connexion
    return <Navigate to="/login" />;
  }
};

export default UserProtect;