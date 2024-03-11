import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '../../redux/reducers/userSlice';

const UpdateForm = ({ userData, onClose }) => {
    const dispatch = useDispatch()
    const [username, setUsername] = useState(userData.username);
    const [firstname, setFirstname] = useState(userData.firstname);
    const [lastname, setLastname] = useState(userData.lastname);

    // Fonction pour soumettre les données au serveur
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Dispatchez l'action pour mettre à jour le profil avec les nouvelles données
            dispatch(updateUserProfile({
                username,
                firstname,
                lastname
            }));
            // Fermez la modal après avoir soumis les données avec succès
            onClose();
        } catch (error) {
            console.error('Erreur lors de la mise à jour des données utilisateur :', error);
        }
    };

    // Fonction pour fermer la modal
    const handleCloseModal = () => {
        onClose();
    };


  return (
    <div className='uptdate-form__container'>
        <form className='update__form' onSubmit={handleSubmit}>
            <div className='input__wrapper'>
                <label htmlFor="firstname">Username :</label>
                <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='input__wrapper'>
                <label htmlFor="lastname">firstname :</label>
                <input type="text" id="firstname" value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
            </div>
            <div className='input__wrapper'>
                <label htmlFor="lastname">Lastname :</label>
                <input type="text" id="lastname" value={lastname} onChange={(e) => setLastname(e.target.value)}/>
            </div>
          <div className='button__form'>
            <button type="submit">Save</button>
            <button type='button' onClick={handleCloseModal}>Cancel</button>
          </div>
        </form>
    </div>
  );
};

export default UpdateForm;





