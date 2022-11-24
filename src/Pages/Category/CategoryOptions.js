import React from 'react';
import { Link } from 'react-router-dom';

const CategoryOptions = ({ category }) => {
    const { name, images } = category;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={images} alt="" className="h-28 w-34 rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="card-actions justify-end">
          <Link to="/CategoryDetails" className="btn btn-primary btn-sm">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryOptions;