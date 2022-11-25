import React from 'react';

const Modal = ({ items }) => {
    const { location, title, product, price, use, img } = items;
    
  return (
    <>
      <input type="checkbox" id="product-views" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-2xl ">
          <img className="w-96" src={img} alt="" />
          <h3 className="font-bold mt-6 text-lg">Laptop Model: {product}</h3>
          <h3 className="mt-6 text-lg">
            {" "}
            <span className="font-bold">Details</span>: {title}
          </h3>
          <p>
            <span className="font-bold">Price :</span> {price} Taka.
          </p>
          <p>
            <span className="font-bold">How Long Use:</span> {use} Years.
          </p>
          <p>
            <span className="font-bold">Location :</span> {location}.
          </p>
          <div className="modal-action">
            <label htmlFor="product-views" className="btn btn-primary btn-sm">
              X
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;