import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useForm();

  const imgHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const handelAddPorduct = (data) =>{
    const image = data.image[0];
    
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
    fetch(url, {
      method: 'POST',
      body: formData 
    })
    .then(res => res.json())
    .then(imgData =>{
      if(imgData.success){
        // console.log(imgData.data.url);
        const products = {
          name: data.model,
          price: data.price,
          details: data.details,
          location: data.location,
          condition: data.condition,
          image: imgData.data.url,
        }
        fetch("https://resale-market-server-green.vercel.app/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(products),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            toast.success("product  Uploaded ");
            navigate("/dashboard/ManageProduct");
          });
      }
    })
  }
    return (
      <div>
        <h1 className="text-3xl">Add Product</h1>
        <form className="w-96 p-7" onSubmit={handleSubmit(handelAddPorduct)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Laptop Name & Model</span>
            </label>

            <input
              type="text"
              {...register("model")}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Price</span>
            </label>

            <input
              type="text"
              {...register("price")}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>

            <input
              type="text"
              {...register("details")}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Location</span>
            </label>

            <input
              type="text"
              {...register("location")}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Condition / Lock like</span>
            </label>

            <input
              type="text"
              {...register("condition")}
              className="input input-bordered w-full "
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo</span>
            </label>

            <input
              type="file"
              {...register("image")}
              className="input input-bordered w-full "
            />
          </div>

          <input
            className="btn btn-primary  w-full p-6 mt-3"
            value="uploaded"
            type="submit"
          />
        </form>
      </div>
    );
};

export default AddProduct;