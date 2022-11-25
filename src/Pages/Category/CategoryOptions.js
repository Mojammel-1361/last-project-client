import React from 'react';
import { Link } from 'react-router-dom';




const CategoryOptions = ({ category }) => {
    const { name, images, _id } = category;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={images} alt="" className="h-28 w-34 rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <div className="card-actions justify-end">
          <Link
            to={`/categoryItems/${_id}`}
            className="btn btn-primary btn-sm"
          >
            {name}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryOptions;