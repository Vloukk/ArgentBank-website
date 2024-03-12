import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TransactionEdit from './TransactionEdit';
import TransactionDropdown from './TransactionDropdown';

const Transaction = ({ transaction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedNote, setEditedNote] = useState(transaction.note || ''); // Vérifie si la propriété "note" existe, sinon initialiser à une chaîne vide

  const handleSaveNote = (editedNote) => {
    // Vérifier si la propriété "note" existe dans transaction
    if (!transaction.hasOwnProperty('note')) {
      // Créer une nouvelle propriété "note" dans transaction avec la valeur modifiée
      transaction.note = editedNote;
    }
    setEditedNote(editedNote);
  };

  return (
    <div className='transaction__container'>
      <div className="table-body">
        <div className="table-row">
          <div>{transaction.date}</div>
          <div>{transaction.description}</div>
          <div>{transaction.amount}</div>
          <div>{transaction.balance}</div>
          <div>
            <span onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FontAwesomeIcon icon={faChevronUp} className='fa-solid fa-chevron-up'/>
            ) : (
              <FontAwesomeIcon icon={faChevronDown} className='fa-solid fa-chevron-down'/>
            )}
            </span>
          </div>
        </div>
      </div>
      {isOpen && (
      <div className="transaction__details">
        <div className='details__type'>
          <label htmlFor="lastname">Transaction type :</label>
          <p>Category : </p>
          <p>Note : </p>
        </div>
        <div className='details__order'>
          <p>{transaction.type}</p>
          <div>
            <TransactionDropdown note={transaction.category}/>
          </div>
          <div>
            <TransactionEdit note={editedNote} onSaveNote={handleSaveNote}/>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Transaction;
