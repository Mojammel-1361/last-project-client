import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SingUp = () => {
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();

    const handleSingUp = (data) => {
      console.log(data);
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

            <div className="form-control w-full">
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
              <label className="label">
                <span className="label-text">Forget Password</span>
              </label>
            </div>

            <input
              className="btn btn-primary  w-full p-6"
              value="Login"
              type="submit"
            />
          </form>
          <p>
            New to this web side{" "}
            <Link className="text-primary" to="/login">
              Have a account
            </Link>{" "}
          </p>
          <div className="divider">OR</div>
          <button className="btn btn-outline btn-success w-full">
            Login with Google
          </button>
        </div>
      </div>
    );
};

export default SingUp;