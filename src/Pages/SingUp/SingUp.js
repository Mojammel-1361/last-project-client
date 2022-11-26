import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';


const SingUp = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    const { createUser, updateUser } = useContext(AuthContext);
    const[signUpError, setSignUpError] = useState('')
    const navigate = useNavigate();

    const handleSingUp = (data) => {
      setSignUpError('');
      createUser(data.email, data.password)
      .then(result =>{
        const user = result.user;
        console.log(user)
        navigate('/');
        toast.success('user created successfully')

        const userInfo = {
          displayName: data.name,
        };

        updateUser(userInfo)
          .then(() => {})
          .catch((error) => console.error(error));
      })
      .catch(error => {
        
        console.log(error)
        setSignUpError(error.message)
      });
    };


    return (
      <div className=" h-[800px] flex justify-center items-center">
        <div className="w-96 p-6">
          <h1 className="text-xl">SingUp Page</h1>

          <form onSubmit={handleSubmit(handleSingUp)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Name</span>
              </label>

              <input
                type="text"
                {...register("name")}
                className="input input-bordered w-full "
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Email</span>
              </label>

              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                })}
                className="input input-bordered w-full "
              />
              {errors.email && (
                <p className="text-red-500" role="alert">
                  {errors.email?.message}
                </p>
              )}
            </div>

            <div className="form-control w-full">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Select the options</span>
                </label>
                <select
                  className="select select-bordered"
                  {...register("type")}
                >
                  <option>Seller</option>
                  <option>Buyer</option>
                </select>
              </div>
            </div>

            <div className="form-control w-full mb-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                className="input input-bordered w-full "
              />
              {errors.password && (
                <p className="text-red-500" role="alert">
                  {errors.password?.message}
                </p>
              )}
            </div>

            <input
              className="btn btn-primary  w-full p-6"
              value="Sing Up"
              type="submit"
            />
            {signUpError && <p className="text-red-500">{signUpError}</p>}
          </form>

          <p>
            New to this web side{" "}
            <Link className="text-primary" to="/login">
              Have a account
            </Link>{" "}
          </p>
          
        </div>
      </div>
    );
};

export default SingUp;