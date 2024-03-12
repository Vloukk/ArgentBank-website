import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPencil } from '@fortawesome/free-solid-svg-icons';

const TransactionEdit = ({ note, onSaveNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note);

  const handleEditIconClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setEditedNote(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    // Enregistrez les modifications dans votre JSON ici, par exemple, en appelant une fonction fournie par le parent.
    onSaveNote && onSaveNote(editedNote);
  };

  const handleSaveClick = () => {
    // Enregistrez les modifications dans votre JSON ici, par exemple, en appelant une fonction fournie par le parent.
    onSaveNote && onSaveNote(editedNote);
  };

  return (
    <div className='transaction__edit'>
      <div>
        {isEditing ? (
          <>
            <input 
              type="text" 
              value={editedNote} 
              onChange={handleInputChange} 
              onBlur={handleInputBlur} 
              autoFocus 
            />
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

export default TransactionEdit;
