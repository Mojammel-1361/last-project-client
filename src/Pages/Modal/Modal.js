import React from 'react';
import { toast } from 'react-hot-toast';


const Modal = ({ items, setItems }) => {
  const { title, location, product, price, use, img } = items;
 

  const handelAdd = event => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value; 

    

    const addCard = { location, title, product, price, use, img, name, email, phone };

    fetch("http://localhost:5000/addCards", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addCard),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(null);
        toast.success("product add Card");
      });
  };

  return (
    <div>
      <input type="checkbox" id="product-views" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-xl ">


          <form onSubmit={handelAdd} className="grid grid-cols-1 gap-3">
            <img className="w-96" src={img} alt="" />
            <h3 className="font-bold mt-6 text-lg">Laptop Model: {product}</h3>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="mt-3 input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="email"
              type="email"
              placeholder="email"
              className="mt-3 input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="phone"
              type="text"
              placeholder="phone"
              className=" mt-3 input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="title"
              value={title}
              type="text"
              placeholder="title"
              className=" mt-3 input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="price"
              type="text"
              value={price}
              placeholder="Price"
              className=" mt-3 input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="use"
              type="use"
              value={use}
              placeholder="use"
              className=" mt-3 input input-bordered input-primary w-full max-w-xs"
            />
            <input
              name="location"
              value={location}
              type="text"
              placeholder="location"
              className=" mt-3 input input-bordered input-primary w-full max-w-xs"
            />
            <input
              className="w-full max-w-xs btn btn-primary btn-sm"
              type="submit"
              name=""
              value="Add Card"
            />
          </form>

          <div className="modal-action">
            <label htmlFor="product-views" className="btn btn-primary btn-sm">
              Back
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;