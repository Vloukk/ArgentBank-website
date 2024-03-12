import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';

const TransactionDropdown = ({note, onSaveNote}) => {
    const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEditIconClick = () => {
    setIsEditing(true);
  };

  const handleSelectChange = (e) => {
    setEditedNote(e.target.value);
  };

  const handleSaveClick = () => {
    onSaveNote && onSaveNote(editedNote);
    setIsEditing(false); // Désactiver l'édition après avoir sauvegardé la note
  };
  

  return (
    <div className='transaction__dropdown'>
      <div>
        {isEditing ? (
          <>
            <select 
              value={editedNote} 
              onChange={handleSelectChange} 
              onBlur={handleSaveClick} 
              autoFocus 
            >
              <option value="Option 1">Food</option>
              <option value="Option 2">leisure</option>
              <option value="Option 3">other</option>
              {/* Ajoutez d'autres options selon vos besoins */}
            </select>
            <FontAwesomeIcon icon={faCheck} className="fa-solid fa-check" onClick={handleSaveClick} />
          </>
        ) : (
          <div onClick={handleEditIconClick}>
            <p>{editedNote}</p>
            <FontAwesomeIcon icon={faPencil} className="fa-solid fa-pencil" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TransactionDropdown;
