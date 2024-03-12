import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import CardContent from './CardContent';

const Card = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='card__wrapper'>
      <div className='card__container' onClick={() => setIsOpen(!isOpen)}>
        <div className='card__info'>
          <h3>{item.title}</h3>
          <p className='card__info__amount'>{item.amount}</p>
          <p className='card__info__text'>{item.description}</p>
        </div>
        <span>
          {isOpen ? (
            <FontAwesomeIcon icon={faXmark} className="fa-light fa-xmark" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} className='fa-solid fa-chevron-down'/>
          )}
        </span>
      </div>
      {isOpen && <CardContent transactions={item.transactions} />}
    </div>
  );
};

export default Card;
