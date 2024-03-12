import React from 'react';
import Transaction from './Transaction';

const CardContent = ({ transactions }) => {
  return (
    <div className='card__content'>
      <div className="card__content__title">
        <span>Date</span>
        <span>Description</span>
        <span>Amount</span>
        <span>Balance</span>
      </div>
      {transactions.map((transaction, index) => (
        <Transaction key={index} transaction={transaction} />
      ))}
    </div>
  );
};

export default CardContent;
