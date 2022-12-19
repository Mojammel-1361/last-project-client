import React from 'react';

const AdvertisedCard = ({ advertised }) => {
    const { name, details, image, condition, location, price } = advertised;
    
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-32 rounded-xl" src={image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{condition}</div>
          </h2>
          <p>Details: {details}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Location: {location}</div>
            <div className="badge badge-outline">Price: {price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;