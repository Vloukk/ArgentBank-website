import React from 'react';
import featuresData from '../../datas/Features.json';
import FeaturesCard from './FeaturesCard';

function Features() {
  return (
    <div className='features'>
      {featuresData.map((feature) => (
        <div key={feature.id} className='features__box'>
          <FeaturesCard image={feature.image} title={feature.title} text={feature.content} />
        </div>
      ))}
    </div>
  );
}

export default Features;
