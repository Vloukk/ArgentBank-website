import React from 'react';

const Card = ({ item }) => {
  return (
    <>
    <div className='card__container'>
        <div className='card__info'>
            <h3>{item.title}</h3>
            <p className='card__info__amount'>{item.amount}</p>
            <p className='card__info__text'>{item.description}</p>
        </div>
        <button className='btn-card'>View transaction</button>
    </div>
    </>
  );
};

export default Card;