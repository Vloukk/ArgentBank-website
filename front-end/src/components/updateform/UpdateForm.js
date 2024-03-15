import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/reducers/userSlice';
import axios from 'axios';

const UpdateForm = ({ user, onClose }) => {
  console.log('user:', user);
  const [newUsername, setNewUsername] = useState(user.username ? user.username : '');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  const handleSubmit = async event => {
    event.preventDefault();
  
    // Validation côté client du nom d'utilisateur
    if (!isValidName(newUsername)) {
      setErrorMessage('Invalid username');
      return;
    }
  
    try {
      const response = await axios.put('http://localhost:3001/api/v1/user/profile', {
        userName: newUsername,
        // Incluez le prénom et le nom de famille dans la demande de mise à jour
        firstName: user.firstname,
        lastName: user.lastname
      }, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.status === 200) {
        const { userName, firstName, lastName } = response.data.body;
  
        // Mettre à jour toutes les informations de l'utilisateur dans le store Redux
        dispatch(setUser({ userName, firstName, lastName }));
  
        // Afficher un message de succès
        setSuccessMessage('Username successfully updated!');
  
        // Fermer le formulaire après quelques secondes
        setTimeout(() => {
          setSuccessMessage('');
          onClose();
        }, 3000);
      } else {
        // Gérer les cas où la requête échoue
        console.log('Failed to update username');
      }
    } catch (error) {
      console.error('Error updating username:', error);
    }
  };

  // Fonction de validation du nom d'utilisateur
  const isValidName = name => {
    // Implémentez votre logique de validation ici
    return name.trim() !== '';
  };

  return (
    <div className='uptdate-form__container'>
      <form className='update__form' onSubmit={handleSubmit}>
        <div className='input__wrapper'>
          <label htmlFor='username'>Username :</label>
          <input
            type='text'
            id='username'
            defaultValue={newUsername || ''}
            onChange={(event) => setNewUsername(event.target.value)}
          />
        </div>
        <div className='input__wrapper'>
          <label htmlFor='firstname'>Firstname :</label>
          <input
            type='text'
            id='firstname'
            defaultValue={user.firstname}
            disabled={true}
          />
        </div>
        <div className='input__wrapper'>
          <label htmlFor='lastname'>Lastname :</label>
          <input
            type='text'
            id='lastname'
            defaultValue={user.lastname}
            disabled={true}
          />
        </div>
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        {successMessage && <p className='success-message'>{successMessage}</p>}
        <div className='button__form'>
          <button type='submit'>Save</button>
          <button type='button' onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
