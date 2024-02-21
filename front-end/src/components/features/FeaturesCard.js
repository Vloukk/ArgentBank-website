import React from 'react';

function FeaturesCard({image, title, text}) {

  return (
    <div className='featurescard'>
        <img src={image} alt={title} className="featurescard__img" />
        <h3 className="featurescard__title">{title}</h3>
        <p className='featurescard__text'>{text}</p>
    </div>
  );
}

export default FeaturesCard;