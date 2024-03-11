import React, { useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// components
import UpdateForm from '../updateform/UpdateForm';

const UserWelcome = () => {
  const user = useSelector(state => state.user);
  const [isEditing, setIsEditing] = useState(false);

  // Fonction pour ouvrir edit
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // Fonction pour fermer la modal
  const handleCloseModal = () => {
    setIsEditing(false);
  };

  return (
    <div className='user__welcome'>
      <h2>Welcome back <br /> {user.firstname} {user.lastname}!</h2>
      {isEditing ? ( // Affichez le formulaire de profil si l'édition est activée
        <UpdateForm userData={user} onClose={handleCloseModal}/>
      ) : (
        <button className='btn-user' onClick={handleEditClick}>Edit Name</button>
      )}
    </div>
  );
};

export default UserWelcome;
