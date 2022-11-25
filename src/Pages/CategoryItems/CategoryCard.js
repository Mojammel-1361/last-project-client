import React from 'react';

const CategoryCard = ({ detail, setItems }) => {
  const { product, img, price } = detail;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-32" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product}</h2>
        <p>Price: {price} Tk</p>
        <div className="card-actions justify-end">
          <label
            onClick={() => setItems(detail)}
            htmlFor="product-views"
            className="btn btn-primary btn-sm"
          >
            More details
          </label>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;