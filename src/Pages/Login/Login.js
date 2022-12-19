import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';

import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { toast } from 'react-hot-toast';



const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const { LoginUser} = useContext(AuthContext);
   
    const [loginError, setLoginError] = useState('');
    
    const { googleLogin } = useContext(AuthContext);
     const provider = new GoogleAuthProvider();

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.form?.pathname || '/';

      const handleGoogle = () => {
        googleLogin(provider)
          .then((result) => {
            const user = result.user;
            console.log(user);
            navigate('/')
            // setLoginUserEmail(user.email);
            toast.success("Login successfully");
          })
          .catch((err) => console.error(err));
      };

     const handleLogin = (data) => {
       console.log(data);
       setLoginError('');
       LoginUser(data.email, data.password)
         .then((result) => {
           const user = result.user;
           console.log(user);
           navigate(from, {replace: true})
           toast.success("Login successfully");
         })
         .catch((error) => {
          
           console.log(error.message)
           setLoginError(error.message);
         });
     };

    return (
      <div className=" h-[800px] flex justify-center items-center">
        <div className="w-96 p-6">
          <h1 className="text-xl">Login</h1>
          <form onSubmit={handleSubmit(handleLogin)}>
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
            <div>
              {loginError && <p className="text-red-500">{loginError}</p>}
            </div>
          </form>
          <p>
            New to this web side{" "}
            <Link className="text-primary" to="/signup">
              Create a new account
            </Link>{" "}
          </p>
          <div className="divider">OR</div>
          <button
            onClick={handleGoogle}
            className="btn btn-outline btn-success w-full"
          >
            Login With Google
          </button>
        </div>
      </div>
    );
};

export default Login;