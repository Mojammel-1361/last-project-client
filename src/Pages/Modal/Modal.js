import React from 'react';
import { toast } from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';


const Modal = ({ items, setItems }) => {
  const { user } = useContext(AuthContext);
  const { title, location, product, price, use, img } = items;
  
  console.log(user.name, user.email)

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
            <h3 className="font-bold mt-6 text-lg">Laptop Model: {product} </h3>
            <input
              name="name"
              defaultValue={user?.displayName}
              disabled
              type="text"
              placeholder="Name"
              className="mt-3 input input-bordered input-primary w-full "
            />
            <input
              name="email"
              defaultValue={user?.email}
              disabled
              type="email"
              placeholder="email"
              className="mt-3 input input-bordered input-primary w-full"
            />
            <input
              name="phone"
              type="text"
              placeholder="phone"
              className=" mt-3 input input-bordered input-primary w-full "
            />

            <input
              name="price"
              type="text"
              value={price}
              disabled
              placeholder="Price"
              className=" mt-3 input input-bordered input-primary w-full"
            />
            <input
              name="use"
              type="use"
              value={use}
              disabled
              placeholder="use"
              className=" mt-3 input input-bordered input-primary w-full "
            />
            <input
              name="location"
              value={location}
              disabled
              type="text"
              placeholder="location"
              className=" mt-3 input input-bordered input-primary w-full "
            />
            <h3 className=" mt-6 ">Laptop Details: {title} </h3>
            <input
              className="w-full  btn btn-primary btn-sm"
              type="submit"
              name=""
              value="Add Card"
            />
          </form>

          <div className="modal-action">
            <label  className="btn btn-secondly btn-sm">
              wish
            </label>
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